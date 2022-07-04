import {environment} from "../environments/environment";

export const url = "http://localhost:3210";

export const STUDENT_GET_ALL = `${environment.baseUrl}/student/list`
export const STUDENT_GET_BY_ID = `${environment.baseUrl}/student/find`
export const STUDENT_INSERT = `${environment.baseUrl}/student/insert`
export const STUDENT_UPDATE = `${environment.baseUrl}/student/update`
