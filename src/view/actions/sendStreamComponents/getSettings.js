export default ({
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
  cookieId,
  bodyJsonPairs = []
}) => {
  const settings = {
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
    interestLevel
  };
  bodyJsonPairs = bodyJsonPairs
    .map((q) => ({ key: q.key, value: q.value }))
    .filter((q) => q.key || q.value);

  if (bodyJsonPairs.length > 0) {
    settings.bodyJsonPairs = bodyJsonPairs;
  }
  return settings;
};
