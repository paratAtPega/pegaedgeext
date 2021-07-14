export default (settings) => {
  return {
    eventName: settings?.eventName || 'PageView',
    eventTime: settings?.eventTime || '',
    eventType: settings?.eventType || '',
    pageType: settings?.pageType || '',
    pageLocation: settings?.pageLocation || '',
    pageViewActiveTime: settings?.pageViewActiveTime || '',
    interestLevel: settings?.interestLevel || '',
    interestedIn: settings?.interestedIn || '',
    deviceType: settings?.deviceType || '',
    customerId: settings?.customerId || '',
    cookieId: settings?.cookieId || ''
  };
};
