import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocationGroupServiceBase } from "./base/locationGroup.service.base";

@Injectable()
export class LocationGroupService extends LocationGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
