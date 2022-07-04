import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

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
