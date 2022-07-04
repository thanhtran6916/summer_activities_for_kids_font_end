import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProvincesVietnamService} from "../../service/provinces-vietnam.service";
import {Province} from "../../model/province";
import {District} from "../../model/district";
import {Ward} from "../../model/ward";
import {BaseOption} from "../../model/base-option";

@Component({
  selector: 'app-student-created',
  templateUrl: './student-created.component.html',
  styleUrls: ['./student-created.component.css']
})
export class StudentCreatedComponent implements OnInit {

  student: Student = {};

  provinces: Province[] = [];

  districts: District[] = [];

  wards: Ward[] = [];

  province: Province = {};

  panelOpenState = false;

  academicAbilities: BaseOption[] = [
    {code: 'gioi', name: 'Giỏi'},
    {code: 'kha', name: 'Khá'},
    {code: 'trungBinh', name: 'Trung bình'},
    {code: 'yeu', name: 'Yếu'},
    {code: 'kem', name: 'Kém'}
  ];

  conducts: BaseOption[] = [
    {code: 'tot', name: 'Tốt'},
    {code: 'kha', name: 'Khá'},
    {code: 'trungBinh', name: 'Trung bình'},
    {code: 'yeu', name: 'Yếu'}
  ];

  healthConditions: BaseOption[] = [
    {code: 'good', name: 'Tốt không có vấn đề gì về sức khỏe'},
    {code: 'attention', name: 'Có vấn đề về sức khỏe cần được chú ý'}
  ];

  relationShips: BaseOption[] = [
    {code: 'bo', name: "Bố"},
    {code: 'me', name: 'Mẹ'},
    {code: 'ong/ba', name: "Ông/Bà"},
    {code: 'other', name: 'Quan hệ khác'}
  ];

  introducePersonIsYouths: BaseOption[] = [
    {code: 'co', name: 'Có'},
    {code: 'khong', name: 'Không'}
  ];

  shirtSizes: BaseOption[] = [
    {code: 'S', name: '26kg trở xuống'},
    {code: 'L', name: 'Từ 27kg đến 32kg'},
    {code: 'M', name: 'Từ 32kg đến 45kg'},
    {code: 'XL', name: 'Từ 46kg đến 55kg'},
    {code: 'XXL', name: 'Trên 56kg'}
  ]

  constructor(private studentService: StudentService,
              private router: Router,
              private provincesVietNam: ProvincesVietnamService,
              private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllProvince();
  }

  createdStudent() {
    console.log(this.student);
    this.studentService.insertStudent(this.student).subscribe(baseResponse => {
      alert("Tạo mới thành công!");
      this.router.navigate(['/student-list'])
    }, error => alert("Tạo mới không thành công!"));
  }

  getAllProvince() {
    this.provincesVietNam.getAllProvince().subscribe(province => {
      this.provinces = province;
    })
  }

  private filter(value: Province): Province[] {
    // @ts-ignore
    const filterValue = value.name.toLowerCase().replace(/\s/g, '');
    return this.provinces.filter(province => province.name?.includes(filterValue));
  }

}
