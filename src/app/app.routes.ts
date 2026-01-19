import { Routes } from '@angular/router';
import { Login } from './modules/auth/login/login';
import { StudentList } from './modules/students/student-list/student-list';
import { StudentAdd } from './modules/students/student-add/student-add';
import { TeacherList } from './modules/teachers/teacher-list/teacher-list';
import { TeacherAdd } from './modules/teachers/teacher-add/teacher-add';


export const routes: Routes = [
  { path: 'login', component: Login },

  //students section route
  { path: 'students', component: StudentList },
  { path: 'students/add', component: StudentAdd },
  { path: 'students/edit/:id', component: StudentAdd },
  { path: '', redirectTo: 'students', pathMatch: 'full' },


  // teachers section route
  { path: 'teachers', component: TeacherList },
  { path: 'teachers/add', component: TeacherAdd },
  { path: 'teachers/edit/:id', component: TeacherAdd },

];
