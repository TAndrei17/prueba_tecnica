import axios from 'axios';
import linkPodcasts from '../url';

const getPodcasts = async () => {
  const normalizeData = {
    allPodcasts: {},
  };

  const { allPodcasts } = normalizeData;

  try {
    const { data } = await axios.get(linkPodcasts);
    // eslint-disable-next-line no-console
    // console.log(data);
    const { entry } = data.feed;
    // record load time
    normalizeData.loadTime = new Date().getTime();

    // create object for save to app's state
    // id12345: { id, author, podcast }
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
