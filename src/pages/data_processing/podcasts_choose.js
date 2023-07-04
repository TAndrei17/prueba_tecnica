// { id, author, podcast }

const choosePodcasts = (array, text = null) => {
  if (text === null) {
    return array;
  }

  const clearArray = array.filter((item) => {
    const { author, podcast } = item;
    const checkAuthor = author.toLowerCase().startsWith(text.toLowerCase());
    const checkPodcast = podcast.toLowerCase().startsWith(text.toLowerCase());
    return checkAuthor || checkPodcast;
  });

  return clearArray;
};

export default choosePodcasts;
