import convertTextToUriEncode from '../functions/convert-text-to-uri-encoded/1.0';

describe('uri encode', () => {
  test('encode string', async () => {
    const input = 'maarten.geerse@bettyblocks.com';

    const { as } = await convertTextToUriEncode({ input });
    expect(as).toBe('maarten.geerse%40bettyblocks.com');
  });
});
