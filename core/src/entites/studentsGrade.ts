import { Student } from './student'
export class StudentsGrade {
    constructor(public grade: number, public students?: Student[]) { }
}