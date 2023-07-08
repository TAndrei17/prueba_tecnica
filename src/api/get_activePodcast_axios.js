/* eslint-disable no-console */
import axios from 'axios';
import { parseString } from 'xml2js';
import { createUrlPodcast } from '../url/index.js';

const getPodcastDescription = async (id) => {
  const normalizaData = {
    downloadCollections: {},
  };
  const { downloadCollection } = normalizaData;

  try {
    const getUrl = createUrlPodcast(id);
    const { data } = await axios.get(getUrl);
    const { result } = data.results[0];

    const autorId = result.artistId;
    const autor = result.artistName;
    const image = result.artworkUrl30;
    const xmlData = result.feedUrl;
    const activePodcastId = `id${id}`;

    downloadCollection[activePodcastId] = {
      autorId, autor, image, xmlData,
    };
  } catch {
    // eslint-disable-next-line no-undef
    rollbar.critical('Download of podcast fail');
  }
  return normalizaData;
};

const getXmlData = async (url) => {
  try {
    const { xmlData } = await axios.get(url);
    parseString(xmlData, (error, result) => {
      if (error) {
        console.error('Error parsing XML:', error);
        return error;
      }
      const podcastData = {
        episodeCount: result.rss.channel[0].item.length,
        podcastTitle: result.rss.channel[0].title[0],
        description: result.rss.channel[0].description[0],
        episodes: result.rss.channel[0].item.map((item) => ({
          title: item.title[0],
          releaseDate: item.pubDate[0],
          duration: item['itunes:duration'][0], // or just 'duration'?
          audioUrl: item.enclosure[0].$.url,
        })),
      };
      return podcastData;
    });
  } catch (error) {
    // eslint-disable-next-line no-undef
    rollbar.critical('Download of podcast fail');
  }
};

export { getPodcastDescription, getXmlData };
