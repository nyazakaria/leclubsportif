package com.leclubsportif.leclubsportif.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactDTO {
    private Long id;
    private String name;
    private String prenom;
    private String email;
    private String message;
    private boolean newsletter;

    public ContactDTO(String name, String prenom, String email, String message, boolean newsletter) {
        this.name = name;
        this.prenom = prenom;
        this.email = email;
        this.message = message;
        this.newsletter = newsletter;
    }

    @Override
    public String toString() {
        return "ContactDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", prenom='" + prenom + '\'' +
                ", email='" + email + '\'' +
                ", message='" + message + '\'' +
                ", newsletter=" + newsletter +
                '}';
    }
}
