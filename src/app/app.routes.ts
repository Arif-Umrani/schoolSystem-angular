import { Routes } from '@angular/router';
import { StudentList } from './modules/students/student-list/student-list';
import { TeacherList } from './modules/teachers/teacher-list/teacher-list';
import { Login } from './modules/auth/login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'students', component: StudentList },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'teachers', component:TeacherList }

];
