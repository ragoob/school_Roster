import { Student } from "../entites/student";

export interface IStudentRepository {
    addStudent(student: Student): void;
    getStudentByGradeId(grade: number): Student[];
    getAllStudents(): Student[]
}