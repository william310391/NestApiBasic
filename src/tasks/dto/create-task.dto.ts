import {IsString, Min} from 'class-validator'


export class CraeteTaskDto{
    @IsString()
    @Min(1)
    title: string
    description:string
}