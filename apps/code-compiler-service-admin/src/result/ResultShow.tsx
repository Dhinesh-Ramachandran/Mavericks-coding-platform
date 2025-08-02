import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SUBMISSION_TITLE_FIELD } from "../submission/SubmissionTitle";

export const ResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="error" source="errorField" />
        <TextField label="executionTime" source="executionTime" />
        <TextField label="ID" source="id" />
        <TextField label="output" source="output" />
        <ReferenceField
          label="Submission"
          source="submission.id"
          reference="Submission"
        >
          <TextField source={SUBMISSION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
