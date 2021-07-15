import React from 'react';
import { Flex, Item, Picker } from '@adobe/react-spectrum';
import { Controller, useFormContext } from 'react-hook-form';
import WrappedTextField from '../../components/wrappedTextField';

export default () => {
  const { control } = useFormContext();

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
      <Controller
        control={control}
        name="businessType"
        defaultValue=""
        render={({ onChange, onBlur, value }) => (
          <Picker
            label="Business Type"
            minWidth="size-2000"
            isRequired
            necessityIndicator="label"
            selectedKey={value}
            items={[
              {
                id: 'Financial',
                name: 'Financial Service'
              },
              {
                id: 'Health',
                name: 'Healthcare'
              },
              {
                id: 'Insurance',
                name: 'Insurance'
              }
            ]}
            onSelectionChange={onChange}
            onBlur={onBlur}
          >
            {(item) => <Item>{item.name}</Item>}
          </Picker>
        )}
      />
    </Flex>
  );
};
