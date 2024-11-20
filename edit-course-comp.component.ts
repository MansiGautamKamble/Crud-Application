import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JavaServiceService } from '../java-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-course-comp',
  templateUrl: './edit-course-comp.component.html',
  styleUrls: ['./edit-course-comp.component.css']
})
export class EditCourseCompComponent {

  constructor(private route:ActivatedRoute , private service:JavaServiceService , private r:Router){}
  newid:any
  course = 
  {
    id:0,
    description:'',
    title:''
  }
  ngOnInit(){
     this.route.paramMap.subscribe((params)=>{
     this.newid = params.get('id')
     this.getCourse()
     })

  }

  getCourse(){
    this.service.getCourse(this.newid).subscribe((data)=>{
      this.course=data
      console.log(this.course)
    })
  }

  updateCourse(){
    this.service.updateCourse(this.course).subscribe((data)=>{
       this.r.navigate(['/courselist'])
    })
  }
}
