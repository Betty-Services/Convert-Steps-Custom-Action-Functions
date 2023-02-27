const convertJsonToObject = async ({ input }) => {
  return {
    as: JSON.parse(input),
  };
};

export default convertJsonToObject;
