import axios from 'axios';
import _ from 'lodash';

import parseXml from '../../../xmlParser.js';

// eslint-disable-next-line consistent-return
const getXmlData = async (url) => {
  const { data } = await axios.get(url);
  const result = await parseXml(url);
  const dataMy = JSON.parse(result);
  console.log(dataMy.rss);
  console.log(JSON.stringify(dataMy, null, '  '));
  return data;
};

const prepareText = (text) => {
  const noNewLines = text.replace(/\n/g, '');
  const noSpacesTags = noNewLines.replace(/>\s+</g, '><');
  const noTub = noSpacesTags.replace(/\t/g, '');
  return noTub;
};

const getText = (text, begin, end, save = true) => {
  const startIndex = save === true ? text.indexOf(begin) : text.indexOf(begin) + begin.length;
  const endIndex = text.indexOf(end);
  if (startIndex === -1 || endIndex === -1) {
    return '';
  }
  return text.substring(startIndex, endIndex);
};

const cleanTags = (text) => text.replace(/<[^>]+>/g, ' ');

const getAttributeValue = (text, attr) => {
  const rule = new RegExp(`${attr}=['"]([^'"]+)['"]`);
  const match = text.match(rule);
  return match ? match[1] : null;
};

const getDate = (text) => {
  const date = new Date(text);
  const formatedDate = date.toLocaleDateString();
  return formatedDate;
};

const getDescriptionEpisodes = (text, podcastId) => {
  const object = {
    ids: [],
  };

  const prepareForParsing = prepareText(text);
  // console.log(prepareForParsing);

  const getPodcastDescription = getText(prepareForParsing, '<description>', '</description>', false);
  const clearDescOne = getText(getPodcastDescription, '<![CDATA[', ']]>', false);
  const clearDescTwo = cleanTags(clearDescOne);
  object.description = clearDescTwo;

  const getItems = getText(prepareForParsing, '<item><title>', '</item></channel></rss>');
  const cleanText = prepareText(getItems);
  const divideText = cleanText.split('</item>');

  divideText
    .filter((item) => item.length > 10)
    .forEach((item) => { // here was 'map'
      const acc = {};
      acc.id = _.uniqueId(`${podcastId}_`);
      object.ids.push(acc.id);
      acc.podcast_id = podcastId;

      const getTitle = getText(item, '<title>', '</title>');
      const title = getText(getTitle, '<![CDATA[', ']]>', false);
      acc.title = title.trim();

      const getReleaseDay = getText(item, '<pubDate>', '</pubDate>');
      const getTextRelease = cleanTags(getReleaseDay);
      const date = getDate(getTextRelease);
      acc.release = date;

      const getDuration = getText(item, '<itunes:duration>', '</itunes:duration>');
      const getTextDuration = cleanTags(getDuration);
      acc.duration = getTextDuration.trim();

      const getAudioUrl = getText(item, 'url="', '"');
      const url = getAttributeValue(getAudioUrl, 'url');
      acc.audioUrl = url;

      const { id } = acc;
      object[id] = acc;
    });
  // console.log(object);
  return object;
};

export {
  getXmlData, getText, prepareText, cleanTags, getAttributeValue, getDescriptionEpisodes,
};
