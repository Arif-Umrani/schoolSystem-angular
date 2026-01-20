import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../../../shared/models/student.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-add.html',
  styleUrl: './student-add.scss',
})
export class StudentAdd {

  students: any[] = [];

  student: Student = {
    name: '',
    className: '',
    age: null,
  };

  successMsg = '';

  editIndex: number | null = null;


  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
      const id = this.route.snapshot.paramMap.get('id');
      
      if (id !== null) {
        this.editIndex = +id;
        const data = this.studentService.getStudents()[this.editIndex];

        if (data) {
          this.student = { ...data };
        }
      }
  }

  addStudent(){
    // console.log('29 student', this.student);

    if (!this.student.name || !this.student.className || !this.student.age) {
      alert('Please fill all fields');
      return;
    }

    if (this.editIndex == null) {
      this.studentService.addStudent(this.student);
    } else {
      this.studentService.updateStudent(this.editIndex, this.student);
    }

    this.router.navigate(['/students']);
    // console.log('36 student', this.student);
  };
}
