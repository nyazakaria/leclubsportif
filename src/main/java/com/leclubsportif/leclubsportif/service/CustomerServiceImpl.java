package com.leclubsportif.leclubsportif.service;

import com.leclubsportif.leclubsportif.DTO.CustomerDTO;
import com.leclubsportif.leclubsportif.DTO.CustomerSaveDTO;
import com.leclubsportif.leclubsportif.customerRepo.CustomerRepo;
import com.leclubsportif.leclubsportif.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements ICustomerService{

    @Autowired
    private CustomerRepo customerRepo;

    @Override
    public String addCustomer(CustomerSaveDTO customerSaveDTO) {
        Customer customer = new Customer(
                customerSaveDTO.getCustomerName(),
                customerSaveDTO.getCustomerLastname(),
                customerSaveDTO.getAddress(),
                customerSaveDTO.getCdp(),
                customerSaveDTO.getCity(),
                customerSaveDTO.getState(),
                customerSaveDTO.getEmail(),
                customerSaveDTO.getPhone(),
                customerSaveDTO.getRole()
        );
        customerRepo.save(customer);
        return customer.getCustomerName();
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        List<Customer> customers = customerRepo.findAll();
        List<CustomerDTO> customerDTOList = new ArrayList<>();
        for (Customer user:customers){
            CustomerDTO customerDTO = new CustomerDTO(
                    user.getCustomerId(),
                    user.getCustomerName(),
                    user.getCustomerLastname(),
                    user.getAddress(),
                    user.getCdp(),
                    user.getCity(),
                    user.getState(),
                    user.getEmail(),
                    user.getPhone(),
                    user.getRole()
            );
            customerDTOList.add(customerDTO);
        }
        return customerDTOList;
    }

    @Override
    public String updateCustomer(CustomerDTO customer) {
        if(customerRepo.existsById(customer.getCustomerId())){
            Customer customerUpdate = customerRepo.getById(customer.getCustomerId());
            customerUpdate.setCustomerName(customer.getCustomerName());
            customerUpdate.setCustomerLastname(customer.getCustomerLastname());
            customerUpdate.setAddress(customer.getAddress());
            customerUpdate.setCdp(customer.getCdp());
            customerUpdate.setCity(customer.getCity());
            customerUpdate.setState(customer.getState());
            customerUpdate.setEmail(customer.getEmail());
            customerUpdate.setPhone(customer.getPhone());

            customerRepo.save(customerUpdate);
        } else {
            System.out.println(
                    "customer id do not Existe"
            );
        }
        return null;
    }

    @Override
    public boolean deleteCustomer(Long id) {
        if(customerRepo.existsById(id)){
            customerRepo.deleteById(id);
        }else {
            System.out.println("Customer Id Not Found");
        }
        return true;
    }
}
