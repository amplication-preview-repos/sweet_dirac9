import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CompanyTitle } from "../company/CompanyTitle";

export const LocationGroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
