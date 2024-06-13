import { LocationGroupUpdateManyWithoutCompaniesInput } from "./LocationGroupUpdateManyWithoutCompaniesInput";
import { LocationUpdateManyWithoutCompaniesInput } from "./LocationUpdateManyWithoutCompaniesInput";
import { UserUpdateManyWithoutCompaniesInput } from "./UserUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  locationGroups?: LocationGroupUpdateManyWithoutCompaniesInput;
  locations?: LocationUpdateManyWithoutCompaniesInput;
  name?: string | null;
  users?: UserUpdateManyWithoutCompaniesInput;
  zipCode?: string | null;
};
