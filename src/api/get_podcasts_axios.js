import axios from 'axios';
import { linkPodcasts } from '../url';

const getPodcasts = async () => {
  const normalizeData = {
    allPodcasts: {},
  };

  const { allPodcasts } = normalizeData;

  try {
    const { data } = await axios.get(linkPodcasts);
    const { entry } = data.feed;

    // prepare object for state 'podcasts'
    // id12345: { id, author, podcast }
    entry.forEach((item) => {
      const id = item.id.attributes['im:id'];
      const author = item['im:artist'].label;
      const podcast = item['im:name'].label;
      allPodcasts[id] = { id, author, podcast };
    });
  } catch (error) {
    const message = 'Download of podcasts fail';
    // eslint-disable-next-line no-console
    console.error(message);
  }
  return normalizeData;
};

export default getPodcasts;
