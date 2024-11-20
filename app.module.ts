import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDataCompComponent } from './show-data-comp/show-data-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcourseComponent } from './addcourse/addcourse.component'
import { FormsModule } from '@angular/forms';
import { EditCourseCompComponent } from './edit-course-comp/edit-course-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataCompComponent,
    AddcourseComponent,
    EditCourseCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
