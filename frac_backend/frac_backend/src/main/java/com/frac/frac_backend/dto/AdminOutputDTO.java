//package com.frac.frac_backend.dto;
//
//import com.frac.frac_backend.enums.Gender;
//import com.frac.frac_backend.enums.Role;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//
//@Data
//@Builder
//@AllArgsConstructor
//public class AdminOutputDTO {
//    private Long id;
//    private String fullName;
//    private String userName;
//    private String adminImage;
//    private Gender gender;
//    private String email;
//    private String contactNo;
//    private Role role;
//
//    public static AdminOutputDTO error(String message) {
//        return AdminOutputDTO.builder().fullName(message).build();
//    }
//}


package com.frac.frac_backend.dto;

import com.frac.frac_backend.enums.Gender;
import com.frac.frac_backend.enums.Role;
import com.frac.frac_backend.entity.Admin;
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
    private String message;  // New field for success message

    // Static method to create a success response
    public static AdminOutputDTO success(String message, Admin admin) {
        return AdminOutputDTO.builder()
                .id(admin.getId())
                .fullName(admin.getFullName())
                .userName(admin.getUserName())
                .adminImage(admin.getAdminImage())
                .gender(admin.getGender())
                .email(admin.getEmail())
                .contactNo(admin.getContactNo())
                .role(admin.getRole())
                .message(message)  // Add the message to the builder
                .build();
    }

    // Error response
    public static AdminOutputDTO error(String message) {
        return AdminOutputDTO.builder()
                .fullName(message)
                .build();
    }
}