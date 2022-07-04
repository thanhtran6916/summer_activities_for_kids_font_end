import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  id: any;

  student: Student = {};

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
    });
    this.findById();
  }

  findById() {
    this.studentService.findById(this.id).subscribe(baseResponse => {
      this.student = <Student> baseResponse.data;
    }, error => alert('Không tìm thấy học sinh!'))
  }
}
