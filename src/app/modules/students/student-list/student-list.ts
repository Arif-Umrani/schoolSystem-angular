import { Component } from '@angular/core';
import { Student } from '../../../shared/models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.scss',
})
export class StudentList {
    students: Student[] = [];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }
}
