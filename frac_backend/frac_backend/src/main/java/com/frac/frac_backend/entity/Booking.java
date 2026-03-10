package com.frac.frac_backend.entity;

import com.frac.frac_backend.enums.BookingStatus;
import com.frac.frac_backend.enums.DriverStatus;
import com.frac.frac_backend.enums.PaymentStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "frac_bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relationships
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "agent_id", nullable = false)
    private Agent agent;

    // Booking details
    private LocalDate pickupDate;
    private LocalDate dropOffDate;
    private String pickupLocation;
    private String dropOffLocation;

    @Enumerated(EnumType.STRING)
    private DriverStatus driverStatus;

    @Enumerated(EnumType.STRING)
    private BookingStatus bookingStatus;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    private double totalPrice;

    // Extras
    private boolean gpsIncluded;
    private boolean childSeatIncluded;
}
