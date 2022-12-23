package com.leclubsportif.leclubsportif.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerSaveDTO {
    private String customerName;
    private String customerLastname;
    private String address;
    private String cdp;
    private String city;
    private String state;
    private String email;
    private String phone;
    private String role;

}
