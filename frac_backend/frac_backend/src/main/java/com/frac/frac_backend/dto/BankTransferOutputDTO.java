////package com.frac.frac_backend.dto;
////
////import lombok.*;
////
////@Data
////@AllArgsConstructor
////@NoArgsConstructor
////@Builder
////public class BankTransferOutputDTO {
////
////    private Long id;
////    private Long bookingId;
////    private String bankName;
////    private String accountNumber;
////    private String accountHolder;
////    private String transferReference;
////    private String paymentSlip;  // URL or file name of the payment slip
////
////    private String status;      // Payment status
////
////    // Error message (optional)
////    private String errorMessage;
////
////    public static BankTransferOutputDTO error(String errorMessage) {
////        return BankTransferOutputDTO.builder()
////                .errorMessage(errorMessage)
////                .build();
////    }
////}
//
//
package com.frac.frac_backend.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BankTransferOutputDTO {

    private Long id;
    private Long bookingId;
    private String bankName;
    private String accountNumber;
    private String accountHolder;
    private String transferReference;
    private String paymentSlip;  // URL or file name of the payment slip
    private String status;      // Payment status

    private String errorMessage;

    // Add a constructor with all parameters to match the arguments passed
    public BankTransferOutputDTO(Long id, Long bookingId, String bankName, String accountNumber,
                                 String accountHolder, String transferReference, String paymentSlip,
                                 String status) {
        this.id = id;
        this.bookingId = bookingId;
        this.bankName = bankName;
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.transferReference = transferReference;
        this.paymentSlip = paymentSlip;
        this.status = status;
    }

    public static BankTransferOutputDTO error(String errorMessage) {
        return BankTransferOutputDTO.builder()
                .errorMessage(errorMessage)
                .build();
    }
}


//package com.frac.frac_backend.dto;
//
//import lombok.*;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@Builder
//public class BankTransferOutputDTO {
//
//    private Long id;
//    private Long bookingId;   // We can still return booking ID in the response
//    private String bankName;
//    private String accountNumber;
//    private String accountHolder;
//    private String transferReference;
//    private String paymentSlip;  // URL or file name of the payment slip
//    private String status;      // Payment status
//
//    private String errorMessage;
//
//    public static BankTransferOutputDTO error(String errorMessage) {
//        return BankTransferOutputDTO.builder()
//                .errorMessage(errorMessage)
//                .build();
//    }
//}