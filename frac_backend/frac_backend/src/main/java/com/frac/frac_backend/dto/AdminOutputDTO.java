package com.frac.frac_backend.dto;

import com.frac.frac_backend.enums.Gender;
import com.frac.frac_backend.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AdminOutputDTO {
    private Long id;
    private String fullName;
    private String userName;
    private String adminImage;
    private Gender gender;
    private String email;
    private String contactNo;
    private Role role;

    public static AdminOutputDTO error(String message) {
        return AdminOutputDTO.builder().fullName(message).build();
    }
}
