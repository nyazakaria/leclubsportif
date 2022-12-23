package com.leclubsportif.leclubsportif.customerController;

import com.leclubsportif.leclubsportif.DTO.CustomerDTO;
import com.leclubsportif.leclubsportif.DTO.CustomerSaveDTO;
import com.leclubsportif.leclubsportif.service.CustomerServiceImpl;
import com.leclubsportif.leclubsportif.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/leclubsportif/customer")
public class CustomerController{

   @Autowired
    private ICustomerService customerService;

    @PostMapping(path = "/save")
    public String saveCustomer(@RequestBody CustomerSaveDTO customer) {
        return customerService.addCustomer(customer);
    }

    @GetMapping(path = "/customers")
    public List<CustomerDTO> getAllCustomer(){
        List<CustomerDTO> allCustomers = customerService.getAllCustomer();
        return allCustomers;
    }

    @PutMapping(path = "/update")
    public String updateCustomer(@RequestBody CustomerDTO customer) {
        String id = customerService.updateCustomer(customer);
        return id;
    }

    @DeleteMapping(path = "/deleteCustomer/{id}")
    public String deleteCustomer(@PathVariable(value = "id") Long id){
        boolean deleteCustomer = customerService.deleteCustomer(id);
        return "success deleted";
    }

}
