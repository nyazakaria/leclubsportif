package com.leclubsportif.leclubsportif.service;

import com.leclubsportif.leclubsportif.DTO.ContactDTO;
import com.leclubsportif.leclubsportif.DTO.CustomerDTO;
import com.leclubsportif.leclubsportif.DTO.CustomerSaveDTO;

import java.util.List;

public interface IContactService {
    String addMessage(ContactDTO contactDTO);

    List<ContactDTO> messageByEmail(String email);

    List<ContactDTO> getAllMessageContact();
}
