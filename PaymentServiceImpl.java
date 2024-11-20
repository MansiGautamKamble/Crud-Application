package com.springboot.aopservices;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


public class PaymentServiceImpl implements PaymentService{

	@Override
	public void makePayment() {
		
		System.out.println("payment process is going on....");
		
	}

}
