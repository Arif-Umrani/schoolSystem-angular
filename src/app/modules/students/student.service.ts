import { Injectable } from '@angular/core';
import { Student } from '../../shared/models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    { id: 1, name: 'Ali', className: '10th', age: 15 },
    { id: 2, name: 'Sara', className: '9th', age: 14 }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }
}
