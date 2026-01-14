import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../../../shared/models/student.model';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-add.html',
  styleUrl: './student-add.scss',
})
export class StudentAdd {

  students: any[] = [];

  student: Student = {
    name: '',
    className: '',
    age: null,
  };

  successMsg = '';

  constructor(private studentService: StudentService) {
      
  }

  addStudent(){
    console.log('29 student', this.student);
    this.studentService.addStudent(this.student);
    
    this.student = {
      name: '',
      className: '',
      age: null,
    }
    console.log('36 student', this.student);
  };
}
