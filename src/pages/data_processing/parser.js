import axios from 'axios';
import _ from 'lodash';

// eslint-disable-next-line consistent-return
const getXmlData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const getText = (text, begin, end, save = true) => {
  const startIndex = save === true ? text.indexOf(begin) : text.indexOf(begin) + begin.length;
  const endIndex = text.indexOf(end);
  if (startIndex === -1 || endIndex === -1) {
    return '';
  }
  return text.substring(startIndex, endIndex);
};

const prepareText = (text) => {
  const noNewLines = text.replace(/\n/g, '');
  const noSpacesTags = noNewLines.replace(/>\s+</g, '><');
  const noTub = noSpacesTags.replace(/\t/g, '');
  return noTub;
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

const getDescriptionEpisodes = (text) => {
  const object = {};

  const getPodcastDescription = getText(text, '<description>', '</description>', false);
  const clearDescOne = getText(getPodcastDescription, '<![CDATA[', ']]>', false);
  const clearDescTwo = cleanTags(clearDescOne);
  object.description = clearDescTwo;

  const getItems = getText(text, '<item>', '</channel>');
  const cleanText = prepareText(getItems);
  const divideText = cleanText.split('</item>');

  divideText
    .filter((item) => item.length > 10)
    .forEach((item, index) => { // here was 'map'
      const acc = {};
      acc.id = _.uniqueId('episod_');

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

      const getAudioUrl = getText(item, '<enclosure url=', 'length=');
      const url = getAttributeValue(getAudioUrl, 'url');
      acc.audioUrl = url;

      object[index] = acc;
    });

  return object;
};

export {
  getXmlData, getText, prepareText, cleanTags, getAttributeValue, getDescriptionEpisodes,
};
