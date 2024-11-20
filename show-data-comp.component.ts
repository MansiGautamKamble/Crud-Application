import { Component } from '@angular/core';
import { JavaServiceService } from '../java-service.service';

@Component({
  selector: 'app-show-data-comp',
  templateUrl: './show-data-comp.component.html',
  styleUrls: ['./show-data-comp.component.css']
})
export class ShowDataCompComponent {

  constructor(private service:JavaServiceService){}

  info:any
  ngOnInit(){
    this.service.getCourses().subscribe((data)=>{
      console.log(data)
      this.info=data
      
    })
  }
  
  deleteCourse(id:any){
    console.log("Delete")
    // this.service.deleteCourse(id).subscribe({
    //   next:(data)=>{
    //       this.info = data;
    //   },
    //   error:(error)=>{
    //     console.log(error)
    //   }
    // })

    this.service.deleteCourse(id).subscribe((data)=>{
        this.getCourses();
    })
  }
 
getCourses(){
  this.service.getCourses().subscribe((data)=>{
    this.info = data
  })
}
}
