/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { LocationGroupCreateNestedManyWithoutCompaniesInput } from "./LocationGroupCreateNestedManyWithoutCompaniesInput";
import { Type } from "class-transformer";
import { LocationCreateNestedManyWithoutCompaniesInput } from "./LocationCreateNestedManyWithoutCompaniesInput";
import { UserCreateNestedManyWithoutCompaniesInput } from "./UserCreateNestedManyWithoutCompaniesInput";

@InputType()
class CompanyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string | null;

  @ApiProperty({
    required: false,
    type: () => LocationGroupCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => LocationGroupCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => LocationGroupCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  locationGroups?: LocationGroupCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: () => LocationCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => LocationCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => LocationCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  locations?: LocationCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  zipCode?: string | null;
}

export { CompanyCreateInput as CompanyCreateInput };
