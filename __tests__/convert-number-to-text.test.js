import convertNumberToText from '../functions/convert-number-to-text/1.0';
describe('Convert Number To Text Test', () => {
  test('Run Convert Number To Text with expected outcome', async () => {
    const { as } = await convertNumberToText({ input: 1 });
    expect(as).not.toBeNull();
    expect(as).toEqual('1');
  });

  test('Run Convert Number To Text with expected outcome', async () => {
    const { as } = await convertNumberToText({ input: undefined });
    expect(as).not.toBeNull();
    expect(as).toEqual('undefined');
  });
});
