//package com.frac.frac_backend.entity;
//
//import com.frac.frac_backend.enums.FuelType;
//import com.frac.frac_backend.enums.TransmissionType;
//import jakarta.persistence.*;
//import lombok.*;
//
//@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//@Table(name = "frac_vehicles")
//public class Vehicle {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String regNumber;
//    private String vehicleImage;
//    private String makeModel;
//    private int yearOfManufacture;
//    private String color;
//    private int seatingCapacity;
//
//    @Enumerated(EnumType.STRING)
//    private FuelType fuelType;
//
//    @Enumerated(EnumType.STRING)
//    private TransmissionType transmissionType;
//}

//-------------------

package com.frac.frac_backend.entity;

import com.frac.frac_backend.enums.FuelType;
import com.frac.frac_backend.enums.TransmissionType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "frac_vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String regNumber;
    private String vehicleImage;
    private String makeModel;
    private int yearOfManufacture;
    private String color;
    private int seatingCapacity;

    @Enumerated(EnumType.STRING)
    private FuelType fuelType;

    @Enumerated(EnumType.STRING)
    private TransmissionType transmissionType;

    // NEW: Additional fields for rental price and distance
    private double dailyRentalPrice;      // Daily rental price
//    private int distanceCoveredPerDay;    // Distance covered per day (in kilometers)
//    private double pricePerExtraKm;       // Price per extra kilometer

    // ✅ NEW: Many Vehicles -> One Agent
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "agent_id", nullable = false)
    private Agent agent;
}