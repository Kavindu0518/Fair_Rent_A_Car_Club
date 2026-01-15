package com.frac.frac_backend.service;

import com.frac.frac_backend.dto.*;

import java.util.List;

public interface CustomerService {

    CustomerOutputDTO loginCustomer(CustomerLoginDTO loginDTO);

    CustomerOutputDTO createCustomer(CustomerInputDTO dto);

    List<CustomerOutputDTO> getAllCustomers();

    CustomerOutputDTO getCustomerById(Long id);

    CustomerOutputDTO updateCustomer(Long id, CustomerInputDTO dto);

    void deleteCustomer(Long id);
}
