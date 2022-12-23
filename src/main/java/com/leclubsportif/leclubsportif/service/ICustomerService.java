package com.leclubsportif.leclubsportif.service;

import com.leclubsportif.leclubsportif.DTO.CustomerDTO;
import com.leclubsportif.leclubsportif.DTO.CustomerSaveDTO;
import com.leclubsportif.leclubsportif.entity.Customer;

import java.util.List;

public interface ICustomerService {
    String addCustomer(CustomerSaveDTO customerSaveDTO);

    List<CustomerDTO> getAllCustomer() ;

    String updateCustomer(CustomerDTO customer);

    boolean deleteCustomer(Long id);
}
