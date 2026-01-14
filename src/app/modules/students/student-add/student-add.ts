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
      
  }

  addStudent(){

  };
}
