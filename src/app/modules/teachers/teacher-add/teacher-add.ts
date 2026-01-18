import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teacher-add.html',
  styleUrl: './teacher-add.scss',
})
export class TeacherAdd {
  
  teachers: any[] = [];

  teacher = {
    name: '',
    subject: '',
    experience: null
  };


  successMsg = '';


  constructor(private teacherService: TeacherService ){

  }

  addTeacher() {
    // if(!this.teacher.name || !this.teacher.subject || !this.teacher.experience) {
    //   alert('Please fill all fields');
    //   return;
    // }

    this.teacherService.addTeacher(this.teacher);

    this.teacher = {
      name: '',
      subject: '',
      experience: null
    }
  };
}
