import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-add.html',
  styleUrl: './student-add.scss',
})
export class StudentAdd {

  students: any[] = [];

  student = {
    name: '',
    class: '',
    age: null
  };

  successMsg = '';

  constructor() {
    const saved = localStorage.getItem('students');
    if (saved) {
      this.students = JSON.parse(saved);
    }
  }

  addStudent() {
    if (!this.student.name || !this.student.class || !this.student.age) {
      alert('Please fill all fields');
      return;
    }

    this.students.push({ ...this.student });
    localStorage.setItem('students', JSON.stringify(this.students));

    this.successMsg = 'Student added successfully!';
    this.resetForm();

    setTimeout(() => this.successMsg = '', 3000);
  }

  resetForm() {
    this.student = { name: '', class: '', age: null};
  }
}
