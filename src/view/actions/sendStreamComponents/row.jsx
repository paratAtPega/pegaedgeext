import React from 'react';

import { ActionButton, Flex, View } from '@adobe/react-spectrum';
import Delete from '@spectrum-icons/workflow/Delete';
import WrappedField from '../../components/wrappedTextField';

export default (remove, variable, index, variables) => {
  return (
    <Flex direction="row" gap="size-200" key={`body${variable.id}`}>
      <View flex>
        <WrappedField
          name={`bodyJsonPairs[${index}].key`}
          defaultValue={variable.key}
          aria-label={`Body JSON Key ${index}`}
          width="100%"
          supportDataElement
        />
      </View>
      <View flex>
        <WrappedField
          name={`bodyJsonPairs[${index}].value`}
          defaultValue={variable.value}
          aria-label={`Body JSON Value ${index}`}
          width="100%"
          supportDataElement
        />
      </View>
      <View width="size-450">
        {variables.length > 1 && (
          <ActionButton
            aria-label={`Delete Body JSON ${index}`}
            isQuiet
            onPress={() => {
              remove(index);
            }}
          >
            <Delete />
          </ActionButton>
        )}
      </View>
    </Flex>
  );
};
