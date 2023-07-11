/* eslint-disable consistent-return */
import axios from 'axios';
import { parseString } from 'react-native-xml2js';

const parseXml = async (url) => {
  try {
    const { data } = await axios.get(url);

    const options = {
      trim: true,
      normalizeTags: true,
      normalize: true,
      explicitArray: false,
    };

    const jsonData = await new Promise((resolve, reject) => {
      parseString(data, options, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
    return jsonData;
  } catch (error) {
    const message = 'Parsing XML data is fail';
    // eslint-disable-next-line no-console
    console.error(message);
  }
};

export default parseXml;
