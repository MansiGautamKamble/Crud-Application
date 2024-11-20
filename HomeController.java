package com.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.Model.Course;
import com.springboot.services.CourseService;

@RestController
@CrossOrigin
public class HomeController {
	
	@Autowired
	CourseService service;
	
	@GetMapping("/test")
	public String Test()
	{
		return "Hello";
	}
	@PostMapping("/course")
	public Course saveCourse(@RequestBody Course course)
	{
		return this.service.addCourse(course);           
	}

	
	@GetMapping("/course")
	public List<Course> show()

	{
       System.out.println("Process is going on....");
       return this.service.getAllCouses();
	}
	
	@GetMapping("/course/{cid}")
	public Optional<Course> getC(@PathVariable("cid") String c)
	{
		return this.service.getCourse(Integer.parseInt(c));
	}
	
	
	@PutMapping("/course")
	public Course updatecourse(@RequestBody Course course)
	{
		return this.service.updateCourse(course);
	}

	@DeleteMapping("/course/{cid}")
	public void deletecourse(@PathVariable("cid") String c)
	{
		this.service.deleteCourse(Integer.parseInt(c));
	}
	
	
	

}

