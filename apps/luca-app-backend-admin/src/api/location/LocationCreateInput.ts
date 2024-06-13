import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type LocationCreateInput = {
  company?: CompanyWhereUniqueInput | null;
};
