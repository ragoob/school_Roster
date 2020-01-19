import {StudentDTO} from './models/students.models'
import { StudentsGradeDTO } from './models';
export interface IStudentService{
    createStudent(student : StudentDTO) :void;
    getStudentByGrade(grade : number) : StudentDTO[];
    getAllStudents() : StudentsGradeDTO[];
}