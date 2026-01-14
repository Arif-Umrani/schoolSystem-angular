import { Component } from '@angular/core';
import { Student } from '../../../shared/models/student.model';
import { StudentService } from '../student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.scss',
})
export class StudentList {
    students: Student[] = [];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
    console.log(this.students);
  }
  
}
