import convertTextToNumber from '../functions/convert-text-to-number/1.0';

describe('Convert Text To Number Test', () => {
  test('Run Text To Number with expected outcome', async () => {
    const { as } = await convertTextToNumber({ input: '1' });
    expect(as).not.toBeNull();
    expect(as).toEqual(1);
  });

  test('Run Text To Number with expected outcome', async () => {
    const { as } = await convertTextToNumber({ input: 'foo' });
    expect(as).not.toBeNull();
    expect(as).toEqual(NaN);
  });
});
