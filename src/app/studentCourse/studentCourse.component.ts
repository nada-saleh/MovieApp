import { HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../IService/istudent';
import { IstudentforList } from '../IService/IstudentforList';
import { studentService } from '../service/studentService';


@Component({
  selector: 'studentcourses-app',
  templateUrl: './studentCourse.component.html',
})
export class StudentCourseComponent implements OnInit {
   httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private route: ActivatedRoute,
    private stdservice: studentService,
    private router: Router
  ) {}

  StudentListData: IStudent = {};
  StudentList: IstudentforList[] = [];

  inputName = this.StudentListData?.name;
  inputDateBirth?: Date;
  inputClass: number = 0;
  inputGender: number=0 ;


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.stdservice.getAllStudents().subscribe((students) => {
        this.StudentList = students;
        console.log(this.StudentList);
      });
      if (params['id'] != 0) {
        this.stdservice
          .getStudentById(params['id'])
          .subscribe((students) => (this.StudentListData = students));
      } else {
        console.log('No');
      }
    });
  }

  updateStudentData(updateStudentData: IStudent) {
    if (confirm('Are you sure to Update ')) {
      this.stdservice.updateStudent(updateStudentData).subscribe((stdData) => {
         stdData.name = this.StudentListData.name,
          stdData.classId = this.StudentListData.classId,
          stdData.dateofBirth = this.StudentListData.dateofBirth,
          (stdData.genderId) = this.StudentListData.genderId ;

      });
    this.router.navigate(['/studentData']);

    }

  }

  addStudent(AddstudentListData: IStudent) {
    this.stdservice.createStutent(AddstudentListData).subscribe((stdData) => {
        (stdData.name = this.StudentListData.name),
        (stdData.dateofBirth = this.StudentListData.dateofBirth),
        (stdData.classId = this.StudentListData.classId),
        (stdData.genderId = this.StudentListData.genderId);

    });
    this.router.navigate(['/studentData']);
  }
}
