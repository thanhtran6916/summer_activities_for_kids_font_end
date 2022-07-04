import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const urlApi = 'https://provinces.open-api.vn/api';

@Injectable({
  providedIn: 'root'
})
export class ProvincesVietnamService {

  constructor(private httpClient: HttpClient) { }

  getAllProvince(): Observable<any>  {
    return this.httpClient.get(`${urlApi}/p`);
  }

  getDistrict(provinceCode: any): Observable<any> {
    return this.httpClient.get(`${urlApi}/p/${provinceCode}?depth=2`);
  }

  getWard(districtCode: any): Observable<any> {
    return this.httpClient.get(`${urlApi}/d/${districtCode}?depth=2`);
  }
}
