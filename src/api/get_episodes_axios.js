/* eslint-disable no-console */
import _ from 'lodash';
import parseXml from '../../xmlParser.js';

const createDate = (dateString) => {
  const myDate = new Date(dateString);
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return myDate.toLocaleString('en-En', options);
};

const cleanTags = (text) => text.replace(/<[^>]+>/g, ' ');

// prepare for state ('episodes');
// { episod_id: { id, title, description, release, duration, audioUrl, podcast_id }};

const getDescriptionEpisodes = (jsonText, podcastId) => {
  const object = {
    ids: [],
  };

  object.description = jsonText.rss.channel.description;
  jsonText.rss.channel.item
    .forEach((episod) => {
      const acc = {};
      acc.id = _.uniqueId(`${podcastId}_`);
      object.ids.push(acc.id);
      acc.podcast_id = podcastId;

      acc.pubDate = createDate(episod.pubdate);
      acc.title = episod.title;
      acc.description = cleanTags(episod.description).trim();
      acc.duration = episod['itunes:duration'];
      acc.audioUrl = episod.enclosure.$.url; // здесь может быть проблема

      const { id } = acc;
      object[id] = acc;
    });
  return object;
};

const getPodcastEpisodes = async (url, podcastId) => {
  try {
    const xml = await parseXml(url);
    return getDescriptionEpisodes(xml, podcastId);
  } catch (error) {
    console.error('Download of episodes is fail', error);
    return {};
  }
};

export default getPodcastEpisodes;
