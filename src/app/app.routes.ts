import { Routes } from '@angular/router';
import { StudentList } from './modules/students/student-list/student-list';
import { TeacherList } from './modules/teachers/teacher-list/teacher-list';

export const routes: Routes = [
  { path: 'students', component: StudentList },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'teachers', component:TeacherList }
];
