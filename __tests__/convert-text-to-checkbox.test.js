import convertTextToCheckbox from '../functions/convert-text-to-checkbox/1.0';

describe('Convert Text to Checkbox Test', () => {
  test('Run Convert Text to Checkbox with expected outcome', async () => {
    const { as } = await convertTextToCheckbox({ input: 'true' });
    expect(as).not.toBeNull();
    expect(as).toEqual(true);
  });

  test('Run Convert Text to Checkbox with expected outcome', async () => {
    const { as } = await convertTextToCheckbox({ input: 'false' });
    expect(as).not.toBeNull();
    expect(as).toEqual(false);
  });
});
