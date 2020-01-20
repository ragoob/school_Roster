import { Module, HttpModule } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentRepository, StudentGradeRepository } from '../../infrastructure/build/index'
import { StudentService } from '../../services/build/index'
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
@Module({
  imports: [HttpModule],
  controllers: [StudentController],
  exports: [
    StudentRepositoryProvider,
    StudentServiceProvider

  ],
  providers: [
    StudentRepositoryProvider,
    StudentServiceProvider,
    StudentGradeRepositoryProvider

  ],
})
export class AppModule { }
