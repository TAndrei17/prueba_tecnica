import { getXmlData, getDescriptionEpisodes } from '../pages/data_processing/parser';

const getPodcastEpisodes = async (url, podcastId) => {
  try {
    const xml = await getXmlData(url);
    return getDescriptionEpisodes(xml, podcastId);
  } catch (error) {
    // eslint-disable-next-line no-undef
    rollbar.critical('Download of podcasts fail');
    // eslint-disable-next-line no-console
    console.error('Download of episodes is fail', error);
    return {};
  }
};

export default getPodcastEpisodes;
