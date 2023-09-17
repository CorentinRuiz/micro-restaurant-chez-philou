import { IsNotEmpty, IsPositive, IsOptional } from 'class-validator';

export class ItemToBeCookedDto {
  @IsNotEmpty()
  menuItemShortName: string;

  @IsNotEmpty()
  @IsPositive()
  howMany: number;

  @IsOptional()
  comment: string;
}
