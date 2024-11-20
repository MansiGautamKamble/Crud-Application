import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataCompComponent } from './show-data-comp/show-data-comp.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { EditCourseCompComponent } from './edit-course-comp/edit-course-comp.component';

const routes: Routes = [
  {
    path:'course',component:ShowDataCompComponent
  },
  {
    path:'courselist',component:ShowDataCompComponent
  },
  {
    path:'addcourse',component:AddcourseComponent
  },
  {
    path:'editcourse/:id',component:EditCourseCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
