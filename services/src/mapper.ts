import { Student, StudentsGrade } from "../../core/build";
import { StudentDTO, StudentsGradeDTO } from "./models";

export class Mapper {
    public static ToStudentListModel(students: Student[]): StudentDTO[] {
        return students.map(item => (new StudentDTO(item.name, item.grade.grade)));
    }

    public static ToStudentListEntity(students: StudentDTO[]): Student[] {
        return students.map(item => (new Student(item.name, new StudentsGrade(item.grade))));
    }


    public static ToStudentEntity(student: StudentDTO): Student {
        return new Student(student.name, new StudentsGrade(student.grade));
    }

    public static ToStudentModel(student: Student): StudentDTO {
        return (new StudentDTO(student.name, student.grade.grade));
    }

    public static ToGradeModel(studentgrate: StudentsGrade): StudentsGradeDTO {
        return (new StudentsGradeDTO(studentgrate.grade));
    }

    public static ToGradeEntity(studentgrate: StudentsGradeDTO): StudentsGrade {
        return (new StudentsGrade(studentgrate.grade));
    }
    public static ToGradeListEntity(studentgrades: StudentsGradeDTO[]): StudentsGrade[] {
        return studentgrades.map(item => (new StudentsGrade(item.grade, item.students ? this.ToStudentListEntity(item.students) : undefined)));
    }
    public static ToGradeListModel(studentgrades: StudentsGrade[]): StudentsGradeDTO[] {
        return studentgrades.map(item => (new StudentsGradeDTO(item.grade, item.students ? this.ToStudentListModel(item.students) : undefined)));
    }
}