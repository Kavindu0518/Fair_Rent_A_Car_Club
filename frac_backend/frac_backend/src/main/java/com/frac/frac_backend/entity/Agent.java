package com.frac.frac_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "agents")
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName;
    private String tagline;
    private String email;
    private String contactNo;
    private String businessRegNo;
    private String operatingSince;   // Could be year
    private String tourismApproved;  // Yes/No
    private String insuranceType;    // e.g., Full Comprehensive Coverage

    @Column(length = 2000)
    private String serviceAreas;     // All sri lankan districts
}
