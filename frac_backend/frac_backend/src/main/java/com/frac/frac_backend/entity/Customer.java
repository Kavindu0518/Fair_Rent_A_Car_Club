package com.frac.frac_backend.entity;

import com.frac.frac_backend.enums.FuelType;
import com.frac.frac_backend.enums.Gender;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "frac_customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    private String customerName;
    private String firstName;
    private String lastName;
//    private String userName;
    private String password;
    private String customerImage;

    @Enumerated(EnumType.STRING)
    private Gender gender;

//    private int age;
    private LocalDate birthday;
    private String nicNumber;
    private String contactNumber;
    private String email;
    private String country;
//    private String address;

    // Hash the password before saving it to the DB
    @PrePersist
    @PreUpdate
    public void encryptPassword() {
        if (this.password != null) {
            this.password = new BCryptPasswordEncoder().encode(this.password);
        }
    }
}
