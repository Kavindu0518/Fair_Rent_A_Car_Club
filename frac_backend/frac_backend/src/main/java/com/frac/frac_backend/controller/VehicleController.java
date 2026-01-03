//package com.frac.frac_backend.controller;
//
//import com.frac.frac_backend.dto.VehicleInputDTO;
//import com.frac.frac_backend.dto.VehicleOutputDTO;
//import com.frac.frac_backend.service.VehicleService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/v1/vehicle")
//@CrossOrigin
//public class VehicleController {
//
//    @Autowired
//    private VehicleService vehicleService;
//
//    @PostMapping("/add")
//    public ResponseEntity<VehicleOutputDTO> createVehicle(@RequestBody VehicleInputDTO dto) {
//        return ResponseEntity.status(HttpStatus.CREATED)
//                .body(vehicleService.createVehicle(dto));
//    }
//
//    @GetMapping("/getAll")
//    public ResponseEntity<List<VehicleOutputDTO>> getAllVehicles() {
//        return ResponseEntity.ok(vehicleService.getAllVehicles());
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<VehicleOutputDTO> getVehicle(@PathVariable Long id) {
//        return ResponseEntity.ok(vehicleService.getVehicleById(id));
//    }
//
//    @PutMapping("/update/{id}")
//    public ResponseEntity<VehicleOutputDTO> updateVehicle(
//            @PathVariable Long id,
//            @RequestBody VehicleInputDTO dto) {
//        return ResponseEntity.ok(vehicleService.updateVehicle(id, dto));
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<String> deleteVehicle(@PathVariable Long id) {
//        vehicleService.deleteVehicle(id);
//        return ResponseEntity.ok("Vehicle deleted successfully");
//    }
//}



//package com.frac.frac_backend.controller;
//
//import com.frac.frac_backend.dto.VehicleInputDTO;
//import com.frac.frac_backend.dto.VehicleOutputDTO;
//import com.frac.frac_backend.service.VehicleService;
//import com.frac.frac_backend.enums.FuelType;
//import com.frac.frac_backend.enums.TransmissionType;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.util.List;
//import java.nio.file.Files;
//import java.nio.file.Paths;
//
//@RestController
//@RequestMapping("/api/v1/vehicle")
//@CrossOrigin
//public class VehicleController {
//
//    @Autowired
//    private VehicleService vehicleService;
//
//    @PostMapping("/add")
//    public ResponseEntity<VehicleOutputDTO> createVehicle(
//            @RequestParam("regNumber") String regNumber,
//            @RequestParam("vehicleImage") MultipartFile vehicleImage,
//            @RequestParam("makeModel") String makeModel,
//            @RequestParam("yearOfManufacture") int yearOfManufacture,
//            @RequestParam("color") String color,
//            @RequestParam("seatingCapacity") int seatingCapacity,
//            @RequestParam("fuelType") String fuelType,
//            @RequestParam("transmissionType") String transmissionType) throws IOException {
//
//        // Convert MultipartFile to String or save it to the server as required
//        String vehicleImagePath = saveImage(vehicleImage);
//
//        // Create the DTO for vehicle
//        VehicleInputDTO vehicleDTO = new VehicleInputDTO(
//                regNumber,
//                vehicleImagePath,
//                makeModel,
//                yearOfManufacture,
//                color,
//                seatingCapacity,
//                FuelType.valueOf(fuelType),
//                TransmissionType.valueOf(transmissionType)
//        );
//
//        // Save the vehicle and return the response
//        VehicleOutputDTO vehicleOutputDTO = vehicleService.createVehicle(vehicleDTO);
//        return ResponseEntity.status(HttpStatus.CREATED).body(vehicleOutputDTO);
//    }
//
//    // Image saving method (e.g., saving image path or file itself)
//    private String saveImage(MultipartFile image) throws IOException {
//        // Save the image to a location and return the file path or URL
//        String imageName = image.getOriginalFilename();
//        // Logic to save the image to your desired directory
//        Files.copy(image.getInputStream(), Paths.get("uploads/" + imageName));
//        return imageName;  // Return image path or URL as needed
//    }
//
//    @GetMapping("/getAll")
//    public ResponseEntity<List<VehicleOutputDTO>> getAllVehicles() {
//        return ResponseEntity.ok(vehicleService.getAllVehicles());
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<VehicleOutputDTO> getVehicle(@PathVariable Long id) {
//        return ResponseEntity.ok(vehicleService.getVehicleById(id));
//    }
//
//    @PutMapping("/update/{id}")
//    public ResponseEntity<VehicleOutputDTO> updateVehicle(
//            @PathVariable Long id,
//            @RequestBody VehicleInputDTO dto) {
//        return ResponseEntity.ok(vehicleService.updateVehicle(id, dto));
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<String> deleteVehicle(@PathVariable Long id) {
//        vehicleService.deleteVehicle(id);
//        return ResponseEntity.ok("Vehicle deleted successfully");
//    }
//}


//correct code with out update part

//package com.frac.frac_backend.controller;
//
//import com.frac.frac_backend.dto.VehicleInputDTO;
//import com.frac.frac_backend.dto.VehicleOutputDTO;
//import com.frac.frac_backend.service.VehicleService;
//import com.frac.frac_backend.enums.FuelType;
//import com.frac.frac_backend.enums.TransmissionType;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Paths;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/v1/vehicle")
//@CrossOrigin
//public class VehicleController {
//
//    @Autowired
//    private VehicleService vehicleService;
//
//    // POST endpoint to add a new vehicle
//    @PostMapping("/add")
//    public ResponseEntity<VehicleOutputDTO> createVehicle(
//            @RequestParam("regNumber") String regNumber,
//            @RequestParam("vehicleImage") MultipartFile vehicleImage,
//            @RequestParam("makeModel") String makeModel,
//            @RequestParam("yearOfManufacture") int yearOfManufacture,
//            @RequestParam("color") String color,
//            @RequestParam("seatingCapacity") int seatingCapacity,
//            @RequestParam("fuelType") String fuelType,
//            @RequestParam("transmissionType") String transmissionType) {
//
//        try {
//            // Save image and get the file path
//            String vehicleImagePath = saveImage(vehicleImage);
//
//            // Create DTO object for vehicle
//            VehicleInputDTO vehicleDTO = new VehicleInputDTO(
//                    regNumber,
//                    vehicleImagePath,
//                    makeModel,
//                    yearOfManufacture,
//                    color,
//                    seatingCapacity,
//                    FuelType.valueOf(fuelType), // Ensure fuelType is correct
//                    TransmissionType.valueOf(transmissionType) // Ensure transmissionType is correct
//            );
//
//            // Call service to save the vehicle and get the response
//            VehicleOutputDTO vehicleOutputDTO = vehicleService.createVehicle(vehicleDTO);
//            return ResponseEntity.status(HttpStatus.CREATED).body(vehicleOutputDTO);
//
//        } catch (IllegalArgumentException e) {
//            // If enum values are incorrect, return 400 Bad Request
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body(VehicleOutputDTO.error("Invalid fuel type or transmission type"));
//        } catch (IOException e) {
//            // If there's an issue with saving the image, return 500 Internal Server Error
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(VehicleOutputDTO.error("Error saving image"));
//        } catch (Exception e) {
//            // General error catch
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(VehicleOutputDTO.error("Internal server error"));
//        }
//    }
//
//    // Method to save the image to a directory
//    private String saveImage(MultipartFile image) throws IOException {
//        String uploadDir = "uploads/"; // Directory to save images
//        java.nio.file.Path path = Paths.get(uploadDir);
//
//        // Create the directory if it does not exist
//        if (!Files.exists(path)) {
//            Files.createDirectories(path);
//        }
//
//        // Get the image filename
//        String imageName = image.getOriginalFilename();
//
//        // Save the image to the directory
//        java.nio.file.Path filePath = Paths.get(uploadDir + imageName);
//
//        // Check if the file already exists (optional, can be removed if you want to overwrite files)
//        if (Files.exists(filePath)) {
//            throw new IOException("File already exists: " + imageName);
//        }
//
//        // Copy the image to the specified location
//        Files.copy(image.getInputStream(), filePath);
//
//        return filePath.toString(); // Return the saved file path
//    }
//
//    // GET endpoint to retrieve all vehicles
//    @GetMapping("/getAll")
//    public ResponseEntity<List<VehicleOutputDTO>> getAllVehicles() {
//        return ResponseEntity.ok(vehicleService.getAllVehicles());
//    }
//
//    // GET endpoint to retrieve a specific vehicle by ID
//    @GetMapping("/{id}")
//    public ResponseEntity<VehicleOutputDTO> getVehicle(@PathVariable Long id) {
//        return ResponseEntity.ok(vehicleService.getVehicleById(id));
//    }
//
//    // PUT endpoint to update an existing vehicle
//    @PutMapping("/update/{id}")
//    public ResponseEntity<VehicleOutputDTO> updateVehicle(
//            @PathVariable Long id,
//            @RequestBody VehicleInputDTO dto) {
//        return ResponseEntity.ok(vehicleService.updateVehicle(id, dto));
//    }
//
//    // DELETE endpoint to remove a vehicle
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<String> deleteVehicle(@PathVariable Long id) {
//        vehicleService.deleteVehicle(id);
//        return ResponseEntity.ok("Vehicle deleted successfully");
//    }
//}


//package com.frac.frac_backend.controller;
//
//import com.frac.frac_backend.dto.VehicleInputDTO;
//import com.frac.frac_backend.dto.VehicleOutputDTO;
//import com.frac.frac_backend.service.VehicleService;
//import com.frac.frac_backend.enums.FuelType;
//import com.frac.frac_backend.enums.TransmissionType;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Paths;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/v1/vehicle")
//@CrossOrigin
//public class VehicleController {
//
//    @Autowired
//    private VehicleService vehicleService;
//
//    // POST endpoint to add a new vehicle
//    @PostMapping("/add")
//    public ResponseEntity<VehicleOutputDTO> createVehicle(
//            @RequestParam("regNumber") String regNumber,
//            @RequestParam("vehicleImage") MultipartFile vehicleImage,
//            @RequestParam("makeModel") String makeModel,
//            @RequestParam("yearOfManufacture") int yearOfManufacture,
//            @RequestParam("color") String color,
//            @RequestParam("seatingCapacity") int seatingCapacity,
//            @RequestParam("fuelType") String fuelType,
//            @RequestParam("transmissionType") String transmissionType) {
//
//        try {
//            // Save image and get the file path
//            String vehicleImagePath = saveImage(vehicleImage);
//
//            // Create DTO object for vehicle
//            VehicleInputDTO vehicleDTO = new VehicleInputDTO(
//                    regNumber,
//                    vehicleImagePath,
//                    makeModel,
//                    yearOfManufacture,
//                    color,
//                    seatingCapacity,
//                    FuelType.valueOf(fuelType), // Ensure fuelType is correct
//                    TransmissionType.valueOf(transmissionType) // Ensure transmissionType is correct
//            );
//
//            // Call service to save the vehicle and get the response
//            VehicleOutputDTO vehicleOutputDTO = vehicleService.createVehicle(vehicleDTO);
//            return ResponseEntity.status(HttpStatus.CREATED).body(vehicleOutputDTO);
//
//        } catch (IllegalArgumentException e) {
//            // If enum values are incorrect, return 400 Bad Request
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body(VehicleOutputDTO.error("Invalid fuel type or transmission type"));
//        } catch (IOException e) {
//            // If there's an issue with saving the image, return 500 Internal Server Error
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(VehicleOutputDTO.error("Error saving image"));
//        } catch (Exception e) {
//            // General error catch
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(VehicleOutputDTO.error("Internal server error"));
//        }
//    }
//
//    // PUT endpoint to update an existing vehicle
//    @PutMapping("/update/{id}")
//    public ResponseEntity<VehicleOutputDTO> updateVehicle(
//            @PathVariable Long id,
//            @RequestParam("regNumber") String regNumber,
//            @RequestParam("vehicleImage") MultipartFile vehicleImage,
//            @RequestParam("makeModel") String makeModel,
//            @RequestParam("yearOfManufacture") int yearOfManufacture,
//            @RequestParam("color") String color,
//            @RequestParam("seatingCapacity") int seatingCapacity,
//            @RequestParam("fuelType") String fuelType,
//            @RequestParam("transmissionType") String transmissionType) {
//
//        try {
//            // Save image and get the file path
//            String vehicleImagePath = saveImage(vehicleImage);
//
//            // Create DTO object for vehicle
//            VehicleInputDTO vehicleDTO = new VehicleInputDTO(
//                    regNumber,
//                    vehicleImagePath,
//                    makeModel,
//                    yearOfManufacture,
//                    color,
//                    seatingCapacity,
//                    FuelType.valueOf(fuelType), // Ensure fuelType is correct
//                    TransmissionType.valueOf(transmissionType) // Ensure transmissionType is correct
//            );
//
//            // Call service to update the vehicle and get the response
//            VehicleOutputDTO vehicleOutputDTO = vehicleService.updateVehicle(id, vehicleDTO);
//            return ResponseEntity.status(HttpStatus.OK).body(vehicleOutputDTO);
//
//        } catch (IllegalArgumentException e) {
//            // If enum values are incorrect, return 400 Bad Request
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body(VehicleOutputDTO.error("Invalid fuel type or transmission type"));
//        } catch (IOException e) {
//            // If there's an issue with saving the image, return 500 Internal Server Error
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(VehicleOutputDTO.error("Error saving image"));
//        } catch (Exception e) {
//            // General error catch
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(VehicleOutputDTO.error("Internal server error"));
//        }
//    }
//
//    // Method to save the image to a directory
//    private String saveImage(MultipartFile image) throws IOException {
//        String uploadDir = "uploads/"; // Directory to save images
//        java.nio.file.Path path = Paths.get(uploadDir);
//
//        // Create the directory if it does not exist
//        if (!Files.exists(path)) {
//            Files.createDirectories(path);
//        }
//
//        // Get the image filename
//        String imageName = image.getOriginalFilename();
//
//        // Save the image to the directory
//        java.nio.file.Path filePath = Paths.get(uploadDir + imageName);
//
//        // Check if the file already exists (optional, can be removed if you want to overwrite files)
//        if (Files.exists(filePath)) {
//            throw new IOException("File already exists: " + imageName);
//        }
//
//        // Copy the image to the specified location
//        Files.copy(image.getInputStream(), filePath);
//
//        return filePath.toString(); // Return the saved file path
//    }
//
//    // DELETE endpoint to remove a vehicle
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<String> deleteVehicle(@PathVariable Long id) {
//        vehicleService.deleteVehicle(id);
//        return ResponseEntity.ok("Vehicle deleted successfully");
//    }
//
//    // GET endpoint to retrieve all vehicles
//    @GetMapping("/getAll")
//    public ResponseEntity<List<VehicleOutputDTO>> getAllVehicles() {
//        return ResponseEntity.ok(vehicleService.getAllVehicles());
//    }
//
//    // GET endpoint to retrieve a specific vehicle by ID
//    @GetMapping("/{id}")
//    public ResponseEntity<VehicleOutputDTO> getVehicle(@PathVariable Long id) {
//        return ResponseEntity.ok(vehicleService.getVehicleById(id));
//    }
//}




package com.frac.frac_backend.controller;

import com.frac.frac_backend.dto.VehicleInputDTO;
import com.frac.frac_backend.dto.VehicleOutputDTO;
import com.frac.frac_backend.service.VehicleService;
import com.frac.frac_backend.enums.FuelType;
import com.frac.frac_backend.enums.TransmissionType;
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
@RequestMapping("/api/v1/vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    // POST endpoint to add a new vehicle
    @PostMapping("/add")
    public ResponseEntity<VehicleOutputDTO> createVehicle(
            @RequestParam("regNumber") String regNumber,
            @RequestParam("vehicleImage") MultipartFile vehicleImage,
            @RequestParam("makeModel") String makeModel,
            @RequestParam("yearOfManufacture") int yearOfManufacture,
            @RequestParam("color") String color,
            @RequestParam("seatingCapacity") int seatingCapacity,
            @RequestParam("fuelType") String fuelType,
            @RequestParam("transmissionType") String transmissionType) {

        try {
            // Save image and get the file path
            String vehicleImagePath = saveImage(vehicleImage);

            // Create DTO object for vehicle
            VehicleInputDTO vehicleDTO = new VehicleInputDTO(
                    regNumber,
                    vehicleImagePath,
                    makeModel,
                    yearOfManufacture,
                    color,
                    seatingCapacity,
                    FuelType.valueOf(fuelType), // Ensure fuelType is correct
                    TransmissionType.valueOf(transmissionType) // Ensure transmissionType is correct
            );

            // Call service to save the vehicle and get the response
            VehicleOutputDTO vehicleOutputDTO = vehicleService.createVehicle(vehicleDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(vehicleOutputDTO);

        } catch (IllegalArgumentException e) {
            // If enum values are incorrect, return 400 Bad Request
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(VehicleOutputDTO.error("Invalid fuel type or transmission type"));
        } catch (IOException e) {
            // If there's an issue with saving the image, return 500 Internal Server Error
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(VehicleOutputDTO.error("Error saving image"));
        } catch (Exception e) {
            // General error catch
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(VehicleOutputDTO.error("Internal server error"));
        }
    }

    // PUT endpoint to update an existing vehicle
    @PutMapping("/update/{id}")
    public ResponseEntity<VehicleOutputDTO> updateVehicle(
            @PathVariable Long id,
            @RequestParam("regNumber") String regNumber,
            @RequestParam(value = "vehicleImage", required = false) MultipartFile vehicleImage, // Image is optional for update
            @RequestParam("makeModel") String makeModel,
            @RequestParam("yearOfManufacture") int yearOfManufacture,
            @RequestParam("color") String color,
            @RequestParam("seatingCapacity") int seatingCapacity,
            @RequestParam("fuelType") String fuelType,
            @RequestParam("transmissionType") String transmissionType) {

        try {
            // Retrieve the existing vehicle details
            VehicleOutputDTO existingVehicle = vehicleService.getVehicleById(id);

            // If a new image is uploaded, save it and update the vehicle image path
            String vehicleImagePath = existingVehicle.getVehicleImage();
            if (vehicleImage != null && !vehicleImage.isEmpty()) {
                // Save the new image and update the image path
                vehicleImagePath = saveImage(vehicleImage);
            }

            // Create DTO object for vehicle
            VehicleInputDTO vehicleDTO = new VehicleInputDTO(
                    regNumber,
                    vehicleImagePath,
                    makeModel,
                    yearOfManufacture,
                    color,
                    seatingCapacity,
                    FuelType.valueOf(fuelType), // Ensure fuelType is correct
                    TransmissionType.valueOf(transmissionType) // Ensure transmissionType is correct
            );

            // Call service to update the vehicle and get the response
            VehicleOutputDTO vehicleOutputDTO = vehicleService.updateVehicle(id, vehicleDTO);
            return ResponseEntity.status(HttpStatus.OK).body(vehicleOutputDTO);

        } catch (IllegalArgumentException e) {
            // If enum values are incorrect, return 400 Bad Request
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(VehicleOutputDTO.error("Invalid fuel type or transmission type"));
        } catch (IOException e) {
            // If there's an issue with saving the image, return 500 Internal Server Error
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(VehicleOutputDTO.error("Error saving image"));
        } catch (Exception e) {
            // General error catch
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(VehicleOutputDTO.error("Internal server error"));
        }
    }

    // Method to save the image to a directory
    private String saveImage(MultipartFile image) throws IOException {
        String uploadDir = "uploads/vehicles/vehicle_"; // Directory to save images
        java.nio.file.Path path = Paths.get(uploadDir);

        // Create the directory if it does not exist
        if (!Files.exists(path)) {
            Files.createDirectories(path);
        }

//        // Get the image filename
//        String imageName = image.getOriginalFilename();
//
//        // Save the image to the directory
//        java.nio.file.Path filePath = Paths.get(uploadDir + imageName);
//
//        // Check if the file already exists (optional, can be removed if you want to overwrite files)
//        if (Files.exists(filePath)) {
//            throw new IOException("File already exists: " + imageName);
//        }
//
//        // Copy the image to the specified location
//        Files.copy(image.getInputStream(), filePath);
//
//        return filePath.toString(); // Return the saved file path

        // Get the original image filename
        String imageName = image.getOriginalFilename();

        // Get the file extension (e.g., .jpg, .png)
        String fileExtension = imageName.substring(imageName.lastIndexOf("."));

        // Generate a unique, short image name using UUID
        String shortImageName = UUID.randomUUID().toString() + fileExtension;

        // Create the path with the new image name
        java.nio.file.Path filePath = Paths.get(uploadDir + shortImageName);

        // Save the image to the directory
        Files.copy(image.getInputStream(), filePath);

        return filePath.toString(); // Return the saved file path
    }

    // DELETE endpoint to remove a vehicle
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteVehicle(@PathVariable Long id) {
        vehicleService.deleteVehicle(id);
        return ResponseEntity.ok("Vehicle deleted successfully");
    }

    // GET endpoint to retrieve all vehicles
    @GetMapping("/getAll")
    public ResponseEntity<List<VehicleOutputDTO>> getAllVehicles() {
        return ResponseEntity.ok(vehicleService.getAllVehicles());
    }

    // GET endpoint to retrieve a specific vehicle by ID
    @GetMapping("/{id}")
    public ResponseEntity<VehicleOutputDTO> getVehicle(@PathVariable Long id) {
        return ResponseEntity.ok(vehicleService.getVehicleById(id));
    }
}
