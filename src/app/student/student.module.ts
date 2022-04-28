import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { FilterarrPipe } from './filterarr.pipe';



@NgModule({
  declarations: [
    StudentComponent,
    FilterarrPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    StudentComponent
  ]
})
export class StudentModule { }
