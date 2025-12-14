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
}
