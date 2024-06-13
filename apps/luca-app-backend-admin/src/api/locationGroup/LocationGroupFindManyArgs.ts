import { LocationGroupWhereInput } from "./LocationGroupWhereInput";
import { LocationGroupOrderByInput } from "./LocationGroupOrderByInput";

export type LocationGroupFindManyArgs = {
  where?: LocationGroupWhereInput;
  orderBy?: Array<LocationGroupOrderByInput>;
  skip?: number;
  take?: number;
};
