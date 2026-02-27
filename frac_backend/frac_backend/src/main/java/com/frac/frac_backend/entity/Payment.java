package com.frac.frac_backend.entity;

import com.frac.frac_backend.enums.PaymentMethod;
import com.frac.frac_backend.enums.PaymentStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "frac_payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ✅ Link payment to a booking (1 booking -> 1 payment is common)
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "booking_id", nullable = false, unique = true)
    private Booking booking;

    // (Optional) also store these for easy querying (not strictly needed since booking has them)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicle;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "agent_id", nullable = false)
    private Agent agent;

    private double amount;
    private String currency; // "LKR"

    private LocalDateTime paidAt;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    // ✅ Safe card storage fields (do not store real card number)
    private String maskedCardNumber; // "**** **** **** 3145"
    private String cardLast4;        // "3145"
    private String cardBrand;        // "VISA"

    private String paymentReference; // gateway txn id / receipt no

    // ✅ Store PDF in DB (BLOB)
    private String pdfFileName;
    private String pdfContentType; // "application/pdf"

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] pdfData;
}