package com.frac.frac_backend.service.impl;

import com.frac.frac_backend.dto.CustomerInputDTO;
import com.frac.frac_backend.dto.CustomerOutputDTO;
import com.frac.frac_backend.entity.Customer;
import com.frac.frac_backend.repository.CustomerRepository;
import com.frac.frac_backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public CustomerOutputDTO createCustomer(CustomerInputDTO dto) {
        if (customerRepository.existsByEmailIgnoreCase(dto.getEmail())) {
            throw new RuntimeException("Customer with email already exists");
        }

        if (customerRepository.existsByNicNumberIgnoreCase(dto.getNicNumber())) {
            throw new RuntimeException("Customer with NIC or PASSPORT number already exists");
        }

        if (customerRepository.existsByContactNumberIgnoreCase(dto.getContactNumber())) {
            throw new RuntimeException("Customer with contact number already exists");
        }

        Customer customer = mapToEntity(dto);
        return mapToOutputDTO(customerRepository.save(customer));
    }

    @Override
    public List<CustomerOutputDTO> getAllCustomers() {
        return customerRepository.findAll()
                .stream()
                .map(this::mapToOutputDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CustomerOutputDTO getCustomerById(Long id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        return mapToOutputDTO(customer);
    }

    @Override
    public CustomerOutputDTO updateCustomer(Long id, CustomerInputDTO dto) {
        Customer existing = customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        existing.setFirstName(dto.getFirstName());
        existing.setLastName(dto.getLastName());
//        existing.setUserName(dto.getUserName());
        existing.setPassword(dto.getPassword());
        existing.setCustomerImage(dto.getCustomerImage());
        existing.setGender(dto.getGender());
//        existing.setAge(dto.getAge());
        existing.setBirthday(dto.getBirthday());
        existing.setNicNumber(dto.getNicNumber());
        existing.setContactNumber(dto.getContactNumber());
        existing.setEmail(dto.getEmail());
        existing.setCountry(dto.getCountry());
//        existing.setAddress(dto.getAddress());

        return mapToOutputDTO(customerRepository.save(existing));
    }

    @Override
    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    // ---------- Mapping Helpers ------------

    private Customer mapToEntity(CustomerInputDTO dto) {
        return Customer.builder()
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
//                .userName(dto.getUserName())
                .password(dto.getPassword())
                .customerImage(dto.getCustomerImage())
                .gender(dto.getGender())
//                .age(dto.getAge())
                .birthday(dto.getBirthday())
                .nicNumber(dto.getNicNumber())
                .contactNumber(dto.getContactNumber())
                .email(dto.getEmail())
                .country(dto.getCountry())
//                .address(dto.getAddress())
                .build();
    }

    private CustomerOutputDTO mapToOutputDTO(Customer customer) {
        return CustomerOutputDTO.builder()
                .id(customer.getId())
                .firstName(customer.getFirstName())
                .lastName(customer.getLastName())
//                .userName(customer.getUserName())
                .customerImage(customer.getCustomerImage())
                .gender(customer.getGender())
//                .age(customer.getAge())
                .birthday(customer.getBirthday())
                .nicNumber(customer.getNicNumber())
                .contactNumber(customer.getContactNumber())
                .email(customer.getEmail())
                .country(customer.getCountry())
//                .address(customer.getAddress())
                .build();
    }
}
