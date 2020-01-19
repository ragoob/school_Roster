import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Inject} from '@nestjs/common';
import {StudentDTO,IStudentService} from '../../services/build/index'

@Controller('Student')
export class StudentController {
    constructor(@Inject('IStudentService') private studentService : IStudentService){}
   @Get()
   findAll() : any[]{
    return this.studentService.getAllStudents();
   }

  @Get(':id')
  findByGrade(@Param() params): StudentDTO[] {
    if(params.id === null)
    throw new HttpException('grade is required',HttpStatus.BAD_REQUEST);
    return this.studentService.getStudentByGrade(params.id);
  }

@Post()
async create(@Body() student : StudentDTO) {
  if(student == null)
  throw new HttpException('Student Data should not be null',HttpStatus.BAD_REQUEST);
  try{
    this.studentService.createStudent(student);
  }
  catch(error){
    throw new HttpException(error.message,HttpStatus.FORBIDDEN);
  }
}
}