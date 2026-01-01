package com.frac.frac_backend.dto;

import com.frac.frac_backend.enums.Gender;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerInputDTO {

//    private String customerName;
    private String firstName;
    private String lastName;
//    private String userName;
    private String password;
    private String customerImage;
    private Gender gender;
//    private int age;
    private LocalDate birthday;
    private String nicNumber;
    private String contactNumber;
    private String email;
    private String country;
//    private String address;

}
