const convertTextToNumber = async ({ input }) => {
  return {
    as: parseInt(input),
  };
};

export default convertTextToNumber;
