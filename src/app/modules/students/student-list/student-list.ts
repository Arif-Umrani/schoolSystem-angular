import { Component } from '@angular/core';
import { Student } from '../../../shared/models/student.model';
import { StudentService } from '../student.service';
import { CommonModule } from '@angular/common';
import { StudentAdd } from '../student-add/student-add';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, StudentAdd, RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.scss',
})
export class StudentList {

  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {
    this.students = this.studentService.getStudents();
    // console.log(this.students);
  }

  editStudent(index: number) {
    this.router.navigate(['/students/add'], {
      queryParams: { index }
    });
  }

  deleteStudent(index: number) {
    if (confirm('Are you sure?')) {
      this.studentService.deleteStudent(index);
    }
  }



}
