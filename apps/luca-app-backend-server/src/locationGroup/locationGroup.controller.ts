import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LocationGroupService } from "./locationGroup.service";
import { LocationGroupControllerBase } from "./base/locationGroup.controller.base";

@swagger.ApiTags("locationGroups")
@common.Controller("locationGroups")
export class LocationGroupController extends LocationGroupControllerBase {
  constructor(protected readonly service: LocationGroupService) {
    super(service);
  }
}
