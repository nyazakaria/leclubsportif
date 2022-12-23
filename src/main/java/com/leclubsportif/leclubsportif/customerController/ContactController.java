package com.leclubsportif.leclubsportif.customerController;

import com.leclubsportif.leclubsportif.DTO.ContactDTO;
import com.leclubsportif.leclubsportif.DTO.CustomerSaveDTO;
import com.leclubsportif.leclubsportif.service.ContactServiceImpl;
import com.leclubsportif.leclubsportif.service.IContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/leclubsportif")
public class ContactController {

    @Autowired
    private IContactService contactService;
    @PostMapping(path = "/contact")
    public String contactInfo(@RequestBody ContactDTO contactDTO) {

        return contactService.addMessage(contactDTO);
    }

    @GetMapping(path = "/allmessage")
    public List<ContactDTO> getAllMessage() {
        List<ContactDTO> allMessage = contactService.getAllMessageContact();
        return allMessage;
    }

}
