const convertJsonToObject = async ({ input }) => {
  try {
    return {
      as: JSON.parse(`${input}`),
    };
  } catch (e) {
    throw new Error(e);
  }
};

export default convertJsonToObject;
