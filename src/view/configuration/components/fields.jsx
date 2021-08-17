import React from 'react';
import { Content, Flex, Link, Text } from '@adobe/react-spectrum';
import WrappedTextFieldV2 from '../../components/wrappedTextField';

export default () => {
  const endpointDocumentationextURI =
    'https://community.pega.com/knowledgebase/articles/customer-profile-designer-accelerator-component-user-guide/86/installing-and-configuring-customer-profile-designer-component';
  const endpointDocumentationext =
    'For more help in defining and understanding this endpoint, please refer to ';
  return (
    <Flex direction="column" gap="size-65">
      <WrappedTextFieldV2
        minWidth="size-6000"
        width="70%"
        label="Customer Decision Hub Clickstream Service Endpoint URL."
        name="url"
        isRequired
        necessityIndicator="label"
        placeholder="Enter URL (eg. https://example.com/prweb/api/Clickstream/1.1)"
      />

      <Content marginBottom="1em">
        <Text>
          <strong>Note: </strong>
        </Text>
        <Text>{endpointDocumentationext}</Text>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>
          <a
            href={endpointDocumentationextURI}
            target="_blank"
            rel="noreferrer"
          >
            documentation
          </a>
        </Link>
        <Text>.</Text>
      </Content>
    </Flex>
  );
};
