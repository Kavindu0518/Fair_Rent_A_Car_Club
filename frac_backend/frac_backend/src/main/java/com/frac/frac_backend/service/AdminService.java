package com.frac.frac_backend.service;

import com.frac.frac_backend.dto.AdminLoginDTO;
import com.frac.frac_backend.dto.AdminInputDTO;
import com.frac.frac_backend.dto.AdminOutputDTO;
import java.util.List;

public interface AdminService {

    AdminOutputDTO loginAdmin(AdminLoginDTO loginDTO);
    AdminOutputDTO createAdmin(AdminInputDTO dto);
    AdminOutputDTO updateAdmin(Long id, AdminInputDTO dto);
    AdminOutputDTO getAdminById(Long id);
    List<AdminOutputDTO> getAllAdmins();
    void deleteAdmin(Long id);
}
