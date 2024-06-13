import { Company } from "../company/Company";

export type Location = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
