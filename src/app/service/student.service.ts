import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {STUDENT_GET_ALL, STUDENT_GET_BY_ID, STUDENT_INSERT, STUDENT_UPDATE} from "../app-url";
import {BaseResponse} from "../model/base-response";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<BaseResponse> {
    return this.httpClient.get<BaseResponse>(STUDENT_GET_ALL);
  }

  findById(id: any): Observable<BaseResponse> {
    return this.httpClient.get<BaseResponse>(`${STUDENT_GET_BY_ID}/${id}`);
  }

  insertStudent(student: Student): Observable<BaseResponse> {
    return this.httpClient.post(STUDENT_INSERT, student);
  }

  updateStudent(student: Student): Observable<BaseResponse> {
    return this.httpClient.post(STUDENT_UPDATE, student);
  }
}
