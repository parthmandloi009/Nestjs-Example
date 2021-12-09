import { IsString, IsInt, IsEmail } from 'class-validator';

export class UserDataDto {
    @IsString()
    name: string;
  
    @IsString()
    city: string;

    @IsString()
    @IsEmail()
    email:string
  
    @IsInt()
    phone: number;
}