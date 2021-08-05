import getEmptyBodyJson from './getEmptyValue';

export default (initInfo) => {
  const { settings } = initInfo;
  const {
    customerId = '',
    cookieId = '',
    eventName = '',
    eventTime = '',
    eventType = '',
    pageType = '',
    pageLocation = '',
    pageViewActiveTime = '',
    deviceType = '',
    interestedIn = '',
    interestLevel = ''
  } = settings || {};

  const bodyJsonPairs = settings?.bodyJsonPairs || [];

  if (bodyJsonPairs.length === 0) {
    bodyJsonPairs.push(getEmptyBodyJson());
  }
  return {
    customerId,
    cookieId,
    eventName,
    eventTime,
    eventType,
    pageType,
    pageLocation,
    pageViewActiveTime,
    deviceType,
    interestedIn,
    interestLevel,
    bodyJsonPairs
  };
};
