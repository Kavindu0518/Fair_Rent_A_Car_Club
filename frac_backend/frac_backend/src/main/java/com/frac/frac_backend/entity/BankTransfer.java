package com.frac.frac_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "frac_banktransfer")
public class BankTransfer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    private Long bookingId;

    // Relationships
    @ManyToOne
    @JoinColumn(name = "bookingId", nullable = false)
    private Booking booking;// Booking ID

    private String bankName;           // Bank Name
    private String accountNumber;      // Account Number
    private String accountHolder;      // Account Holder Name
    private String transferReference;  // Transfer Reference

    private String paymentSlip;        // Payment Slip URL or file name

    private String status;             // Payment status (e.g., "Pending", "Verified")
}