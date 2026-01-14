package com.frac.frac_backend.dto;

import com.frac.frac_backend.enums.BookingStatus;
import com.frac.frac_backend.enums.DriverStatus;
import com.frac.frac_backend.enums.PaymentStatus;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingOutputDTO {

    private Long id;

    private Long customerId;
    private Long vehicleId;
    private Long agentId;

    private LocalDate pickupDate;
    private LocalDate dropOffDate;
    private String pickupLocation;
    private String dropOffLocation;

    private DriverStatus driverStatus;
    private BookingStatus bookingStatus;
    private PaymentStatus paymentStatus;

    private double totalPrice;

    private boolean gpsIncluded;
    private boolean childSeatIncluded;
}
