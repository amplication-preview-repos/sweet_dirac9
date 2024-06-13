import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};
