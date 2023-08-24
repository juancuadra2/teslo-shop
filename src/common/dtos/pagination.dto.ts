import { IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit?: number;
  @IsOptional()
  @Type(() => Number)
  @Min(0)
  offset?: number;
}
