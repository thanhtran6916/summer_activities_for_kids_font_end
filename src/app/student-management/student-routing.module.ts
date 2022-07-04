import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentInfoComponent} from "./student-info/student-info.component";
import {StudentUpdateComponent} from "./student-update/student-update.component";
import {StudentCreatedComponent} from "./student-created/student-created.component";
import {StudentDelComponent} from "./student-del/student-del.component";


const routers: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'student-list'},
  {path: 'student-list', component: StudentListComponent},
  {path: 'student-create', component: StudentCreatedComponent},
  {path: 'student-info/:id', component: StudentInfoComponent},
  {path: 'student-update/:id', component: StudentUpdateComponent},
  {path: 'student-del/:id', component: StudentDelComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ]
})
export class StudentRoutingModule { }
