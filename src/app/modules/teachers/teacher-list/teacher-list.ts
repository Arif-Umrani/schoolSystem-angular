import { Component } from '@angular/core';
import { Teacher } from '../../../shared/models/teacher.model';
import { TeacherService } from '../teacher.service';
import { CommonModule } from '@angular/common';
import { TeacherAdd } from '../teacher-add/teacher-add';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule, TeacherAdd],
  templateUrl: './teacher-list.html',
  styleUrl: './teacher-list.scss',
})
export class TeacherList {

    teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) {
    this.teachers = this.teacherService.getTeachers();
  }

  
}
