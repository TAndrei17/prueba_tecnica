import axios from 'axios';
import { parseString } from 'react-native-xml2js';

const parseXml = async (url) => {
  try {
    const response = await axios.get(url);
    const xmlData = response.data;
    let jsonData = null;
    parseString(xmlData, (error, result) => {
      if (error) {
        // eslint-disable-next-line functional/no-throw-statements
        throw error;
      }
      jsonData = result;
      console.log(JSON.stringify(jsonData, null, '  '));
      return jsonData;
    });
  } catch (error) {
    const message = 'Парсинг завершился ошибкой';
    console.error(message);
  }
};

export default parseXml;

/* import parser from 'fast-xml-parser';

const parseXml = async (url) => {
  try {
    const response = await axios.get(url);
    const xmlString = response.data;
    const options = {
      attributeNamePrefix: '@_',
      attrNodeName: 'attr',
      textNodeName: '#text',
      ignoreAttributes: false,
      ignoreNameSpace: false,
      allowBooleanAttributes: true,
      parseNodeValue: true,
      parseAttributeValue: true,
      trimValues: true,
      cdataTagname: '__cdata',
      cdataPositionChar: '\\c',
      parseTrueNumberOnly: false,
      arrayNode: false,
      attrValueProcessor: (val) => parser.parseNumber(val),
      tagValueProcessor: (val) => parser.parseNumber(val),
    };
    const jsonObj = parser.parse(xmlString, options);
    console.log(jsonObj);
  } catch (error) {
    const message = 'Парсинг завершился ошибкой';
    console.error(message);
  }
};

export default parseXml;

/* const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

const parser = new XMLParser();
let jObj = parser.parse(XMLdata); */
