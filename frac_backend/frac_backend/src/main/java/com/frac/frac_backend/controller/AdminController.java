package com.frac.frac_backend.controller;

import com.frac.frac_backend.dto.AdminInputDTO;
import com.frac.frac_backend.dto.AdminOutputDTO;
import com.frac.frac_backend.enums.Gender;
import com.frac.frac_backend.enums.Role;
import com.frac.frac_backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService adminService;

    // POST endpoint to add a new admin
    @PostMapping("/add")
    public ResponseEntity<AdminOutputDTO> createAdmin(
            @RequestParam("fullName") String fullName,
            @RequestParam("userName") String userName,
            @RequestParam("password") String password,
            @RequestParam("adminImage") MultipartFile adminImage,
            @RequestParam("gender") String gender,
            @RequestParam("email") String email,
            @RequestParam("contactNo") String contactNo,
            @RequestParam("role") String role) {

        try {
            // Save image and get the file path
            String adminImagePath = saveImage(adminImage);

            // Create DTO object for admin
            AdminInputDTO adminDTO = new AdminInputDTO(
                    fullName,
                    userName,
                    password,
                    adminImagePath,
                    Gender.valueOf(gender),
                    email,
                    contactNo,
                    Role.valueOf(role)
            );

            // Call service to save the admin and get the response
            AdminOutputDTO adminOutputDTO = adminService.createAdmin(adminDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(adminOutputDTO);

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(AdminOutputDTO.error("Error saving image"));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(AdminOutputDTO.error("Internal server error"));
        }
    }

    private String saveImage(MultipartFile image) throws IOException {
        String uploadDir = "uploads/admins/admin_"; // Directory to save images
        java.nio.file.Path path = Paths.get(uploadDir);

        // Create the directory if it does not exist
        if (!Files.exists(path)) {
            Files.createDirectories(path);
        }

        // Get the original image filename
        String imageName = image.getOriginalFilename();
        String fileExtension = imageName.substring(imageName.lastIndexOf("."));
        String shortImageName = UUID.randomUUID().toString() + fileExtension;
        java.nio.file.Path filePath = Paths.get(uploadDir + shortImageName);
        Files.copy(image.getInputStream(), filePath);

        return filePath.toString(); // Return the saved file path
    }

//    @PutMapping("/update/{id}")
//    public ResponseEntity<AdminOutputDTO> updateAdmin(@PathVariable Long id, @RequestBody AdminInputDTO adminInputDTO) {
//        return ResponseEntity.ok(adminService.updateAdmin(id, adminInputDTO));
//    }

    @PutMapping("/update/{id}")
    public ResponseEntity<AdminOutputDTO> updateAdmin(
            @PathVariable Long id,
            @RequestParam("fullName") String fullName,
            @RequestParam("userName") String userName,
            @RequestParam("password") String password,
            @RequestParam(value = "adminImage", required = false) MultipartFile adminImage,
            @RequestParam("gender") String gender,
            @RequestParam("email") String email,
            @RequestParam("contactNo") String contactNo,
            @RequestParam("role") String role) {

        try {
            // Retrieve the existing admin details
            AdminOutputDTO existingAdmin = adminService.getAdminById(id);

            // Get the current image path (from the existing admin)
            String existingImagePath = existingAdmin.getAdminImage();

            // If a new image is uploaded, save it and update the admin image path
            if (adminImage != null && !adminImage.isEmpty()) {
                // Save the new image and update the image path
                String newImagePath = saveImage(adminImage);

                // If the new image is the same as the existing one, avoid saving it again
                if (newImagePath.equals(existingImagePath)) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                            .body(AdminOutputDTO.error("You have selected the same image"));
                }

                existingImagePath = newImagePath;  // Update the image path
            }

            // Create DTO object for admin with updated data
            AdminInputDTO adminDTO = new AdminInputDTO(
                    fullName,
                    userName,
                    password,
                    existingImagePath,
                    Gender.valueOf(gender),
                    email,
                    contactNo,
                    Role.valueOf(role)
            );

            // Call service to update the admin and get the response
            AdminOutputDTO adminOutputDTO = adminService.updateAdmin(id, adminDTO);
            return ResponseEntity.status(HttpStatus.OK).body(adminOutputDTO);

        } catch (IOException e) {
            // If there's an issue with saving the image, return 500 Internal Server Error
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(AdminOutputDTO.error("Error saving image"));
        } catch (Exception e) {
            // General error catch
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(AdminOutputDTO.error("Internal server error"));
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<AdminOutputDTO> getAdmin(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getAdminById(id));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<AdminOutputDTO>> getAllAdmins() {
        return ResponseEntity.ok(adminService.getAllAdmins());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.ok("Admin deleted successfully");
    }
}
