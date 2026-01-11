package com.frac.frac_backend.dto;

import com.frac.frac_backend.enums.Gender;
import com.frac.frac_backend.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AdminInputDTO {
    private String fullName;
    private String userName;
    private String password;
    private String adminImage;
    private Gender gender;
    private String email;
    private String contactNo;
    private Role role;
}
