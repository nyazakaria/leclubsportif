package com.leclubsportif.leclubsportif.service;

import com.leclubsportif.leclubsportif.DTO.ContactDTO;
import com.leclubsportif.leclubsportif.DTO.CustomerDTO;
import com.leclubsportif.leclubsportif.customerRepo.ContactRepo;
import com.leclubsportif.leclubsportif.entity.Contact;
import com.leclubsportif.leclubsportif.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ContactServiceImpl implements IContactService{

    @Autowired
    private ContactRepo contactRepo;

    @Override
    public String addMessage(ContactDTO contactDTO) {
       Contact message = new Contact(
               contactDTO.getName(),
               contactDTO.getPrenom(),
               contactDTO.getEmail(),
               contactDTO.getMessage(),
               contactDTO.isNewsletter()
       );
       contactRepo.save(message);
       return message.getContactEmail();
    }

    @Override
    public List<ContactDTO> messageByEmail(String email) {
        return null;
    }

    @Override
    public List<ContactDTO> getAllMessageContact() {
        List<Contact> customers = contactRepo.findAll();
        List<ContactDTO> customerDTOList = new ArrayList<>();
        for (Contact msg:customers){
            ContactDTO customerDTO = new ContactDTO(
                    msg.getContactName(),
                    msg.getContactLastname(),
                    msg.getContactEmail(),
                    msg.getContactMessage(),
                    msg.isContactNewsletter()
            );
            customerDTOList.add(customerDTO);
        }
        return customerDTOList;
    }
}
