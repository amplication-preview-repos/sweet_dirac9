import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type LocationGroupWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
};
