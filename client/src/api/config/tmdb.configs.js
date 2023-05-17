const mediaType = {
  movie: "movie",
  tv: "tv",
};

const mediaCategory = {
  popular: "popular",
  top_rated: "top_rated",
};

const backdropPath = (imgEnpoint) =>
  `https://image.tmdb.org/t/p/original${imgEnpoint}`;

const posetPath = (imgEnpoint) =>
  `https://image.tmdb.org/t/p/w500${imgEnpoint}`;

const youtubePath = (videoId) =>
  `https://www.youtube.com/embed/${videoId}?controls=0`;

const tbdmConfigs = {
  mediaType,
  mediaCategory,
  backdropPath,
  posetPath,
  youtubePath,
};

export default tbdmConfigs;
