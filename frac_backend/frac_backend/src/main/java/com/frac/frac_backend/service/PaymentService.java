package com.frac.frac_backend.service;

import com.frac.frac_backend.dto.PaymentInputDTO;
import com.frac.frac_backend.dto.PaymentOutputDTO;

public interface PaymentService {
    PaymentOutputDTO createPaymentAndReceipt(PaymentInputDTO dto);
    byte[] downloadReceiptPdf(Long paymentId);
    PaymentOutputDTO getPaymentByBookingId(Long bookingId);
}