package com.leclubsportif.leclubsportif.customerRepo;

import com.leclubsportif.leclubsportif.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface ContactRepo extends JpaRepository<Contact, Long> {
}
