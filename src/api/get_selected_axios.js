/* eslint-disable no-console */
import axios from 'axios';
import { createUrlPodcast } from '../url/index.js';

const getPodcastData = async (id) => {
  const normalizeData = {
    podcastDescription: {},
  };

  const time = new Date().getTime();

  try {
    const getUrl = createUrlPodcast(id);

    const { data } = await axios.get(getUrl);

    const title = data.results[0].collectionName;
    const author = data.results[0].artistName;
    const authorId = data.results[0].artistId;
    const image = data.results[0].artworkUrl30;
    const xmlLink = data.results[0].feedUrl;
    const tracks = data.results[0].trackCount;

    normalizeData.podcastDescription = {
      id, title, author, authorId, image, xmlLink, tracks, time,
    };
  } catch {
    // eslint-disable-next-line no-undef
    rollbar.critical('Download of podcast fail');
  }
  return normalizeData;
};

export default getPodcastData;
