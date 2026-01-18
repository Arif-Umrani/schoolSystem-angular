import { Injectable } from '@angular/core';
import { Teacher } from '../../shared/models/teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: Teacher[] = [
    { name: 'Ahmed', subject: 'Math', experience: 5 },
    { name: 'Ayesha', subject: 'English', experience: 3 }
  ];

  getTeachers(): Teacher[] {
    return this.teachers;
  }

  addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }
}
