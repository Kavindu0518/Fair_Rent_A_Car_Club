package com.frac.frac_backend.repository;

import com.frac.frac_backend.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
