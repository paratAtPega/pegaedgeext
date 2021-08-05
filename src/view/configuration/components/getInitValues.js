export default (initInfo) => {
  const { settings } = initInfo;
  const { url = '' } = settings || {};
  return {
    url
  };
};
