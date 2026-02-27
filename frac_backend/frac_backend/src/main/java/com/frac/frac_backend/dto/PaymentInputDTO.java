package com.frac.frac_backend.dto;

import com.frac.frac_backend.enums.PaymentMethod;
import com.frac.frac_backend.enums.PaymentStatus;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentInputDTO {

    private Long bookingId;

    private double amount;
    private String currency;

    private PaymentMethod paymentMethod;
    private PaymentStatus paymentStatus;

    private String maskedCardNumber; // optional (only if card)
    private String cardLast4;
    private String cardBrand;

    private String paymentReference;
}