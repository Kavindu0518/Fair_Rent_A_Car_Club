package com.frac.frac_backend.repository;

import com.frac.frac_backend.entity.Admin;
import com.frac.frac_backend.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

//    boolean existsByUserNameIgnoreCase(String userName);
    boolean existsByEmailIgnoreCase(String email);
    boolean existsByNicNumberIgnoreCase(String nicNumber);
    boolean existsByContactNumberIgnoreCase(String contactNumber);

    Optional<Customer> findByEmailIgnoreCase(String email);
}
