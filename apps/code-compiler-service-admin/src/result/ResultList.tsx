import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SUBMISSION_TITLE_FIELD } from "../submission/SubmissionTitle";

export const ResultList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Results"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
