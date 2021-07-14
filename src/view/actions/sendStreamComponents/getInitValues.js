export default (initInfo) => {
  const { settings } = initInfo;
  const {
    eventName = '',
    eventTime = '',
    eventType = '',
    pageType = '',
    pageLocation = '',
    pageViewActiveTime = '',
    interestLevel = '',
    interestedIn = '',
    deviceType = '',
    customerId = '',
    cookieId = ''
  } = settings || {};
  return {
    eventName,
    eventTime,
    eventType,
    pageType,
    pageLocation,
    pageViewActiveTime,
    interestLevel,
    interestedIn,
    deviceType,
    customerId,
    cookieId
  };
};
