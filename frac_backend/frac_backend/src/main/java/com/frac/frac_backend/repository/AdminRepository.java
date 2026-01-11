package com.frac.frac_backend.repository;

import com.frac.frac_backend.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    boolean existsByEmailIgnoreCase(String email);
    boolean existsByUserNameIgnoreCase(String userName);

    // Add this method to find an Admin by email, ignoring case
    Optional<Admin> findByEmailIgnoreCase(String email);
}
