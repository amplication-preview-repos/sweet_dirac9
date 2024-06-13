import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
};
