//package com.frac.frac_backend.dto;
//
//import lombok.*;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class AgentInputDTO {
//
//    private String companyName;
//    private String tagline;
//    private String email;
//    private String contactNo;
//    private String businessRegNo;
//    private String operatingSince;
//    private String tourismApproved;  // Yes/No
//    private String insuranceType;
//    private String serviceAreas;     // All district names
//    private String userName;         // New Field
//    private String password;         // New Field
//}


package com.frac.frac_backend.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AgentInputDTO {

    private String companyName;
    private String tagline;
    private String email;
    private String contactNo;
    private String businessRegNo;
    private String operatingSince;
    private String tourismApproved;  // Yes/No
    private String insuranceType;
    private String serviceAreas;     // All district names
    private String userName;         // New Field
    private String password;         // New Field
}
