'use strict';
/* eslint-disable camelcase */
var shaHashingHelper = require('./shaHashingHelper');

module.exports = function ({ utils, arc }) {
  const { getExtensionSettings, getSettings, fetch, logger } = utils;
  const { url, businessType } = getExtensionSettings();

  return fetch(url, buildEventBody(getSettings));
};

function buildEventBody(getSettings) {
  const {
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
  } = getSettings();
  const methodValue = 'POST';
  const contentTypeValue = 'application/json';
  const agentValue = 'adobe_launch';

  return {
    method: methodValue,
    headers: {
      'content-type': contentTypeValue
    },
    body: JSON.stringify({
      Event: eventName,
      EventTimestamp: eventTime,
      EventType: eventType,
      PageType: pageType,
      PageLocation: pageLocation,
      PageViewActiveTime: pageViewActiveTime,
      InterestLevel: interestLevel,
      InterestedIn: interestedIn,
      DeviceType: deviceType,
      CustomerID: customerId,
      CookieID: cookieId
    })
  };
}
