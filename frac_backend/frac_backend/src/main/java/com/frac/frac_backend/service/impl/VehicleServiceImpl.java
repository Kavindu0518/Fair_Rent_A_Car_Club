package com.frac.frac_backend.service.impl;

import com.frac.frac_backend.dto.VehicleInputDTO;
import com.frac.frac_backend.dto.VehicleOutputDTO;
import com.frac.frac_backend.entity.Vehicle;
import com.frac.frac_backend.repository.VehicleRepository;
import com.frac.frac_backend.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Override
    public VehicleOutputDTO createVehicle(VehicleInputDTO dto) {

        if (vehicleRepository.existsByRegNumberIgnoreCase(dto.getRegNumber())) {
            throw new RuntimeException("Vehicle with registration number already exists");
        }

        Vehicle vehicle = mapToEntity(dto);
        return mapToOutputDTO(vehicleRepository.save(vehicle));
    }

    @Override
    public List<VehicleOutputDTO> getAllVehicles() {
        return vehicleRepository.findAll()
                .stream()
                .map(this::mapToOutputDTO)
                .collect(Collectors.toList());
    }

    @Override
    public VehicleOutputDTO getVehicleById(Long id) {
        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));
        return mapToOutputDTO(vehicle);
    }

    @Override
    public VehicleOutputDTO updateVehicle(Long id, VehicleInputDTO dto) {
        Vehicle existing = vehicleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));

        existing.setRegNumber(dto.getRegNumber());
        existing.setVehicleImage(dto.getVehicleImage());
        existing.setMakeModel(dto.getMakeModel());
        existing.setYearOfManufacture(dto.getYearOfManufacture());
        existing.setColor(dto.getColor());
        existing.setSeatingCapacity(dto.getSeatingCapacity());
        existing.setFuelType(dto.getFuelType());
        existing.setTransmissionType(dto.getTransmissionType());

        return mapToOutputDTO(vehicleRepository.save(existing));
    }

    @Override
    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    // ---------- Mapping Helpers ------------

    private Vehicle mapToEntity(VehicleInputDTO dto) {
        return Vehicle.builder()
                .regNumber(dto.getRegNumber())
                .vehicleImage(dto.getVehicleImage())
                .makeModel(dto.getMakeModel())
                .yearOfManufacture(dto.getYearOfManufacture())
                .color(dto.getColor())
                .seatingCapacity(dto.getSeatingCapacity())
                .fuelType(dto.getFuelType())
                .transmissionType(dto.getTransmissionType())
                .build();
    }

    private VehicleOutputDTO mapToOutputDTO(Vehicle vehicle) {
        return VehicleOutputDTO.builder()
                .id(vehicle.getId())
                .regNumber(vehicle.getRegNumber())
                .vehicleImage(vehicle.getVehicleImage())
                .makeModel(vehicle.getMakeModel())
                .yearOfManufacture(vehicle.getYearOfManufacture())
                .color(vehicle.getColor())
                .seatingCapacity(vehicle.getSeatingCapacity())
                .fuelType(vehicle.getFuelType())
                .transmissionType(vehicle.getTransmissionType())
                .build();
    }
}
