//package com.frac.frac_backend.entity;
//
//import jakarta.persistence.*;
//import lombok.*;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//@Table(name = "frac_agents")
//public class Agent {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String companyName;
//    private String tagline;
//    private String email;
//    private String contactNo;
//    private String businessRegNo;
//    private String operatingSince;   // Could be year
//    private String tourismApproved;  // Yes/No
//    private String insuranceType;    // e.g., Full Comprehensive Coverage
//
//    @Column(length = 2000)
//    private String serviceAreas;     // All sri lankan districts
//
//    private String userName;         // New Field
//    private String password;         // New Field (hashed in DB)
//
//    // Hash the password before saving it to the DB
//    @PrePersist
//    @PreUpdate
//    public void encryptPassword() {
//        if (this.password != null) {
//            this.password = new BCryptPasswordEncoder().encode(this.password);
//        }
//    }
//}



package com.frac.frac_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "frac_agents")
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

    private String userName;         // New Field
    private String password;         // New Field (hashed in DB)

    // Hash the password before saving it to the DB
    @PrePersist
    @PreUpdate
    public void encryptPassword() {
        if (this.password != null) {
            this.password = new BCryptPasswordEncoder().encode(this.password);
        }
    }
}
