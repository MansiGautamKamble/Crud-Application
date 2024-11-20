package com.springboot.services;

import java.util.List;
import java.util.Optional;

import com.springboot.Model.Course;

public interface CourseService {
	
	public Course addCourse(Course course);
	public List<Course> getAllCouses();
	public Optional<Course> getCourse(int courseId);
	public Course updateCourse(Course course);
	public void deleteCourse(int cid);
	

}
