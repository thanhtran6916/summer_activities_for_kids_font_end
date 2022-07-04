import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {ActivatedRoute, ParamMap, Router, RouterModule} from "@angular/router";
import {Student} from "../../model/student";

@Component({
  selector: 'app-student-del',
  templateUrl: './student-del.component.html',
  styleUrls: ['./student-del.component.css']
})
export class StudentDelComponent implements OnInit {

  id: any;

  student: Student = {};

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
    })
    this.findById();
  }

  findById() {
    this.studentService.findById(this.id).subscribe(baseResponse => {
      this.student = <Student> baseResponse.data;
    }, error => alert('Không tìm thấy học sinh!'))
  }

  deleteStudent() {
    // this.student.status = 0;
    this.studentService.updateStudent(this.student).subscribe(baseResponse => {
      alert("Đã xóa học sinh!");
      this.router.navigate(['/student-list']);
    }, error => "Xóa học sinh không thành công!");
  }

}
