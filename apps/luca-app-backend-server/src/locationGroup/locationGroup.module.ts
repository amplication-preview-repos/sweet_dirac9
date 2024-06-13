import { Module } from "@nestjs/common";
import { LocationGroupModuleBase } from "./base/locationGroup.module.base";
import { LocationGroupService } from "./locationGroup.service";
import { LocationGroupController } from "./locationGroup.controller";
import { LocationGroupResolver } from "./locationGroup.resolver";

@Module({
  imports: [LocationGroupModuleBase],
  controllers: [LocationGroupController],
  providers: [LocationGroupService, LocationGroupResolver],
  exports: [LocationGroupService],
})
export class LocationGroupModule {}
