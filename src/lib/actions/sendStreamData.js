'use strict';
/* eslint-disable camelcase */

module.exports = function ({ utils, arc }) {
  const { getExtensionSettings, getSettings, fetch, logger } = utils;
  const { url } = getExtensionSettings();

  return fetch(url, buildEventBody(getSettings));
};

function buildEventBody(getSettings) {
  const settings = getSettings();
  const {
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
  } = settings;
  const methodValue = 'POST';
  const contentTypeValue = 'application/json';
  const agentValue = 'adobe_launch';

  const { bodyJsonPairs } = settings;

  const jsonPayload = {
    CustomerID: customerId,
    CookieID: cookieId,
    Event: eventName,
    EventTimestamp: eventTime,
    EventType: eventType,
    PageType: pageType,
    PageLocation: pageLocation,
    PageViewActiveTime: pageViewActiveTime,
    DeviceType: deviceType,
    InterestedIn: interestedIn,
    InterestLevel: interestLevel
  };

  let additionalPayload = {};

  if (bodyJsonPairs && bodyJsonPairs.length > 0) {
    additionalPayload = bodyJsonPairs.reduce((accumulator, o) => {
      accumulator[o.key] = o.value;
      return accumulator;
    }, {});
  }
  const jsonFinal = Object.assign({}, jsonPayload, additionalPayload);

  return {
    method: methodValue,
    headers: {
      'content-type': contentTypeValue
    },
    body: JSON.stringify(jsonFinal)
  };
}
