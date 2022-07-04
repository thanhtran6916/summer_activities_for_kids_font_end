import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Province} from "../../model/province";
import {District} from "../../model/district";
import {Ward} from "../../model/ward";
import {map, Observable, startWith} from "rxjs";
import {ProvincesVietnamService} from "../../service/provinces-vietnam.service";

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css']
})
export class AddressInputComponent implements OnInit {

  provinceControl = new FormControl('');
  districtControl = new FormControl('');
  wardControl = new FormControl('');
  provinces: Province[] = [];
  districts: District[] = [];
  wards: Ward[] = [];
  filteredProvince: Observable<Province[]> | undefined;
  filteredDistrict: Observable<District[]> | undefined;
  filteredWard: Observable<Ward[]> | undefined;

  constructor(private provinceVietNam: ProvincesVietnamService) {
  }

  ngOnInit() {
    this.findProvince();
    this.filteredProvince = this.provinceControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProvince(value || ''))
    );
  }

  private findProvince() {
    this.provinceVietNam.getAllProvince().subscribe(provinces => {
      this.provinces = provinces
    })
  }

  findDistrict(province: Province) {
    this.provinceVietNam.getDistrict(province.code).subscribe(data => {
      this.districts = data.districts;
      this.filteredDistrict = this.districtControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterDistrict(value || ''))
      )
    });
  }

  findWard(district: District) {
    this.provinceVietNam.getWard(district.code).subscribe(data => {
      this.wards = data.wards;
      this.filteredWard = this.wardControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterWard(value || ''))
      )
    });
  }

  private _filterWard(value: string): Ward[] {
    const  filterValue = this._normalizeValue(value);
    return this.wards.filter(ward => this._normalizeValue(ward.name || '').includes(filterValue))
  }

  private _filterDistrict(value: string): District[] {
    const  filterValue = this._normalizeValue(value);
    return this.districts.filter(district => this._normalizeValue(district.name || '').includes(filterValue))
  }

  private _filterProvince(value: string): Province[] {
    const filterValue = this._normalizeValue(value);
    return this.provinces.filter(province => this._normalizeValue(province.name || '').includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
