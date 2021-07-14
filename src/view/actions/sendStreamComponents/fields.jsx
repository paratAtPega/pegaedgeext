import React from 'react';

import {
  Content,
  Divider,
  Flex,
  Heading,
  Text,
  TextField
} from '@adobe/react-spectrum';
import WrappedTextField from '../../components/wrappedTextField';
//import WrappedCheckboxComponent from '../../components/wrappedCheckboxComponent';
import Parameters from './getParameters';

export default () => {
  const { Summaries } = Parameters();

  const pegaEventSetupText = `Use the data mapping to configure a Pega Customer Decision
   Hub clickstream event using your data from Adobe Edge. 
   These events will be sent to Pega CDH ClickStream API.`;
  const eventsParametersText = 'Send actions that occur as a Standard Event.';

  return (
    <Flex direction="row" gap="size-200">
      <Flex direction="column" gap="size-65">
        <Heading> Pega CDH Stream Event Setup </Heading>
        <Divider size="S" />
        <Content>
          <Text>{pegaEventSetupText}</Text>
        </Content>

        <Heading marginTop="1em">Event Parameters</Heading>
        <Divider size="S" />
        <Content>
          <Content marginBottom="1em">
            <Text>{eventsParametersText}</Text>
          </Content>

          {Summaries.map(([name, label]) => {
            return (
              <WrappedTextField
                name={name}
                component={TextField}
                width="size-4600"
                label={label}
                supportDataElement
              />
            );
          })}
        </Content>
      </Flex>
    </Flex>
  );
};
