import { IStudentService } from "./student.service.inteface";
import { StudentDTO } from "./models/students.models";
import { IStudentRepository, IStudentGradeRepository } from '../../core/build/index'
import { Inject } from '@nestjs/common'
import { StudentsGradeDTO } from ".";
import { Mapper } from './mapper';
export class StudentService implements IStudentService {

   constructor(@Inject('IStudentRepository') private studentRepository: IStudentRepository,
      @Inject('IStudentGradeRepository') private studentGradeRepository: IStudentGradeRepository) { }

   createStudent(student: StudentDTO): void {
      this.studentRepository.addStudent(Mapper.ToStudentEntity(student));
   }

   getStudentByGrade(grade: number): StudentDTO[] {
      return Mapper.ToStudentListModel(this.studentRepository.getStudentByGradeId(grade));

   }

   getAllStudents(): StudentsGradeDTO[] {
      return Mapper.ToGradeListModel(this.studentGradeRepository.getAllGradesWithStudenst());
   }

   findGrade(grade: number): StudentsGradeDTO | undefined {
      var studentGrade = this.studentGradeRepository.find(grade);
      return studentGrade != undefined ? Mapper.ToGradeModel(studentGrade) : undefined;
   }
}