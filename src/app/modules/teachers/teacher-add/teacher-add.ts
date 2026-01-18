import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-teacher-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teacher-add.html',
  styleUrl: './teacher-add.scss',
})
export class TeacherAdd {
  
  teachers: any[] = [];

  teacher = {
    name: '',
    subject: '',
    experience: null as number | null
  };


  successMsg = '';

  editIndex: number | null = null;

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router
  ){
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.editIndex = +id;
      const data = this.teacherService.getTeachers()[this.editIndex];
      if (data) {
        this.teacher = { ...data };
      }
    }
  }

  addTeacher() {

    if (!this.teacher.name || !this.teacher.subject || !this.teacher.experience) {
      alert('Please fill all fields');
      return;
    }

    if (this.editIndex === null) {
      this.teacherService.addTeacher(this.teacher);
    } else {
      this.teacherService.updateTeacher(this.editIndex, this.teacher);
    }


    //ye form clear krta hy
    // this.teacher = {
    //   name: '',
    //   subject: '',
    //   experience: null
    // };

    //ye wapis list me aane k liye
    this.router.navigate(['/teachers']);
  }
}
