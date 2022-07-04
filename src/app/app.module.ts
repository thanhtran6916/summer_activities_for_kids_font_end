import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { StudentListComponent } from './student-management/student-list/student-list.component';
import { StudentCreatedComponent } from './student-management/student-created/student-created.component';
import { StudentUpdateComponent } from './student-management/student-update/student-update.component';
import { StudentInfoComponent } from './student-management/student-info/student-info.component';
import { HeaderComponent } from './dashboard-management/header/header.component';
import { SidebarsComponent } from './dashboard-management/sidebars/sidebars.component';
import { DashboardManagementComponent } from './dashboard-management/dashboard-management.component';
import {DashboardManagementRoutingModule} from "./dashboard-management/dashboard-management-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StudentDelComponent } from './student-management/student-del/student-del.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { AddressInputComponent } from './share/address-input/address-input.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentCreatedComponent,
    StudentUpdateComponent,
    StudentInfoComponent,
    HeaderComponent,
    SidebarsComponent,
    DashboardManagementComponent,
    StudentDelComponent,
    AddressInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardManagementRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
