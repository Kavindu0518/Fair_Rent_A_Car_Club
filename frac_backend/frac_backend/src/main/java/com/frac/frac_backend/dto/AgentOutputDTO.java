//package com.frac.frac_backend.dto;
//
//import lombok.*;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@Builder
//public class AgentOutputDTO {
//
//    private Long id;
//    private String companyName;
//    private String tagline;
//    private String email;
//    private String contactNo;
//    private String businessRegNo;
//    private String operatingSince;
//    private String tourismApproved;
//    private String insuranceType;
//    private String serviceAreas;
//    private String userName;         // New Field
//    // Don't expose password in output DTO
//}


package com.frac.frac_backend.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AgentOutputDTO {

    private Long id;
    private String companyName;
    private String tagline;
    private String email;
    private String contactNo;
    private String businessRegNo;
    private String operatingSince;
    private String tourismApproved;
    private String insuranceType;
    private String serviceAreas;
    private String userName;         // New Field
    // Don't expose password in output DTO
}
