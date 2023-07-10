import axios from 'axios';
import parser from 'fast-xml-parser';

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
    const message = 'ПАРСИНГ ЗАВЕШИЛСЯ ОШИБКОЙ';
    console.error(message);
  }
};

export default parseXml;
