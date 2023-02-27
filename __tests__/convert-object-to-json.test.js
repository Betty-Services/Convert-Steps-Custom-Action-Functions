import convertObjectToJson from '../functions/convert-object-to-json/1.0';

describe('Convert Object to JSON Test', () => {
  test('Run Convert Object to JSON with expected outcome', async () => {
    const { as } = await convertObjectToJson({ input: { foo: 'bar' } });
    expect(as).not.toBeNull();
    expect(as).toEqual('{"foo":"bar"}');
  });

  test('Run Convert Object to JSON with expected outcome', async () => {
    const { as } = await convertObjectToJson({ input: undefined });
    expect(as).not.toBeNull();
    expect(as).toEqual(undefined);
  });
});
