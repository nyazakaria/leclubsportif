package com.leclubsportif.leclubsportif;

import com.leclubsportif.leclubsportif.DTO.CustomerSaveDTO;
import com.leclubsportif.leclubsportif.customerRepo.CustomerRepo;
import com.leclubsportif.leclubsportif.entity.Customer;
import com.leclubsportif.leclubsportif.service.CustomerServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LeclubsportifApplication {
    public static void main(String[] args) {

        SpringApplication.run(LeclubsportifApplication.class, args);
    }

}
