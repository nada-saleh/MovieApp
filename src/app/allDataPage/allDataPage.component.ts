import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from '../IService/istudent';
import { IstudentforList } from '../IService/IstudentforList';
import { studentService } from '../service/studentService';


@Component({
  selector: 'alldatapage-app',
  templateUrl: './allDataPage.component.html',
})
export class AllDataPageComponent implements OnInit {

  StudentList: IstudentforList[] = [];
  StudentList1?: IStudent ;

  constructor(private router: Router, private stdservice: studentService ) {}

  ngOnInit(): void {
    this.stdservice.getAllStudents().subscribe((students) => {
      this.StudentList = students;
      console.log(this.StudentList);
    });
  }

  delete(studentId: number) {
    this.stdservice.deleteStudent(studentId).subscribe((response) => {});
  }

  deleteUI() {
    var el = document.querySelector('.class1');
    el?.remove()
    var el2 = document.querySelector('.class2');
    el2?.remove()

  }





  addNewStudent() {
    this.router.navigate(['/add']);
  }

  update(studentId: number) {

    this.router.navigate(['/add'],{queryParams:{id:studentId}});
  }
}
