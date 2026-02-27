//package com.frac.frac_backend.dto;
//
//import lombok.*;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class BankTransferInputDTO {
//
//    private Long bookingId;
//    private String bankName;
//    private String accountNumber;
//    private String accountHolder;
//    private String transferReference;
//    private String paymentSlip;  // Payment Slip path
//
//    private String status;      // Payment status (e.g., "Pending", "Verified")
//}


package com.frac.frac_backend.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BankTransferInputDTO {

    private Long bookingId;  // Booking ID
    private String bankName;
    private String accountNumber;
    private String accountHolder;
    private String transferReference;
    private String paymentSlip;  // Payment Slip path
    private String status;      // Payment status
}