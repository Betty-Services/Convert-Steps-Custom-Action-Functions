const convertObjectToJson = async ({ input }) => {
  return {
    as: JSON.stringify(input),
  };
};

export default convertObjectToJson;
