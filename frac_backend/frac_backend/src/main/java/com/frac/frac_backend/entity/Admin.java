package com.frac.frac_backend.entity;

import com.frac.frac_backend.enums.Gender;
import com.frac.frac_backend.enums.Role;
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
@Table(name = "frac_admins")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String userName;
    private String password;
    private String adminImage;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String email;
    private String contactNo;
//    private String role;

    @Enumerated(EnumType.STRING)
    private Role role;

    // Hash the password before saving it to the DB
    @PrePersist
    @PreUpdate
    public void encryptPassword() {
        if (this.password != null) {
            this.password = new BCryptPasswordEncoder().encode(this.password);
        }
    }
}
