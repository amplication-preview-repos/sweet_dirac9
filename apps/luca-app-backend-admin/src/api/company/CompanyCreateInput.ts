import { LocationGroupCreateNestedManyWithoutCompaniesInput } from "./LocationGroupCreateNestedManyWithoutCompaniesInput";
import { LocationCreateNestedManyWithoutCompaniesInput } from "./LocationCreateNestedManyWithoutCompaniesInput";
import { UserCreateNestedManyWithoutCompaniesInput } from "./UserCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  locationGroups?: LocationGroupCreateNestedManyWithoutCompaniesInput;
  locations?: LocationCreateNestedManyWithoutCompaniesInput;
  name?: string | null;
  users?: UserCreateNestedManyWithoutCompaniesInput;
  zipCode?: string | null;
};
