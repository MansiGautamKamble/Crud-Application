import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JavaServiceService } from '../java-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  course={
    id:0,
    title:'',
    description:''
  }
  //service: any;
//   constructor(service:JavaServiceService , private router:Router){}

//   onSubmit(){
    
// this.service.addCourse(this.course).subscribe((x: any)=>{console.log(x)},
//   ()=>{
//     this.router.navigate(['/courselist'])
//   },
//   ()=>{
    
//   }
// )    

//}

constructor(private service:JavaServiceService , private router:Router){}
// onSubmit(){
// this.service.addCourse(this.course).subscribe((data)=>{
//   console.log(data)
//   this.router.navigate(['/courselist'])
// })

//}

onSubmit(){
  this.service.addCourse(this.course).subscribe({
    next:(data)=>{
      this.router.navigate(['/courselist'])
    },
    error:(error)=>{
         alert(error)
    }
    
  })

}
//console.log(this.course)
}



