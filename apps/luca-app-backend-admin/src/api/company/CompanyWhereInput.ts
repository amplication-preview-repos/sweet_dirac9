import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationGroupListRelationFilter } from "../locationGroup/LocationGroupListRelationFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompanyWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  locationGroups?: LocationGroupListRelationFilter;
  locations?: LocationListRelationFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
  zipCode?: StringNullableFilter;
};
