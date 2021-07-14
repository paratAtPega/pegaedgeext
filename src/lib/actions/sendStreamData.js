'use strict';
/* eslint-disable camelcase */
var shaHashingHelper = require('./shaHashingHelper');

module.exports = function ({ utils, arc }) {
  const { getExtensionSettings, getSettings, fetch, logger } = utils;
  const url = 'https://pega.com';

  return fetch(url, buildEventBody(getSettings));
};

function buildEventBody(getSettings) {
  const { eventName } = getSettings();
  const methodValue = 'POST';
  const contentTypeValue = 'application/json';
  const agentValue = 'adobe_launch';

  return {
    method: methodValue,
    headers: {
      'content-type': contentTypeValue
    },
    body: JSON.stringify({
      data: [
        {
          event_name: eventName
        }
      ],
      // eslint-disable-next-line camelcase
      partner_agent: agentValue
    })
  };
}
