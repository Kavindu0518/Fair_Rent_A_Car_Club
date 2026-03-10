////package com.frac.frac_backend.service;
////
////import com.frac.frac_backend.dto.VehicleInputDTO;
////import com.frac.frac_backend.dto.VehicleOutputDTO;
////
////import java.util.List;
////
////public interface VehicleService {
////
////    VehicleOutputDTO createVehicle(VehicleInputDTO dto);
////
////    List<VehicleOutputDTO> getAllVehicles();
////
////    VehicleOutputDTO getVehicleById(Long id);
////
////    VehicleOutputDTO updateVehicle(Long id, VehicleInputDTO dto);
////
////    void deleteVehicle(Long id);
////}
//
//
//
//
////----------------
//
//
//package com.frac.frac_backend.service;
//
//import com.frac.frac_backend.dto.VehicleInputDTO;
//import com.frac.frac_backend.dto.VehicleOutputDTO;
//
//import java.util.List;
//
//public interface VehicleService {
//
//    VehicleOutputDTO createVehicle(VehicleInputDTO dto);
//
//    List<VehicleOutputDTO> getAllVehicles();
//
//    VehicleOutputDTO getVehicleById(Long id);
//
//    VehicleOutputDTO updateVehicle(Long id, VehicleInputDTO dto);
//
//    void deleteVehicle(Long id);
//
//    // ✅ NEW
//    List<VehicleOutputDTO> getVehiclesByAgent(Long agentId);
//}


package com.frac.frac_backend.service;

import com.frac.frac_backend.dto.VehicleInputDTO;
import com.frac.frac_backend.dto.VehicleOutputDTO;

import java.util.List;

public interface VehicleService {
    VehicleOutputDTO createVehicle(VehicleInputDTO dto);
    List<VehicleOutputDTO> getAllVehicles();
    VehicleOutputDTO getVehicleById(Long id);
    VehicleOutputDTO updateVehicle(Long id, VehicleInputDTO dto);
    void deleteVehicle(Long id);
    List<VehicleOutputDTO> getVehiclesByAgent(Long agentId);
}