package com.frac.frac_backend.repository;

import com.frac.frac_backend.entity.BankTransfer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankTransferRepository extends JpaRepository<BankTransfer, Long> {
    // Custom queries can go here, if needed.
}