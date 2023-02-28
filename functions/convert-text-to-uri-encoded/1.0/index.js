const convertTextToUriEncode = async ({ input }) => {
  return {
    as: encodeURIComponent(input),
  };
};

export default convertTextToUriEncode;
