package com.frac.frac_backend.service.impl;

import com.frac.frac_backend.dto.AdminLoginDTO;
import com.frac.frac_backend.dto.AdminInputDTO;
import com.frac.frac_backend.dto.AdminOutputDTO;
import com.frac.frac_backend.entity.Admin;
import com.frac.frac_backend.repository.AdminRepository;
import com.frac.frac_backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public AdminOutputDTO loginAdmin(AdminLoginDTO loginDTO) {
        Admin admin = adminRepository.findByEmailIgnoreCase(loginDTO.getEmail())
                .orElseThrow(() -> new RuntimeException("Admin not found"));

        // Check if the password matches
        if (!passwordEncoder.matches(loginDTO.getPassword(), admin.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        // Return the admin details along with a success message
        return AdminOutputDTO.success("Login successful", admin);

    }

    @Override
    public AdminOutputDTO createAdmin(AdminInputDTO dto) {
        if (adminRepository.existsByEmailIgnoreCase(dto.getEmail())) {
            throw new RuntimeException("Admin with email already exists");
        }

        Admin admin = mapToEntity(dto);
        return mapToOutputDTO(adminRepository.save(admin));
    }

    @Override
    public AdminOutputDTO updateAdmin(Long id, AdminInputDTO dto) {
        Admin existingAdmin = adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found"));

        existingAdmin.setFullName(dto.getFullName());
        existingAdmin.setUserName(dto.getUserName());
        existingAdmin.setPassword(dto.getPassword());
        existingAdmin.setAdminImage(dto.getAdminImage());
        existingAdmin.setGender(dto.getGender());
        existingAdmin.setEmail(dto.getEmail());
        existingAdmin.setContactNo(dto.getContactNo());
        existingAdmin.setRole(dto.getRole());

        return mapToOutputDTO(adminRepository.save(existingAdmin));
    }

    @Override
    public AdminOutputDTO getAdminById(Long id) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found"));
        return mapToOutputDTO(admin);
    }

    @Override
    public List<AdminOutputDTO> getAllAdmins() {
        return adminRepository.findAll()
                .stream()
                .map(this::mapToOutputDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }

    private Admin mapToEntity(AdminInputDTO dto) {
        return Admin.builder()
                .fullName(dto.getFullName())
                .userName(dto.getUserName())
                .password(dto.getPassword())
                .adminImage(dto.getAdminImage())
                .gender(dto.getGender())
                .email(dto.getEmail())
                .contactNo(dto.getContactNo())
                .role(dto.getRole())
                .build();
    }

    private AdminOutputDTO mapToOutputDTO(Admin admin) {
        return AdminOutputDTO.builder()
                .id(admin.getId())
                .fullName(admin.getFullName())
                .userName(admin.getUserName())
                .adminImage(admin.getAdminImage())
                .gender(admin.getGender())
                .email(admin.getEmail())
                .contactNo(admin.getContactNo())
                .role(admin.getRole())
                .build();
    }
}
