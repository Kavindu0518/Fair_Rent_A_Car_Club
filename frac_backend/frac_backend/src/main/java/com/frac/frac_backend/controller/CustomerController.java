//package com.frac.frac_backend.controller;
//
//import com.frac.frac_backend.dto.*;
//import com.frac.frac_backend.enums.Gender;
//import com.frac.frac_backend.service.CustomerService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.time.LocalDate;
//import java.util.UUID;
////import java.nio.file.StandardCopyOption;
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Paths;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/v1/customer")
//@CrossOrigin
//public class CustomerController {
//
//    @Autowired
//    private CustomerService customerService;
//
//    @PostMapping("/login")
//    public ResponseEntity<?> loginCustomer(@RequestBody CustomerLoginDTO loginDTO) {
//        try {
//            CustomerOutputDTO customerOutputDTO = customerService.loginCustomer(loginDTO);
//            return ResponseEntity.ok(customerOutputDTO);
//        } catch (RuntimeException e) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//                    .body("Invalid email or password");
//        }
//    }
//
//    // POST endpoint to add a new customer
//    @PostMapping("/add")
//    public ResponseEntity<CustomerOutputDTO> createCustomer(
////            @RequestParam("customerName") String customerName,
//            @RequestParam("firstName") String firstName,
//            @RequestParam("lastName") String lastName,
////            @RequestParam("userName") String userName,
//            @RequestParam("password") String password,
//            @RequestParam("customerImage") MultipartFile customerImage,
//            @RequestParam("gender") String gender,
////            @RequestParam("age") int age,
//            @RequestParam("birthday") LocalDate birthday,
//            @RequestParam("nicNumber") String nicNumber,
//            @RequestParam("contactNumber") String contactNumber,
//            @RequestParam("email") String email,
//            @RequestParam("country") String country
////            @RequestParam("address") String address
//    ){
//        try {
//            // Save image and get the file path
//            String customerImagePath = saveImage(customerImage);
//
//            // Create DTO object for customer
//            CustomerInputDTO customerDTO = new CustomerInputDTO(
////                    customerName,
//                    firstName,
//                    lastName,
////                    userName,
//                    password,
//                    customerImagePath,
//                    Gender.valueOf(gender),
////                    age,
//                    birthday,
//                    nicNumber,
//                    contactNumber,
//                    email,
//                    country
////                    address
//            );
//
//            // Call service to save the customer and get the response
//            CustomerOutputDTO customerOutputDTO = customerService.createCustomer(customerDTO);
//            return ResponseEntity.status(HttpStatus.CREATED).body(customerOutputDTO);
//
//        } catch (IOException e) {
//            // If there's an issue with saving the image, return 500 Internal Server Error
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(CustomerOutputDTO.error("Error saving image"));
//        } catch (Exception e) {
//            // General error catch
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(CustomerOutputDTO.error("Internal server error"));
//        }
//    }
//
//    @PutMapping("/update/{id}")
//    public ResponseEntity<CustomerOutputDTO> updateCustomer(
//            @PathVariable Long id,
////            @RequestParam("customerName") String customerName,
//            @RequestParam("firstName") String firstName,
//            @RequestParam("lastName") String lastName,
////            @RequestParam("userName") String userName,
//            @RequestParam("password") String password,
//            @RequestParam(value = "customerImage", required = false) MultipartFile customerImage,
//            @RequestParam("gender") String gender,
////            @RequestParam("age") int age,
//            @RequestParam(value = "birthday", required = false) LocalDate birthday,
//            @RequestParam("nicNumber") String nicNumber,
//            @RequestParam("contactNumber") String contactNumber,
//            @RequestParam("email") String email,
//            @RequestParam("country") String country
////            @RequestParam("address") String address
//    ){
//
//        try {
//            // Retrieve the existing customer details
//            CustomerOutputDTO existingCustomer = customerService.getCustomerById(id);
//
//            // Get the current image path (from the existing customer)
//            String existingImagePath = existingCustomer.getCustomerImage();
//
//            // If a new image is uploaded, save it and update the customer image path
//            if (customerImage != null && !customerImage.isEmpty()) {
//                // Save the new image and update the image path
//                String newImagePath = saveImage(customerImage);
//
//                // If the new image is the same as the existing one, avoid saving it again
//                if (newImagePath.equals(existingImagePath)) {
//                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                            .body(CustomerOutputDTO.error("You have selected the same image"));
//                }
//
//                existingImagePath = newImagePath;  // Update the image path
//            }
//
//            // Create DTO object for customer with updated data
//            CustomerInputDTO customerDTO = new CustomerInputDTO(
////                    customerName,
//                    firstName,
//                    lastName,
////                    userName,
//                    password,
//                    existingImagePath,
//                    Gender.valueOf(gender),
////                    age,
//                    birthday,
//                    nicNumber,
//                    contactNumber,
//                    email,
//                    country
////                    address
//            );
//
//            // Call service to update the customer and get the response
//            CustomerOutputDTO customerOutputDTO = customerService.updateCustomer(id, customerDTO);
//            return ResponseEntity.status(HttpStatus.OK).body(customerOutputDTO);
//
//        } catch (IOException e) {
//            // If there's an issue with saving the image, return 500 Internal Server Error
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(CustomerOutputDTO.error("Error saving image"));
//        } catch (Exception e) {
//            // General error catch
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(CustomerOutputDTO.error("Internal server error"));
//        }
//    }
//
//    private String saveImage(MultipartFile image) throws IOException {
//        String uploadDir = "uploads/customers/customer_"; // Directory to save images
//        java.nio.file.Path path = Paths.get(uploadDir);
//
//        // Create the directory if it does not exist
//        if (!Files.exists(path)) {
//            Files.createDirectories(path);
//        }
//
//        // Get the original image filename
//        String imageName = image.getOriginalFilename();
//
//        // Get the file extension (e.g., .jpg, .png)
//        String fileExtension = imageName.substring(imageName.lastIndexOf("."));
//
//        // Generate a unique, short image name using UUID
//        String shortImageName = UUID.randomUUID().toString() + fileExtension;
//
//        // Create the path with the new image name
//        java.nio.file.Path filePath = Paths.get(uploadDir + shortImageName);
//
//        // Save the image to the directory
//        Files.copy(image.getInputStream(), filePath);
//
//        return filePath.toString(); // Return the saved file path
//    }
//
//    // DELETE endpoint to remove a customer
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<String> deleteCustomer(@PathVariable Long id) {
//        customerService.deleteCustomer(id);
//        return ResponseEntity.ok("Customer deleted successfully");
//    }
//
//    // GET endpoint to retrieve all customers
//    @GetMapping("/getAll")
//    public ResponseEntity<List<CustomerOutputDTO>> getAllCustomers() {
//        return ResponseEntity.ok(customerService.getAllCustomers());
//    }
//
//    // GET endpoint to retrieve a specific customer by ID
//    @GetMapping("/{id}")
//    public ResponseEntity<CustomerOutputDTO> getCustomer(@PathVariable Long id) {
//        return ResponseEntity.ok(customerService.getCustomerById(id));
//    }
//}



package com.frac.frac_backend.controller;

import com.frac.frac_backend.dto.*;
import com.frac.frac_backend.enums.Gender;
import com.frac.frac_backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.UUID;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/v1/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/login")
    public ResponseEntity<?> loginCustomer(@RequestBody CustomerLoginDTO loginDTO) {
        try {
            CustomerOutputDTO customerOutputDTO = customerService.loginCustomer(loginDTO);
            return ResponseEntity.ok(customerOutputDTO);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> createCustomer(  // Changed return type to <?> to allow error messages
                                              @RequestParam("firstName") String firstName,
                                              @RequestParam("lastName") String lastName,
                                              @RequestParam("password") String password,
                                              @RequestParam("customerImage") MultipartFile customerImage,
                                              @RequestParam("gender") String gender,
                                              @RequestParam("birthday") LocalDate birthday,
                                              @RequestParam("nicNumber") String nicNumber,
                                              @RequestParam("contactNumber") String contactNumber,
                                              @RequestParam("email") String email,
                                              @RequestParam("country") String country
    ){
        try {
            // Save image and get the file path
            String customerImagePath = saveImage(customerImage);

            // Create DTO object for customer
            CustomerInputDTO customerDTO = new CustomerInputDTO(
                    firstName,
                    lastName,
                    password,
                    customerImagePath,
                    Gender.valueOf(gender),
                    birthday,
                    nicNumber,
                    contactNumber,
                    email,
                    country
            );

            // Call service to save the customer and get the response
            CustomerOutputDTO customerOutputDTO = customerService.createCustomer(customerDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(customerOutputDTO);

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error saving image: " + e.getMessage());
        } catch (RuntimeException e) {
            // This catches the specific duplicate field exceptions
            e.printStackTrace();

            // Return the specific error message from the service
            if (e.getMessage().contains("email")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("This email address is already registered. Please use a different email.");
            } else if (e.getMessage().contains("NIC") || e.getMessage().contains("PASSPORT")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("This NIC/Passport number is already registered. Please use a different one.");
            } else if (e.getMessage().contains("contact")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("This contact number is already registered. Please use a different one.");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(e.getMessage());
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal server error: " + e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCustomer(  // Changed return type to <?>
                                              @PathVariable Long id,
                                              @RequestParam("firstName") String firstName,
                                              @RequestParam("lastName") String lastName,
                                              @RequestParam("password") String password,
                                              @RequestParam(value = "customerImage", required = false) MultipartFile customerImage,
                                              @RequestParam("gender") String gender,
                                              @RequestParam(value = "birthday", required = false) LocalDate birthday,
                                              @RequestParam("nicNumber") String nicNumber,
                                              @RequestParam("contactNumber") String contactNumber,
                                              @RequestParam("email") String email,
                                              @RequestParam("country") String country
    ){
        try {
            // Retrieve the existing customer details
            CustomerOutputDTO existingCustomer = customerService.getCustomerById(id);

            // Get the current image path (from the existing customer)
            String existingImagePath = existingCustomer.getCustomerImage();

            // If a new image is uploaded, save it and update the customer image path
            if (customerImage != null && !customerImage.isEmpty()) {
                String newImagePath = saveImage(customerImage);

                if (newImagePath.equals(existingImagePath)) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                            .body("You have selected the same image");
                }

                existingImagePath = newImagePath;
            }

            CustomerInputDTO customerDTO = new CustomerInputDTO(
                    firstName,
                    lastName,
                    password,
                    existingImagePath,
                    Gender.valueOf(gender),
                    birthday,
                    nicNumber,
                    contactNumber,
                    email,
                    country
            );

            CustomerOutputDTO customerOutputDTO = customerService.updateCustomer(id, customerDTO);
            return ResponseEntity.status(HttpStatus.OK).body(customerOutputDTO);

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error saving image: " + e.getMessage());
        } catch (RuntimeException e) {
            e.printStackTrace();

            // Handle duplicate field exceptions during update
            if (e.getMessage().contains("email")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("This email address is already registered. Please use a different email.");
            } else if (e.getMessage().contains("NIC") || e.getMessage().contains("PASSPORT")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("This NIC/Passport number is already registered. Please use a different one.");
            } else if (e.getMessage().contains("contact")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("This contact number is already registered. Please use a different one.");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(e.getMessage());
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal server error: " + e.getMessage());
        }
    }

    private String saveImage(MultipartFile image) throws IOException {
        String uploadDir = "uploads/customers/customer_";
        java.nio.file.Path path = Paths.get(uploadDir);

        if (!Files.exists(path)) {
            Files.createDirectories(path);
        }

        String imageName = image.getOriginalFilename();
        String fileExtension = imageName.substring(imageName.lastIndexOf("."));
        String shortImageName = UUID.randomUUID().toString() + fileExtension;
        java.nio.file.Path filePath = Paths.get(uploadDir + shortImageName);
        Files.copy(image.getInputStream(), filePath);

        return filePath.toString();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
        return ResponseEntity.ok("Customer deleted successfully");
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<CustomerOutputDTO>> getAllCustomers() {
        return ResponseEntity.ok(customerService.getAllCustomers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerOutputDTO> getCustomer(@PathVariable Long id) {
        return ResponseEntity.ok(customerService.getCustomerById(id));
    }
}