package com.frac.frac_backend.service;

import com.frac.frac_backend.dto.CustomerInputDTO;
import com.frac.frac_backend.dto.CustomerOutputDTO;

import java.util.List;

public interface CustomerService {

    CustomerOutputDTO createCustomer(CustomerInputDTO dto);

    List<CustomerOutputDTO> getAllCustomers();

    CustomerOutputDTO getCustomerById(Long id);

    CustomerOutputDTO updateCustomer(Long id, CustomerInputDTO dto);

    void deleteCustomer(Long id);
}
