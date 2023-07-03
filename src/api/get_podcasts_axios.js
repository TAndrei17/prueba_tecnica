import axios from 'axios';
import { podcasts } from '../url';

const getPodcasts = async () => {
  const { data } = await axios.get(podcasts);
  const { entry } = data.feed;
  const loadTime = new Date().getTime();
  
  const normalizeData = {
    allPodcasts: {},
    loadTime,
  };

  entry.forEach((podcast) => {
    const id = podcast.id.attributes['im:id'];
    const author = podcast['im:artist'].label;
    const podcast = podcast['im:name'].label;
    const idName = `id${id}`;
    allPodcasts[idName] = { id, author, podcast };
  });
  
  return normalizeData;
};

export default getPodcasts;