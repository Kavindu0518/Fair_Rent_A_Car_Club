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
}
