import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'title is required' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'description is required' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'price is required' })
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'price must be a number & not more than 2 decimal places' },
  )
  @IsPositive({ message: 'price must be greater than 0' })
  price: number;

  @IsNotEmpty({ message: 'stock is required' })
  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'stock must be a number' })
  @Min(0, { message: 'stock must be greater than or equal to 0' })
  stock: number;

  @IsNotEmpty({ message: 'images is required' })
  @IsArray({ message: 'images must be an array format' })
  images: string[];

  @IsNotEmpty({ message: 'categoryId is required' })
  @IsNumber({}, { message: 'categoryId must be a number' })
  categoryId: number;
}
