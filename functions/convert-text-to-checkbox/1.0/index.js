const convertTextToCheckbox = async ({ input }) => {
  return {
    as: input === 'true',
  };
};

export default convertTextToCheckbox;
