/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  LocationGroup as PrismaLocationGroup,
  Company as PrismaCompany,
} from "@prisma/client";

export class LocationGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LocationGroupCountArgs, "select">
  ): Promise<number> {
    return this.prisma.locationGroup.count(args);
  }

  async locationGroups<T extends Prisma.LocationGroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationGroupFindManyArgs>
  ): Promise<PrismaLocationGroup[]> {
    return this.prisma.locationGroup.findMany<Prisma.LocationGroupFindManyArgs>(
      args
    );
  }
  async locationGroup<T extends Prisma.LocationGroupFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationGroupFindUniqueArgs>
  ): Promise<PrismaLocationGroup | null> {
    return this.prisma.locationGroup.findUnique(args);
  }
  async createLocationGroup<T extends Prisma.LocationGroupCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationGroupCreateArgs>
  ): Promise<PrismaLocationGroup> {
    return this.prisma.locationGroup.create<T>(args);
  }
  async updateLocationGroup<T extends Prisma.LocationGroupUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationGroupUpdateArgs>
  ): Promise<PrismaLocationGroup> {
    return this.prisma.locationGroup.update<T>(args);
  }
  async deleteLocationGroup<T extends Prisma.LocationGroupDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationGroupDeleteArgs>
  ): Promise<PrismaLocationGroup> {
    return this.prisma.locationGroup.delete(args);
  }

  async getCompany(parentId: string): Promise<PrismaCompany | null> {
    return this.prisma.locationGroup
      .findUnique({
        where: { id: parentId },
      })
      .company();
  }
}
