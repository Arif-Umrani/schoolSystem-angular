import { Component } from '@angular/core';
import { Teacher } from '../../../shared/models/teacher.model';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  imports: [],
  templateUrl: './teacher-list.html',
  styleUrl: './teacher-list.scss',
})
export class TeacherList {

    teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) {
    this.teachers = this.teacherService.getTeachers();
  }

  
}
