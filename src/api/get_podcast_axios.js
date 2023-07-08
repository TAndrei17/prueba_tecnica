import axios from 'axios';

const { XMLParser } = require('fast-xml-parser');
// import * as FileSystem from 'expo-file-system';

const url = 'https://itunes.apple.com/lookup?id=788236947';

const getOnePodcast = async () => {
  const { data } = await axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  console.log(data);
  const { feedUrl } = data.results[0];
  const getXmlData = await axios.get(feedUrl, {
    maxContentLength: 10,
  });
  console.log(getXmlData);

  const options = {
    alwaysCreateTextNode: true,
  };
  const parser = new XMLParser(options);
  const objectJS = parser.parse(getXmlData);

  console.log(objectJS);

  return objectJS;
};

export default getOnePodcast;

/* const getPodcast = async () => {
  const result = await FileSystem.downloadAsync(
    url,
    // eslint-disable-next-line prefer-template
    FileSystem.documentDirectory + 'id1096830182',
  );
  return result;
};

export default getPodcast; */
