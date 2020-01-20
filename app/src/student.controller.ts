import { Controller, Get, Post, Body, Param, Inject, Res, HttpStatus } from '@nestjs/common';
import { StudentDTO, IStudentService } from '../../services/build/index'
import { Response } from 'express';
@Controller('Student')
export class StudentController {
  constructor(@Inject('IStudentService') private studentService: IStudentService) { }
  @Get()
  findAll(): any[] {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  findByGrade(@Param() params): StudentDTO[] {
    return this.studentService.getStudentByGrade(params.id);
  }

  @Post()
  async create(@Res() res: Response, @Body() student: StudentDTO) {
    if (!this.IsGradeExist(student.grade)) {
      res.status(HttpStatus.FORBIDDEN).send(`Grade with number ${student.grade} not exist`);
    }

    this.studentService.createStudent(student);
    res.status(HttpStatus.CREATED).send();
  }

  private IsGradeExist(grade: number): boolean {
    return this.studentService.findGrade(grade) != undefined;
  }

}