package com.frac.frac_backend.controller;

import com.frac.frac_backend.dto.BookingInputDTO;
import com.frac.frac_backend.dto.BookingOutputDTO;
import com.frac.frac_backend.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/booking")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/add")
    public ResponseEntity<BookingOutputDTO> createBooking(@RequestBody BookingInputDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(bookingService.createBooking(dto));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<BookingOutputDTO>> getAllBookings() {
        return ResponseEntity.ok(bookingService.getAllBookings());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookingOutputDTO> getBooking(@PathVariable Long id) {
        return ResponseEntity.ok(bookingService.getBookingById(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<BookingOutputDTO> updateBooking(
            @PathVariable Long id,
            @RequestBody BookingInputDTO dto) {
        return ResponseEntity.ok(bookingService.updateBooking(id, dto));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.ok("Booking deleted successfully");
    }
}
