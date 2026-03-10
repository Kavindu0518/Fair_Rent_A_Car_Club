//
//package com.frac.frac_backend.controller;
//
//import com.frac.frac_backend.dto.BankTransferInputDTO;
//import com.frac.frac_backend.dto.BankTransferOutputDTO;
//import com.frac.frac_backend.service.BankTransferService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//
//@RestController
//@RequestMapping("/api/v1/banktransfer")
//@CrossOrigin
//public class BankTransferController {
//
//    @Autowired
//    private BankTransferService bankTransferService;
//
//    // POST: Create a new BankTransfer
//    @PostMapping("/add")
//    public ResponseEntity<BankTransferOutputDTO> createBankTransfer(
//            @RequestParam("bookingId") Long bookingId, // Booking ID passed as Long
//            @RequestParam("bankName") String bankName,
//            @RequestParam("accountNumber") String accountNumber,
//            @RequestParam("accountHolder") String accountHolder,
//            @RequestParam("transferReference") String transferReference, // transferReference as String
//            @RequestParam("paymentSlip") MultipartFile paymentSlip) { // File parameter
//
//        try {
//            // Save the payment slip
//            String paymentSlipPath = savePaymentSlip(paymentSlip);
//
//            // Create DTO object for bank transfer
//            BankTransferInputDTO bankTransferInputDTO = new BankTransferInputDTO(
//                    bookingId,
//                    bankName,
//                    accountNumber,
//                    accountHolder,
//                    transferReference,
//                    paymentSlipPath,
//                    "Pending"  // Initial status is "Pending"
//            );
//
//            BankTransferOutputDTO savedBankTransfer = bankTransferService.createBankTransfer(bankTransferInputDTO);
//            return ResponseEntity.status(HttpStatus.CREATED).body(savedBankTransfer);
//
//        } catch (IOException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(null);
//        }
//    }
//
//    // Method to save the payment slip (image/pdf)
//    private String savePaymentSlip(MultipartFile paymentSlip) throws IOException {
//        String uploadDir = "uploads/payment_slips/";
//        java.nio.file.Path path = java.nio.file.Paths.get(uploadDir);
//
//        if (!java.nio.file.Files.exists(path)) {
//            java.nio.file.Files.createDirectories(path);
//        }
//
//        String originalFileName = paymentSlip.getOriginalFilename();
//        String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
//
//        String shortImageName = java.util.UUID.randomUUID().toString() + fileExtension;
//
//        java.nio.file.Path filePath = java.nio.file.Paths.get(uploadDir + shortImageName);
//
//        java.nio.file.Files.copy(paymentSlip.getInputStream(), filePath);
//
//        return filePath.toString();  // Save the file path in the database
//    }
//}



package com.frac.frac_backend.controller;

import com.frac.frac_backend.dto.BankTransferInputDTO;
import com.frac.frac_backend.dto.BankTransferOutputDTO;
import com.frac.frac_backend.service.BankTransferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/banktransfer")
@CrossOrigin
public class BankTransferController {

    @Autowired
    private BankTransferService bankTransferService;

    // POST: Create a new BankTransfer
    @PostMapping("/add")
    public ResponseEntity<BankTransferOutputDTO> createBankTransfer(
            @RequestParam("bookingId") Long bookingId, // Booking ID passed as Long
            @RequestParam("bankName") String bankName,
            @RequestParam("accountNumber") String accountNumber,
            @RequestParam("accountHolder") String accountHolder,
            @RequestParam("transferReference") String transferReference, // transferReference as String
            @RequestParam("paymentSlip") MultipartFile paymentSlip) { // File parameter

        try {
            // Save the payment slip
            String paymentSlipPath = savePaymentSlip(paymentSlip);

            // Create DTO object for bank transfer
            BankTransferInputDTO bankTransferInputDTO = new BankTransferInputDTO(
                    bookingId,
                    bankName,
                    accountNumber,
                    accountHolder,
                    transferReference,
                    paymentSlipPath,
                    "Pending"  // Initial status is "Pending"
            );

            BankTransferOutputDTO savedBankTransfer = bankTransferService.createBankTransfer(bankTransferInputDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedBankTransfer);

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    // PUT: Update the status of a BankTransfer
    @PutMapping("/updateStatus/{id}")
    public ResponseEntity<BankTransferOutputDTO> updateBankTransferStatus(
            @PathVariable Long id, @RequestParam("status") String status) {

        BankTransferOutputDTO updatedBankTransfer = bankTransferService.updateBankTransferStatus(id, status);
        return ResponseEntity.status(HttpStatus.OK).body(updatedBankTransfer);
    }

    // GET: Get all BankTransfers
    @GetMapping("/getAll")
    public ResponseEntity<List<BankTransferOutputDTO>> getAllBankTransfers() {
        List<BankTransferOutputDTO> bankTransfers = bankTransferService.getAllBankTransfers();
        return ResponseEntity.status(HttpStatus.OK).body(bankTransfers);
    }

    // GET: Get BankTransfer by ID
    @GetMapping("/{id}")
    public ResponseEntity<BankTransferOutputDTO> getBankTransferById(@PathVariable Long id) {
        BankTransferOutputDTO bankTransfer = bankTransferService.getBankTransferById(id);
        return ResponseEntity.status(HttpStatus.OK).body(bankTransfer);
    }

    // DELETE: Delete a BankTransfer
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBankTransfer(@PathVariable Long id) {
        bankTransferService.deleteBankTransfer(id);
        return ResponseEntity.status(HttpStatus.OK).body("BankTransfer deleted successfully");
    }

    // Method to save the payment slip (image/pdf)
    private String savePaymentSlip(MultipartFile paymentSlip) throws IOException {
        String uploadDir = "uploads/payment_slips/";
        java.nio.file.Path path = java.nio.file.Paths.get(uploadDir);

        if (!java.nio.file.Files.exists(path)) {
            java.nio.file.Files.createDirectories(path);
        }

        String originalFileName = paymentSlip.getOriginalFilename();
        String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));

        String shortImageName = java.util.UUID.randomUUID().toString() + fileExtension;

        java.nio.file.Path filePath = java.nio.file.Paths.get(uploadDir + shortImageName);

        java.nio.file.Files.copy(paymentSlip.getInputStream(), filePath);

        return filePath.toString();  // Save the file path in the database
    }
}