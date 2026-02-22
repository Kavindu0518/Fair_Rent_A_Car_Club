//package com.frac.frac_backend.service.impl;
//
//import com.frac.frac_backend.dto.VehicleInputDTO;
//import com.frac.frac_backend.dto.VehicleOutputDTO;
//import com.frac.frac_backend.entity.Vehicle;
//import com.frac.frac_backend.repository.VehicleRepository;
//import com.frac.frac_backend.service.VehicleService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Service
//public class VehicleServiceImpl implements VehicleService {
//
//    @Autowired
//    private VehicleRepository vehicleRepository;
//
//    @Override
//    public VehicleOutputDTO createVehicle(VehicleInputDTO dto) {
//
//        if (vehicleRepository.existsByRegNumberIgnoreCase(dto.getRegNumber())) {
//            throw new RuntimeException("Vehicle with registration number already exists");
//        }
//
//        Vehicle vehicle = mapToEntity(dto);
//        return mapToOutputDTO(vehicleRepository.save(vehicle));
//    }
//
//    @Override
//    public List<VehicleOutputDTO> getAllVehicles() {
//        return vehicleRepository.findAll()
//                .stream()
//                .map(this::mapToOutputDTO)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public VehicleOutputDTO getVehicleById(Long id) {
//        Vehicle vehicle = vehicleRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Vehicle not found"));
//        return mapToOutputDTO(vehicle);
//    }
//
//    @Override
//    public VehicleOutputDTO updateVehicle(Long id, VehicleInputDTO dto) {
//        Vehicle existing = vehicleRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Vehicle not found"));
//
//        existing.setRegNumber(dto.getRegNumber());
//        existing.setVehicleImage(dto.getVehicleImage());
//        existing.setMakeModel(dto.getMakeModel());
//        existing.setYearOfManufacture(dto.getYearOfManufacture());
//        existing.setColor(dto.getColor());
//        existing.setSeatingCapacity(dto.getSeatingCapacity());
//        existing.setFuelType(dto.getFuelType());
//        existing.setTransmissionType(dto.getTransmissionType());
//
//        return mapToOutputDTO(vehicleRepository.save(existing));
//    }
//
//    @Override
//    public void deleteVehicle(Long id) {
//        vehicleRepository.deleteById(id);
//    }
//
//    // ---------- Mapping Helpers ------------
//
//    private Vehicle mapToEntity(VehicleInputDTO dto) {
//        return Vehicle.builder()
//                .regNumber(dto.getRegNumber())
//                .vehicleImage(dto.getVehicleImage())
//                .makeModel(dto.getMakeModel())
//                .yearOfManufacture(dto.getYearOfManufacture())
//                .color(dto.getColor())
//                .seatingCapacity(dto.getSeatingCapacity())
//                .fuelType(dto.getFuelType())
//                .transmissionType(dto.getTransmissionType())
//                .build();
//    }
//
//    private VehicleOutputDTO mapToOutputDTO(Vehicle vehicle) {
//        return VehicleOutputDTO.builder()
//                .id(vehicle.getId())
//                .regNumber(vehicle.getRegNumber())
//                .vehicleImage(vehicle.getVehicleImage())
//                .makeModel(vehicle.getMakeModel())
//                .yearOfManufacture(vehicle.getYearOfManufacture())
//                .color(vehicle.getColor())
//                .seatingCapacity(vehicle.getSeatingCapacity())
//                .fuelType(vehicle.getFuelType())
//                .transmissionType(vehicle.getTransmissionType())
//                .build();
//    }
//}

////------------------------------
////correct code end
////-----------------------------


package com.frac.frac_backend.service.impl;

import com.frac.frac_backend.dto.VehicleInputDTO;
import com.frac.frac_backend.dto.VehicleOutputDTO;
import com.frac.frac_backend.entity.Agent;
import com.frac.frac_backend.entity.Vehicle;
import com.frac.frac_backend.repository.AgentRepository;
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

    @Autowired
    private AgentRepository agentRepository; // ✅ NEW

    @Override
    public VehicleOutputDTO createVehicle(VehicleInputDTO dto) {

        if (vehicleRepository.existsByRegNumberIgnoreCase(dto.getRegNumber())) {
            throw new RuntimeException("Vehicle with registration number already exists");
        }

        Agent agent = agentRepository.findById(dto.getAgentId())
                .orElseThrow(() -> new RuntimeException("Agent not found"));

        Vehicle vehicle = mapToEntity(dto, agent);
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

        Agent agent = agentRepository.findById(dto.getAgentId())
                .orElseThrow(() -> new RuntimeException("Agent not found"));

        existing.setRegNumber(dto.getRegNumber());
        existing.setVehicleImage(dto.getVehicleImage());
        existing.setMakeModel(dto.getMakeModel());
        existing.setYearOfManufacture(dto.getYearOfManufacture());
        existing.setColor(dto.getColor());
        existing.setSeatingCapacity(dto.getSeatingCapacity());
        existing.setFuelType(dto.getFuelType());
        existing.setTransmissionType(dto.getTransmissionType());
        existing.setDailyRentalPrice(dto.getDailyRentalPrice());
//        existing.setDistanceCoveredPerDay(dto.getDistanceCoveredPerDay());
//        existing.setPricePerExtraKm(dto.getPricePerExtraKm());
        existing.setAgent(agent); // ✅ NEW

        return mapToOutputDTO(vehicleRepository.save(existing));
    }

    @Override
    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    // ✅ NEW
    @Override
    public List<VehicleOutputDTO> getVehiclesByAgent(Long agentId) {
        return vehicleRepository.findByAgent_Id(agentId)
                .stream()
                .map(this::mapToOutputDTO)
                .collect(Collectors.toList());
    }

    // ---------- Mapping Helpers ------------

    private Vehicle mapToEntity(VehicleInputDTO dto, Agent agent) {
        return Vehicle.builder()
                .regNumber(dto.getRegNumber())
                .vehicleImage(dto.getVehicleImage())
                .makeModel(dto.getMakeModel())
                .yearOfManufacture(dto.getYearOfManufacture())
                .color(dto.getColor())
                .seatingCapacity(dto.getSeatingCapacity())
                .fuelType(dto.getFuelType())
                .transmissionType(dto.getTransmissionType())
                .dailyRentalPrice(dto.getDailyRentalPrice()) // Set daily rental price
//                .distanceCoveredPerDay(dto.getDistanceCoveredPerDay()) // Set daily distance
//                .pricePerExtraKm(dto.getPricePerExtraKm())
                .agent(agent) // ✅ NEW
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
                .dailyRentalPrice(vehicle.getDailyRentalPrice()) // Include daily rental price
//                .distanceCoveredPerDay(vehicle.getDistanceCoveredPerDay()) // Include distance covered per day
//                .pricePerExtraKm(vehicle.getPricePerExtraKm())
                .agentId(vehicle.getAgent() != null ? vehicle.getAgent().getId() : null) // ✅ NEW
                .build();
    }
}