import React from 'react';

import ExtensionView from '../components/extensionView';

import SendEventFields from './sendStreamComponents/fields';
import getSendEventInitValues from './sendStreamComponents/getInitValues';
import getSendEventSettings from './sendStreamComponents/getSettings';
import validateSendEventFields from './sendStreamComponents/validate';

export default () => (
  <ExtensionView
    getInitialValues={(initInfo) => ({
      ...getSendEventInitValues(initInfo)
    })}
    getSettings={({ values }) => ({
      ...getSendEventSettings(values)
    })}
    validate={(values) => ({
      ...validateSendEventFields(values)
    })}
    render={() => (
      <>
        <SendEventFields />
      </>
    )}
  />
);
