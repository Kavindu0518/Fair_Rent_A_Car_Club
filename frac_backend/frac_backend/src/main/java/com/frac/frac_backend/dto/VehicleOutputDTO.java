////package com.frac.frac_backend.dto;
////
////import com.frac.frac_backend.enums.FuelType;
////import com.frac.frac_backend.enums.TransmissionType;
////import lombok.*;
////
////@Data
////@AllArgsConstructor
////@NoArgsConstructor
////@Builder
////public class VehicleOutputDTO {
////
////    private Long id;
////    private String regNumber;
////    private String vehicleImage;
////    private String makeModel;
////    private int yearOfManufacture;
////    private String color;
////    private int seatingCapacity;
////    private FuelType fuelType;
////    private TransmissionType transmissionType;
////}
//
//////------------------------------
//////correct code start
//////-----------------------------
//package com.frac.frac_backend.dto;
//
//import com.frac.frac_backend.enums.FuelType;
//import com.frac.frac_backend.enums.TransmissionType;
//import lombok.*;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@Builder
//public class VehicleOutputDTO {
//
//    private Long id;
//    private String regNumber;
//    private String vehicleImage;
//    private String makeModel;
//    private int yearOfManufacture;
//    private String color;
//    private int seatingCapacity;
//    private FuelType fuelType;
//    private TransmissionType transmissionType;
//
//    // Error message constructor (optional)
//    private String errorMessage;
//
//    // Add a method to set error message if needed
//    public static VehicleOutputDTO error(String errorMessage) {
//        return VehicleOutputDTO.builder()
//                .errorMessage(errorMessage)
//                .build();
//    }
//}
//
//////------------------------------
//////correct code end
//////-----------------------------

package com.frac.frac_backend.dto;

import com.frac.frac_backend.enums.FuelType;
import com.frac.frac_backend.enums.TransmissionType;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VehicleOutputDTO {

    private Long id;
    private String regNumber;
    private String vehicleImage;
    private String makeModel;
    private int yearOfManufacture;
    private String color;
    private int seatingCapacity;
    private FuelType fuelType;
    private TransmissionType transmissionType;

    private double dailyRentalPrice;
//    private int distanceCoveredPerDay;
//    private double pricePerExtraKm;

    private Long agentId; // ✅ NEW

    private String errorMessage;

    public static VehicleOutputDTO error(String errorMessage) {
        return VehicleOutputDTO.builder()
                .errorMessage(errorMessage)
                .build();
    }
}