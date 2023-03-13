import { create } from 'xmlbuilder';
const objectToXml = async ({ feedObj }) => {
  return {
    as: create(feedObj, { version: '1.0', encoding: 'utf-8' }).end({
      pretty: false,
    }),
  };
};

export default objectToXml;
