import { Injectable } from '@angular/core';
import { Student } from '../../shared/models/student.model';
import { Teacher } from '../../shared/models/teacher.model';


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

  updateStudent(index: number, student: Student ) {
    this.students[index] = student;
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  getStudentsByIndex(index: number): Student {
    return this.students[index];
  }
}
