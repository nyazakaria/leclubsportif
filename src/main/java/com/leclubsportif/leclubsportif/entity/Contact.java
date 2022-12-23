package com.leclubsportif.leclubsportif.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "contact")
public class Contact {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long Id;

    @Column(name = "contactName", length = 50)
    private String contactName;
    @Column(name = "contactLastname", length = 50)
    private String contactLastname;

    @Column(name = "contactEmail", length = 100)
    private String contactEmail;
    @Column(name = "contactMessage", length = 1000)
    private String contactMessage;
    @Column(name = "contactNewsletter")
    private boolean contactNewsletter;

    public Contact(String contactName, String contactLastname, String contactEmail, String contactMessage, boolean contactNewsletter) {
        this.contactName = contactName;
        this.contactLastname = contactLastname;
        this.contactEmail = contactEmail;
        this.contactMessage = contactMessage;
        this.contactNewsletter = contactNewsletter;
    }
}
