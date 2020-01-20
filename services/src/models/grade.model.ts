import { StudentDTO } from "./students.models";

export class StudentsGradeDTO {
    constructor(public grade: number, public students?: StudentDTO[]) { }
}