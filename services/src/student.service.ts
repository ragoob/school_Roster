import  { IStudentService } from "./student.service.inteface";
import { StudentDTO } from "./models/students.models";
import {IStudentRepository,IStudentGradeRepository} from '../../core/build/index'
import { Inject } from '@nestjs/common'
import { StudentsGradeDTO } from ".";

export class StudentService implements IStudentService{

    constructor(@Inject('IStudentRepository') private studentRepository :IStudentRepository
    ,@Inject('IStudentGradeRepository') private studentGradeRepository : IStudentGradeRepository){
    }
    
    createStudent(student: StudentDTO) : void {
       if(this.studentGradeRepository.find(student.grade)== undefined)
       throw Error('the grade not exist');
        this.studentRepository.addStudent(student.name,student.grade);
      }
       
      getStudentByGrade(grade: number): StudentDTO[] {
         return this.studentRepository.getStudentByGradeId(grade)
         .map(item => ({ name:item.name,grade: item.grade?.grade as number }));
          
      }
  
      getAllStudents(): StudentsGradeDTO[] {
         return this.studentGradeRepository.getAllGradesWithStudenst()
         .map(item=> ({
            grade : item.grade,
            students : item.students?.map(s=> ({
               name : s.name,
               grade : s.grade?.grade as number
            }))
         }))
         
      }
}