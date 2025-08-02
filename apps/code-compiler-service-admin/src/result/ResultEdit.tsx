import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SubmissionTitle } from "../submission/SubmissionTitle";

export const ResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
