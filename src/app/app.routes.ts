import { Routes } from '@angular/router';
import { StudentList } from './modules/students/student-list/student-list';
import { TeacherList } from './modules/teachers/teacher-list/teacher-list';
import { Login } from './modules/auth/login/login';
import { StudentAdd } from './modules/students/student-add/student-add';
import { TeacherAdd } from './modules/teachers/teacher-add/teacher-add';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'students', component: StudentList,
    children: [
      { path: 'add', component: StudentAdd }
    ]
   },
  // { path: 'students/add', component: StudentAdd },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  
  { path: 'teachers/add', component: TeacherAdd},
  
  { path: 'teachers', component:TeacherList,
    children: [
      { path: 'add', component: TeacherAdd },
    ]
   },

   { path: 'teachers/edit/:id', component: TeacherAdd},
];
