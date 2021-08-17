import React from 'react';
import {
  Button,
  Content,
  Divider,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  Link
} from '@adobe/react-spectrum';
import Add from '@spectrum-icons/workflow/Add';
import { useFieldArray } from 'react-hook-form';
import WrappedTextField from '../../components/wrappedTextField';
import Parameters from './getParameters';
import row from './row';
import getEmptyBodyJson from './getEmptyValue';

export default () => {
  const { Summaries } = Parameters();

  // eslint-disable-next-line max-len
  const pegaEventSetupText = `Configure the mapping of captured digital behavior events, on your digital property, to the expected behavioral data entities needed by Pega Customer Decision Hub.`;
  const eventsParametersText =
    // eslint-disable-next-line max-len
    'Associate the Pega Customer Decision Hub clickstream event data entities to your collected data entities. For more details, see the ';
  const customerInformationURI =
    'https://community.pega.com/knowledgebase/articles/customer-profile-designer-accelerator-component-user-guide/86/customer-profile-designer-accelerator-component';

  const { fields, append, remove } = useFieldArray({
    name: 'bodyJsonPairs'
  });

  return (
    <Flex direction="row" gap="size-200">
      <Flex direction="column" gap="size-65">
        <Heading> Pega Customer Decision Hub Data Mapping Setup </Heading>
        <Divider size="S" />
        <Content>
          <Text>{pegaEventSetupText}</Text>
        </Content>

        <Heading marginTop="1em">Data Mappings</Heading>
        <Divider size="S" />
        <Content>
          <Content marginBottom="1em">
            <Text>{eventsParametersText}</Text>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link>
              <a href={customerInformationURI} target="_blank" rel="noreferrer">
                documentation
              </a>
            </Link>
            <Text>.</Text>
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

          <>
            <Heading level="3">Additional Parameters</Heading>
            <Divider size="M" />
            <Flex direction="column" gap="size-100">
              <Flex direction="row" gap="size-200">
                <View flex>
                  <Heading
                    level="5"
                    marginStart="size-100"
                    marginTop="size-100"
                    marginBottom="size-50"
                  >
                    KEY
                  </Heading>
                </View>
                <View flex>
                  <Heading
                    level="5"
                    marginStart="size-100"
                    marginTop="size-100"
                    marginBottom="size-50"
                  >
                    VALUE
                  </Heading>
                </View>
                <View width="size-450" />
              </Flex>
              <Divider size="S" />
              {fields.map(row.bind(null, remove))}
            </Flex>

            <Button
              marginTop="size-150"
              variant="primary"
              onPress={() => append(getEmptyBodyJson())}
            >
              <Add />
              <Text>Add Another</Text>
            </Button>
          </>
        </Content>
      </Flex>
    </Flex>
  );
};
