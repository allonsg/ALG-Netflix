const favoriteUtils = {
  check: ({ listFavorites, mediaId }) =>
    listFavorites &&
    listFavorites.find((el) => el.mediaId.toString() === mediaId.toString()) !==
      undefined,
};

export default favoriteUtils;
