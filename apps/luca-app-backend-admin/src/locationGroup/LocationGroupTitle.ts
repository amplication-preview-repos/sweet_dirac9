import { LocationGroup as TLocationGroup } from "../api/locationGroup/LocationGroup";

export const LOCATIONGROUP_TITLE_FIELD = "id";

export const LocationGroupTitle = (record: TLocationGroup): string => {
  return record.id?.toString() || String(record.id);
};
