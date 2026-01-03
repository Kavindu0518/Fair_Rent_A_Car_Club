package com.frac.frac_backend.repository;

import com.frac.frac_backend.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    boolean existsByEmailIgnoreCase(String email);
    boolean existsByUserNameIgnoreCase(String userName);
}
