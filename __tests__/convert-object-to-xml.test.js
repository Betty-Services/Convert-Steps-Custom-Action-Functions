import jsonToXml from '../functions/convert-object-to-xml/1.0';
describe('Object to XML', () => {
  test('Convert Object to XML with expected outcome', async () => {
    const feedObj = {
      xml: {
        new: 'json',
        equals: true,
      },
    };

    const { as } = await jsonToXml({ feedObj, rootName: undefined });

    expect(as).toBe(
      '<?xml version="1.0" encoding="utf-8"?><xml><new>json</new><equals>true</equals></xml>'
    );
  });
});
