package com.springboot.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;
import java.util.*;


public class AspectClass {
	
//	@Before(value ="execution(* com.springboot.controller.HomeController.*(..))")
//	public void beforeService(JoinPoint joinpoint)
//	{
//		//System.out.println("Request to "+joinpoint.getSignature()+"started at "+new Date());
//	     System.out.println("process start");
//	}
//
//	
//	@After(value ="execution(* com.springboot.controller.HomeController.*(..))")
//	public void afterService(JoinPoint joinpoint)
//	{
//		//System.out.println("Request to"+joinpoint.getSignature()+"ended at"+new Date());
//	      System.out.println("process end");
//	}

//	@Around(value ="execution(* com.springboot.controller.HomeController.*(..))")
//	public void afterService(JoinPoint joinpoint)
//	{
//		//System.out.println("Request to"+joinpoint.getSignature()+"ended at"+new Date());
//	     System.out.println("");
//	}
}

