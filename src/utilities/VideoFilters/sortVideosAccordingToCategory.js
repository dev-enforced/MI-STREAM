const sortVideosAccordingToCategoryFunction = (
  videosListProvided,
  categoryChoice
) => {
  if (categoryChoice !== "All") {
    return videosListProvided.filter(
      (everyVideo) => everyVideo.categoryName === categoryChoice
    );
  } else {
    return videosListProvided;
  }
};

export { sortVideosAccordingToCategoryFunction };
