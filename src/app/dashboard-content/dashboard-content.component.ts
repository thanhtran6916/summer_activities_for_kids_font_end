import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {Student} from "../model/student";

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {

  listStudent: Student[] = [];

  student: Student = {}

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(response => {
      this.listStudent = <Student[]> response.data;
    }, error => {
      alert("Lỗi hệ thống")
    });
  }

  public findById(id: any) {
    this.studentService.findById(id).subscribe(response => {
      this.student = <Student> response.data;
    }, error => {
      alert("Không tìm thấy học sinh!")
    })
  }

}
