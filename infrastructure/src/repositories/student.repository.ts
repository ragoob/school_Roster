import { IStudentRepository, Student } from '../../../core/build/index'
import { Store } from '../store';

// Using mock Store for simplicity, We can use typeOrm and any SQL or NoSQL db
export class StudentRepository implements IStudentRepository {
    addStudent(student: Student): void {
        Store.Students.push(student);
    }


    getStudentByGradeId(grade: number): Student[] {
        return Store.Students.filter(s => s.grade.grade == grade)
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    getAllStudents(): Student[] {
        return Store.Students;
    }
}