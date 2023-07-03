import axios from 'axios';
import linkPodcasts from '../url';

const getPodcasts = async () => {
  const normalizeData = {
    allPodcasts: {},
  };

  const { allPodcasts } = normalizeData;

  try {
    const { data } = await axios.get(linkPodcasts);
    const { entry } = data.feed;
    // record load time
    normalizeData.loadTime = new Date().getTime();

    entry.forEach((item) => {
      const id = item.id.attributes['im:id'];
      const author = item['im:artist'].label;
      const podcast = item['im:name'].label;
      const idName = `id${id}`;
      allPodcasts[idName] = { id, author, podcast };
    });
  } catch {
    // eslint-disable-next-line no-undef
    rollbar.critical('Download of podcasts fail');
  }
  return normalizeData;
};

export default getPodcasts;
