// { id, author, podcast }

const filterPodcasts = (array, text = null) => {
  if (text === null) {
    return array;
  }

  const clearArray = array.filter((item) => {
    const { author, podcast } = item;
    const checkAuthor = author.startsWith(text);
    const checkPodcast = podcast.startsWith(text);
    return checkAuthor || checkPodcast;
  });

  return clearArray;
};

export default filterPodcasts;
