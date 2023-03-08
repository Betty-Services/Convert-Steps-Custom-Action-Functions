const convertJsonToObject = async ({ input }) => {
  try {
    return {
      as: JSON.parse(`${input}`),
    };
  } catch (e) {
    console.log(input);
    throw new Error(e);
  }
};

export default convertJsonToObject;
