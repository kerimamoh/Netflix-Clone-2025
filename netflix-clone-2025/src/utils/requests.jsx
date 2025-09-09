const API_KEY = import.meta.env.VITE_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key${API_KEY}&language=en-US`,
  fetchActionMovies: `/disover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/disover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/disover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/disover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/disover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language-US&page=1`,
};

export default requests;
