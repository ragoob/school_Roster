import { Student } from "../entites/student";

export interface IStudentRepository{
    addStudent(studentName : string ,grade : number) : void;
    getStudentByGradeId(grade : number) : Student[];  
    getAllStudents() : Student[] 
}