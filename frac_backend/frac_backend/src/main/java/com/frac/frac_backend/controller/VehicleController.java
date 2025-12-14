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
import java.util.List;

@RestController
@RequestMapping("/api/v1/vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping("/add")
    public ResponseEntity<VehicleOutputDTO> createVehicle(
            @RequestParam("regNumber") String regNumber,
            @RequestParam("vehicleImage") MultipartFile vehicleImage,
            @RequestParam("makeModel") String makeModel,
            @RequestParam("yearOfManufacture") int yearOfManufacture,
            @RequestParam("color") String color,
            @RequestParam("seatingCapacity") int seatingCapacity,
            @RequestParam("fuelType") String fuelType,
            @RequestParam("transmissionType") String transmissionType) throws IOException {

        // Convert MultipartFile to String or save it to the server as required
        String vehicleImagePath = saveImage(vehicleImage);

        // Create the DTO for vehicle
        VehicleInputDTO vehicleDTO = new VehicleInputDTO(
                regNumber,
                vehicleImagePath,
                makeModel,
                yearOfManufacture,
                color,
                seatingCapacity,
                FuelType.valueOf(fuelType),
                TransmissionType.valueOf(transmissionType)
        );

        // Save the vehicle and return the response
        VehicleOutputDTO vehicleOutputDTO = vehicleService.createVehicle(vehicleDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(vehicleOutputDTO);
    }

    // Image saving method (e.g., saving image path or file itself)
    private String saveImage(MultipartFile image) throws IOException {
        // Save the image to a location and return the file path or URL
        String imageName = image.getOriginalFilename();
        // Logic to save the image to your desired directory
        // e.g., Files.copy(image.getInputStream(), Paths.get("uploads/" + imageName));
        return imageName;  // Return image path or URL as needed
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<VehicleOutputDTO>> getAllVehicles() {
        return ResponseEntity.ok(vehicleService.getAllVehicles());
    }

    @GetMapping("/{id}")
    public ResponseEntity<VehicleOutputDTO> getVehicle(@PathVariable Long id) {
        return ResponseEntity.ok(vehicleService.getVehicleById(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<VehicleOutputDTO> updateVehicle(
            @PathVariable Long id,
            @RequestBody VehicleInputDTO dto) {
        return ResponseEntity.ok(vehicleService.updateVehicle(id, dto));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteVehicle(@PathVariable Long id) {
        vehicleService.deleteVehicle(id);
        return ResponseEntity.ok("Vehicle deleted successfully");
    }
}
