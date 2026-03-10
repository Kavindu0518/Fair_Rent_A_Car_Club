//package com.frac.frac_backend.repository;
//
//import com.frac.frac_backend.entity.Vehicle;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
//
//    boolean existsByRegNumberIgnoreCase(String regNumber);
//}



//-----------------

package com.frac.frac_backend.repository;

import com.frac.frac_backend.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    boolean existsByRegNumberIgnoreCase(String regNumber);

    // ✅ NEW: Get all vehicles by Agent
    List<Vehicle> findByAgent_Id(Long agentId);
}