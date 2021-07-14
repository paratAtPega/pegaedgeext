export default (initInfo) => {
  const { settings } = initInfo;
  const { url = '', businessType = '' } = settings || {};
  return {
    url,
    businessType
  };
};
