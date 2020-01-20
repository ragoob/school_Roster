import { StudentsGrade } from "../entites";

export interface IStudentGradeRepository {
    getAllGradesWithStudenst(): StudentsGrade[];
    find(grade: number): StudentsGrade | undefined;
}