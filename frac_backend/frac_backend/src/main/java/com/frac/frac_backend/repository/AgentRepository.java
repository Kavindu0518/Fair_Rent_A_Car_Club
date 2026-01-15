package com.frac.frac_backend.repository;

import com.frac.frac_backend.entity.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AgentRepository extends JpaRepository<Agent, Long> {

    boolean existsByEmailIgnoreCase(String email);
    boolean existsByCompanyNameIgnoreCase(String companyName);
    boolean existsByUserNameIgnoreCase(String userName);
    boolean existsByContactNoIgnoreCase(String contactNo);
    boolean existsByBusinessRegNoIgnoreCase(String businessRegNo);

    Optional<Agent> findByEmailIgnoreCase(String email);

//    Optional<Agent> findByUserName(String userName);  // Ensure it returns Optional<Agent>
}