package com.leclubsportif.leclubsportif.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "customer")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Customer {

    @Id
    @Column(name = "customer_id", length = 50)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long customerId;
    @Column(name = "customer_name", length = 250)
    private String customerName;
    @Column(name = "customer_lastname", length = 250)
    private String customerLastname;
    @Column(name = "customer_address", length = 250)
    private String address;
    @Column(name = "customer_cdp", length = 20)
    private String cdp;
    @Column(name = "customer_city", length = 250)
    private String city;
    @Column(name = "customer_state", length = 250)
    private String state;
    @Column(name = "customer_email", length = 100)
    private String email;
    @Column(name = "customer_phone", length = 20)
    private String phone;

    @Column(name = "role", length = 20)
    private String role;

    public Customer(String customerName, String customerLastname, String address, String cdp, String city, String state, String email, String phone, String role) {
        this.customerName = customerName;
        this.customerLastname = customerLastname;
        this.address = address;
        this.cdp = cdp;
        this.city = city;
        this.state = state;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", customerName='" + customerName + '\'' +
                ", customerLastname='" + customerLastname + '\'' +
                ", address='" + address + '\'' +
                ", cdp='" + cdp + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
