import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Student} from "../../model/student";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  id: any;

  student: Student = {};

  studentForm = new FormGroup({
    // id: new FormControl(),
    name: new FormControl(),
    dharmaName: new FormControl(), // pháp danh
    registerForRefuge: new FormControl(), // Đăng ký quy y
    gender: new FormControl(),
    yearBirth: new FormControl(),
    height: new FormControl(),
    weight: new FormControl(),
    relativeName: new FormControl(), // họ tên người thân
    relativePhone: new FormControl(), // số điện thoại người thân
    appartmentNumber: new FormControl(), // số nhà
    ward: new FormControl(), // phường/xã
    district: new FormControl(), // quận/huyện
    province: new FormControl(), // tỉnh/thành phố
    address: new FormControl(), // địa chỉ nơi ở hiện tại
    numberOfParticipation: new FormControl(), // số lần đã tham gia
    healthCondition: new FormControl(), // tình trạng sức khỏe
    noteHealthCondition: new FormControl(), // ghi chú tình trạng sức khỏe
    conduct: new FormControl(), // hạnh kiểm
    academicAability: new FormControl(), // học lực
    summerCourseId: new FormControl(),
    introducePerson: new FormControl(), // người giới thiệu
    introducePersonPhone: new FormControl(), // số điện thoại người giới thiệu
    introducePersonIsYouth: new FormControl(), // người giới thiệu đang sinh hoạt ở trong chúng thanh niên
    activeGroupName: new FormControl(), // tên tổ người giới thiệu đang sinh hoạt
    result: new FormControl(), // Đủ điều kiện hay không
    status: new FormControl(), // Trạng thái
    reasonReject: new FormControl() // lý do từ chối
  })

  constructor(private studentService: StudentService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
    });
    this.findById();
    this.student.id = this.id;
  }

  findById() {
    this.studentService.findById(this.id).subscribe(baseResponse => {
      this.student = <Student> baseResponse.data;
    }, error => alert('Không tìm thấy học sinh!'))
  }

  updateStudent() {
    this.student.id = this.id;
    this.studentService.updateStudent(this.student).subscribe(baseResponse => {
      alert('Cập nhập thành công!');
      this.router.navigate(['/student-list'])
    }, error => alert('Cập nhập không thành công!'));
  }

}
