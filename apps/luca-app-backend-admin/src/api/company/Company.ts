import { LocationGroup } from "../locationGroup/LocationGroup";
import { Location } from "../location/Location";
import { User } from "../user/User";

export type Company = {
  address: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  locationGroups?: Array<LocationGroup>;
  locations?: Array<Location>;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
  zipCode: string | null;
};
