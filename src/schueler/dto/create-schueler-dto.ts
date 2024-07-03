import { IsEmail, Length, Max, Min } from "class-validator";

export class CreateSchuelerDto {
    @Length(1, 40)
    name: string;

    @IsEmail()
    email: string;

    @Min(1, {
        each: true,
    })
    @Max(6, {
        each: true,
    })
    writtenGrades: number[];

    @Min(1, {
        each: true,
    })
    @Max(6, {
        each: true,
    })
    oralGrades: number[];
}