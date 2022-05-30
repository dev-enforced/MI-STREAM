const videoShufflerFunction = (videoListProvided) => {
  const shuffledVideoList = [...videoListProvided];
  for (let i = shuffledVideoList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledVideoList[i], shuffledVideoList[j]] = [
      shuffledVideoList[j],
      shuffledVideoList[i],
    ];
  }
  return shuffledVideoList;
};

export { videoShufflerFunction };
