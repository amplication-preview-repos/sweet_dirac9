import { Company } from "../company/Company";

export type LocationGroup = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
