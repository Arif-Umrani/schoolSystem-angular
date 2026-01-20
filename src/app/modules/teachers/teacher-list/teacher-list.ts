import { Component } from '@angular/core';
import { Teacher } from '../../../shared/models/teacher.model';
import { TeacherService } from '../teacher.service';
import { CommonModule } from '@angular/common';
import { TeacherAdd } from '../teacher-add/teacher-add';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule, TeacherAdd, RouterLink],
  templateUrl: './teacher-list.html',
  styleUrl: './teacher-list.scss',
})
export class TeacherList {

    teachers: Teacher[] = [];

  constructor
    (private teacherService: TeacherService,
    private router: Router
   ) {
    this.teachers = this.teacherService.getTeachers();
  }

  editTeacher(index: number) {
    this.router.navigate(['/teachers/add'], {
      queryParams: { index }
    });
  }

  deleteTeacher(index: number) {
    if (confirm('Are you sure?')) {
      this.teacherService.deleteTeacher(index);
    }
  }
}
