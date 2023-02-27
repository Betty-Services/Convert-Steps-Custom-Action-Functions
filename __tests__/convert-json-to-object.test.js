import convertJsonToObject from '../functions/convert-json-to-object/1.0';

describe('Convert JSON to Object Test', () => {
  const exampleInput = '{"foo":"bar"}';

  test('Run Convert JSON to Object with expected outcome', async () => {
    const { as } = await convertJsonToObject({ input: exampleInput });
    expect(as).not.toBeNull();
    expect(as).toMatchObject({ foo: 'bar' });
  });

  test('Run Convert JSON to Object to failure', async () => {
    await expect(convertJsonToObject({ input: undefined })).rejects.toThrow();
  });
});
