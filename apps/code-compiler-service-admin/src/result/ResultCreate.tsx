import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SubmissionTitle } from "../submission/SubmissionTitle";

export const ResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="error" multiline source="errorField" />
        <NumberInput label="executionTime" source="executionTime" />
        <TextInput label="output" multiline source="output" />
        <ReferenceInput
          source="submission.id"
          reference="Submission"
          label="Submission"
        >
          <SelectInput optionText={SubmissionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
