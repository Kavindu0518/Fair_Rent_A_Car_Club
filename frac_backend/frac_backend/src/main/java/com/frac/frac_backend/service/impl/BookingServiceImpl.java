package com.frac.frac_backend.service.impl;

import com.frac.frac_backend.dto.BookingInputDTO;
import com.frac.frac_backend.dto.BookingOutputDTO;
import com.frac.frac_backend.entity.Agent;
import com.frac.frac_backend.entity.Booking;
import com.frac.frac_backend.entity.Customer;
import com.frac.frac_backend.entity.Vehicle;
import com.frac.frac_backend.repository.AgentRepository;
import com.frac.frac_backend.repository.BookingRepository;
import com.frac.frac_backend.repository.CustomerRepository;
import com.frac.frac_backend.repository.VehicleRepository;
import com.frac.frac_backend.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private AgentRepository agentRepository;

    @Override
    public BookingOutputDTO createBooking(BookingInputDTO dto) {

        Customer customer = customerRepository.findById(dto.getCustomerId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Vehicle vehicle = vehicleRepository.findById(dto.getVehicleId())
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));

        Agent agent = agentRepository.findById(dto.getAgentId())
                .orElseThrow(() -> new RuntimeException("Agent not found"));

        Booking booking = Booking.builder()
                .customer(customer)
                .vehicle(vehicle)
                .agent(agent)
                .pickupDate(dto.getPickupDate())
                .dropOffDate(dto.getDropOffDate())
                .pickupLocation(dto.getPickupLocation())
                .dropOffLocation(dto.getDropOffLocation())
                .driverStatus(dto.getDriverStatus())
                .bookingStatus(dto.getBookingStatus())
                .paymentStatus(dto.getPaymentStatus())
                .totalPrice(dto.getTotalPrice())
                .gpsIncluded(dto.isGpsIncluded())
                .childSeatIncluded(dto.isChildSeatIncluded())
                .build();

        return mapToOutputDTO(bookingRepository.save(booking));
    }

    @Override
    public List<BookingOutputDTO> getAllBookings() {
        return bookingRepository.findAll()
                .stream()
                .map(this::mapToOutputDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BookingOutputDTO getBookingById(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        return mapToOutputDTO(booking);
    }

    @Override
    public BookingOutputDTO updateBooking(Long id, BookingInputDTO dto) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setPickupDate(dto.getPickupDate());
        booking.setDropOffDate(dto.getDropOffDate());
        booking.setPickupLocation(dto.getPickupLocation());
        booking.setDropOffLocation(dto.getDropOffLocation());
        booking.setDriverStatus(dto.getDriverStatus());
        booking.setBookingStatus(dto.getBookingStatus());
        booking.setPaymentStatus(dto.getPaymentStatus());
        booking.setTotalPrice(dto.getTotalPrice());
        booking.setGpsIncluded(dto.isGpsIncluded());
        booking.setChildSeatIncluded(dto.isChildSeatIncluded());

        return mapToOutputDTO(bookingRepository.save(booking));
    }

    @Override
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    private BookingOutputDTO mapToOutputDTO(Booking booking) {
        return BookingOutputDTO.builder()
                .id(booking.getId())
                .customerId(booking.getCustomer().getId())
                .vehicleId(booking.getVehicle().getId())
                .agentId(booking.getAgent().getId())
                .pickupDate(booking.getPickupDate())
                .dropOffDate(booking.getDropOffDate())
                .pickupLocation(booking.getPickupLocation())
                .dropOffLocation(booking.getDropOffLocation())
                .driverStatus(booking.getDriverStatus())
                .bookingStatus(booking.getBookingStatus())
                .paymentStatus(booking.getPaymentStatus())
                .totalPrice(booking.getTotalPrice())
                .gpsIncluded(booking.isGpsIncluded())
                .childSeatIncluded(booking.isChildSeatIncluded())
                .build();
    }
}
