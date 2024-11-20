package com.springboot.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.Model.Course;

public interface DaoRepository extends JpaRepository<Course,Integer> {

}
