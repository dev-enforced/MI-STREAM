const viewCountFormatter = (views) => {
  let viewsNumber = Number(views);
  if (viewsNumber > 999 && viewsNumber < 1000000) {
    return parseInt(viewsNumber / 1000) + "k";
  } else if (viewsNumber > 1000000) {
    return parseInt(viewsNumber / 1000000) + "M";
  } else if (viewsNumber <= 999) {
    return viewsNumber;
  }
};
export { viewCountFormatter };
