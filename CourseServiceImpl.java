package com.springboot.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.DAO.DaoRepository;
import com.springboot.Model.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	DaoRepository repository;
	
	@Override
	public Course addCourse(Course course) {
		return this.repository.save(course);
		
	}

	@Override
	public List<Course> getAllCouses() {

		 return this.repository.findAll();

	}

	@Override
	public Optional<Course> getCourse(int courseId) {
		
	      return this.repository.findById(courseId);
		
	}

	@Override
	public Course updateCourse(Course course) {

         return this.repository.save(course);
	}

	@Override
	public void deleteCourse(int cid) {

      Course c = this.repository.getOne(cid);
      this.repository.delete(c);
		
	}
	
	
	
	

}
