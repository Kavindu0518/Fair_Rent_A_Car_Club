package com.frac.frac_backend.dto;

import com.frac.frac_backend.entity.Admin;
import com.frac.frac_backend.entity.Customer;
import com.frac.frac_backend.enums.Gender;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CustomerOutputDTO {

    private Long id;
//    private String customerName;
    private String firstName;
    private String lastName;
//    private String userName;
    private String customerImage;
    private Gender gender;
//    private int age;
    private LocalDate birthday;
    private String nicNumber;
    private String contactNumber;
    private String email;
    private String country;
//    private String address;

    // Error message constructor (optional)
    private String errorMessage;


    // Static method to create a success response
    public static CustomerOutputDTO success(String errorMessage, Customer customer) {
        return CustomerOutputDTO.builder()
                .id(customer.getId())
                .firstName(customer.getFirstName())
                .lastName(customer.getLastName())
                .customerImage(customer.getCustomerImage())
                .gender(customer.getGender())
                .birthday(customer.getBirthday())
                .nicNumber(customer.getNicNumber())
                .contactNumber(customer.getContactNumber())
                .email(customer.getEmail())
                .country(customer.getCountry())
                .errorMessage(errorMessage)
                .build();
    }

    // Add a method to set error message if needed
    public static CustomerOutputDTO error(String errorMessage) {
        return CustomerOutputDTO.builder()
                .errorMessage(errorMessage)
                .build();
    }
}
