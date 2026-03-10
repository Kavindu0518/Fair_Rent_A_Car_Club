package com.frac.frac_backend.dto;

import com.frac.frac_backend.enums.PaymentMethod;
import com.frac.frac_backend.enums.PaymentStatus;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentOutputDTO {

    private Long id;
    private Long bookingId;

    private double amount;
    private String currency;

    private LocalDateTime paidAt;

    private PaymentMethod paymentMethod;
    private PaymentStatus paymentStatus;

    private String maskedCardNumber;
    private String cardLast4;
    private String cardBrand;

    private String paymentReference;

    private boolean hasPdf;
}