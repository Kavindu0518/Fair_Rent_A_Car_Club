package com.frac.frac_backend.service;

import com.frac.frac_backend.dto.BookingInputDTO;
import com.frac.frac_backend.dto.BookingOutputDTO;

import java.util.List;

public interface BookingService {

    BookingOutputDTO createBooking(BookingInputDTO dto);

    List<BookingOutputDTO> getAllBookings();

    BookingOutputDTO getBookingById(Long id);

    BookingOutputDTO updateBooking(Long id, BookingInputDTO dto);

    void deleteBooking(Long id);
}
