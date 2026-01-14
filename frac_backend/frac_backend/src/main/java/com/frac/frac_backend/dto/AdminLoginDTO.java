package com.frac.frac_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AdminLoginDTO {
    private String email;
    private String password;
}
