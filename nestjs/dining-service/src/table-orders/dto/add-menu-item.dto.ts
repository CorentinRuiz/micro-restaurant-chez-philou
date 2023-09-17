import { IsMongoId, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

export class AddMenuItemDto {
  @IsMongoId()
  menuItemId: string;

  @IsNotEmpty()
  menuItemShortName: string;

  @IsNotEmpty()
  @IsPositive()
  howMany: number;

  @IsOptional()
  comment: string;
}
