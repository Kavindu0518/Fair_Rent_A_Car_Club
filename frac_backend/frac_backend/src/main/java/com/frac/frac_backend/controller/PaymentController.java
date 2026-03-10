package com.frac.frac_backend.controller;

import com.frac.frac_backend.dto.PaymentInputDTO;
import com.frac.frac_backend.dto.PaymentOutputDTO;
import com.frac.frac_backend.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/payment")
@CrossOrigin
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    // ✅ Create payment + auto-generate PDF receipt and save it
    @PostMapping("/add")
    public ResponseEntity<PaymentOutputDTO> createPayment(@RequestBody PaymentInputDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(paymentService.createPaymentAndReceipt(dto));
    }

    // ✅ Download PDF by paymentId
    @GetMapping("/{paymentId}/receipt")
    public ResponseEntity<byte[]> downloadReceipt(@PathVariable Long paymentId) {
        byte[] pdf = paymentService.downloadReceiptPdf(paymentId);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDisposition(ContentDisposition
                .attachment()
                .filename("receipt_" + paymentId + ".pdf")
                .build());

        return new ResponseEntity<>(pdf, headers, HttpStatus.OK);
    }

    // ✅ Get payment details by bookingId
    @GetMapping("/by-booking/{bookingId}")
    public ResponseEntity<PaymentOutputDTO> getPaymentByBooking(@PathVariable Long bookingId) {
        return ResponseEntity.ok(paymentService.getPaymentByBookingId(bookingId));
    }
}