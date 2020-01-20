import { Test } from "@nestjs/testing";
import { StudentController } from "./student.controller";
import { StudentRepository, StudentGradeRepository } from "../../infrastructure/build";
import { StudentService, IStudentService, StudentDTO } from "../../services/build";
const StudentRepositoryProvider = {
  provide: 'IStudentRepository',
  useClass: StudentRepository

};
const StudentServiceProvider = {
  provide: 'IStudentService',
  useClass: StudentService
};

const StudentGradeRepositoryProvider = {
  provide: 'IStudentGradeRepository',
  useClass: StudentGradeRepository
};

describe('StudentController', () => {
  let studentController: StudentController;
  let studentService: IStudentService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [StudentRepositoryProvider, StudentGradeRepositoryProvider, StudentServiceProvider],
    }).compile();

    studentService = module.get<IStudentService>('IStudentService');
    studentController = module.get<StudentController>(StudentController);
  });

  describe('findAll', () => {
    it('should return an array of students', async () => {
      const result: StudentDTO[] = [];
      jest.spyOn(studentService, 'getAllStudents').mockImplementation(() => result);

      expect(await studentController.findAll()).toBe(result)
    });
  });
});


