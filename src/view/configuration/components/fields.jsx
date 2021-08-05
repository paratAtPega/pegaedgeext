import React from 'react';
import { Flex } from '@adobe/react-spectrum';
import WrappedTextField from '../../components/wrappedTextField';

export default () => {
  return (
    <Flex direction="column" gap="size-65">
      <WrappedTextField
        minWidth="size-6000"
        width="70%"
        name="url"
        label="Clickstream Service Endpoint URL"
        isRequired
        necessityIndicator="label"
        placeholder="Enter URL (eg. https://example.com/prweb/api/Clickstream/1.1)"
      />
    </Flex>
  );
};
