import { Student, StudentsGrade } from '../../core/build/index'
export class Store {
    public static Grades: StudentsGrade[] = [
        {
            grade: 1,
            students: []

        },
        {
            grade: 2,
            students: []
        },

        {
            grade: 3,
            students: []
        }
    ]
    public static Students: Student[] = [
        {
            name: "Ted",
            grade: {
                grade: 1
            }

        },
        {
            name: "Alex",
            grade: {
                grade: 3
            }

        },
        {
            name: "David",
            grade: {
                grade: 3
            }

        },
        {
            name: "Sue",
            grade: {
                grade: 1
            }

        },
        {
            name: "Mark",
            grade: {
                grade: 2
            }

        },
        {
            name: "Matt",
            grade: {
                grade: 2
            }

        },
        {
            name: "John",
            grade: {
                grade: 1
            }

        },
        {
            name: "Billy",
            grade: {
                grade: 2
            }

        }
    ]
}