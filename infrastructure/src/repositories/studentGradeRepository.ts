import { IStudentGradeRepository, StudentsGrade } from '../../../core/build/index'
import { Store } from '../store'
export class StudentGradeRepository implements IStudentGradeRepository {

    getAllGradesWithStudenst(): StudentsGrade[] {
        var grades = Store.Grades.sort((a, b) => a.grade - b.grade);
        grades.forEach(g => {
            g.students = Store.Students.filter(s => s.grade.grade == g.grade)
                .sort((a, b) => a.name.localeCompare(b.name))
        });

        return grades;
    }
    find(grade: number): StudentsGrade | undefined {
        return Store.Grades.find(g => g.grade == grade);
    }
}