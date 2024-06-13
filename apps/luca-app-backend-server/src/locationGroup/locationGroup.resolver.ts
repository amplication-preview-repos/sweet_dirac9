import * as graphql from "@nestjs/graphql";
import { LocationGroupResolverBase } from "./base/locationGroup.resolver.base";
import { LocationGroup } from "./base/LocationGroup";
import { LocationGroupService } from "./locationGroup.service";

@graphql.Resolver(() => LocationGroup)
export class LocationGroupResolver extends LocationGroupResolverBase {
  constructor(protected readonly service: LocationGroupService) {
    super(service);
  }
}
