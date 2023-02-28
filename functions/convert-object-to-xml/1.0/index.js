import { create } from 'xmlbuilder2';
const objectToXml = async ({ feedObj }) => {
  return {
    as: create({ version: '1.0', encoding: 'utf-8' }, feedObj).end({
      pretty: false,
    }),
  };
};

export default objectToXml;
