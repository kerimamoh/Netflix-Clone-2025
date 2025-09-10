import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [Movie, setMovie] = useState([]);
  const [TrailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (Movie) => {
    if (TrailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(Movie?.title || Movie?.name || Movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {Movie?.map((Movie, index) => (
          <img
            onClick={() => handleClick(Movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? Movie.poster_path : Movie.backdrop_path
            }`}
            alt={Movie.name}
            className={`row_poster $ {isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>

      <div style={{ padding: "40px" }}>
        {TrailerUrl && <YouTube videoId={TrailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
// import { useEffect, useState } from "react";
// import "./Row.css";
// import axios from "../../../utils/axios";
// import movieTrailer from "movie-trailer";
//  import YouTube from "react-youtube";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   const baseUrl = "https://image.tmdb.org/t/p/original";

//   useEffect(() => {
//     (async () => {
//       try {
//         console.log(fetchUrl);
//         const request = await axios.get(fetchUrl);

//         //  const request = await axios.get(`http://localhost:4000/api/${fetchUrl}`);

//         console.log(request);
//         setMovies(request.data.results);
//       } catch (error) {
//         console.log("error", error);
//       }
//     })();
//   }, [fetchUrl]);
//   //

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name)
//         .then((url) => {
//           console.log(url);
//           const urlParams = new URLSearchParams(new URL(url).search);
//           console.log(urlParams);
//           console.log(urlParams.get("v"));
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <>
//       <div className="row">
//         <h1>{title}</h1>
//         <div className="row_posters">
//           {movies?.map((movie, index) => (
//             <img
//               onClick={() => handleClick(movie)}
//               key={index}
//               src={`${baseUrl}${
//                 isLargeRow ? movie.poster_path : movie.backdrop_path
//               }`}
//               alt={movie.name}
//               className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//             />
//           ))}
//         </div>

//         <div style={{ padding: "40px" }}>
//           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Row;