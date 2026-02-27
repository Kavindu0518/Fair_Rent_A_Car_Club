//////package com.frac.frac_backend.service.impl;
//////
//////import com.frac.frac_backend.dto.BankTransferInputDTO;
//////import com.frac.frac_backend.dto.BankTransferOutputDTO;
//////import com.frac.frac_backend.entity.BankTransfer;
//////import com.frac.frac_backend.repository.BankTransferRepository;
//////import com.frac.frac_backend.service.BankTransferService;
//////import org.springframework.beans.factory.annotation.Autowired;
//////import org.springframework.stereotype.Service;
//////
//////import java.util.List;
//////import java.util.stream.Collectors;
//////
//////@Service
//////public class BankTransferServiceImpl implements BankTransferService {
//////
//////    @Autowired
//////    private BankTransferRepository bankTransferRepository;
//////
//////    @Override
//////    public BankTransferOutputDTO createBankTransfer(BankTransferInputDTO bankTransferDTO) {
//////        BankTransfer bankTransfer = new BankTransfer();
//////        bankTransfer.setBookingId(bankTransferDTO.getBookingId());
//////        bankTransfer.setBankName(bankTransferDTO.getBankName());
//////        bankTransfer.setAccountNumber(bankTransferDTO.getAccountNumber());
//////        bankTransfer.setAccountHolder(bankTransferDTO.getAccountHolder());
//////        bankTransfer.setTransferReference(bankTransferDTO.getTransferReference());
//////        bankTransfer.setPaymentSlip(bankTransferDTO.getPaymentSlip());
//////        bankTransfer.setStatus(bankTransferDTO.getStatus()); // Initially "Pending"
//////
//////        bankTransfer = bankTransferRepository.save(bankTransfer);
//////        return mapToDTO(bankTransfer);
//////    }
//////
//////    @Override
//////    public BankTransferOutputDTO updateBankTransferStatus(Long id, String status) {
//////        BankTransfer bankTransfer = bankTransferRepository.findById(id)
//////                .orElseThrow(() -> new RuntimeException("BankTransfer not found"));
//////
//////        bankTransfer.setStatus(status);
//////        bankTransfer = bankTransferRepository.save(bankTransfer);
//////
//////        return mapToDTO(bankTransfer);
//////    }
//////
//////    @Override
//////    public List<BankTransferOutputDTO> getAllBankTransfers() {
//////        return bankTransferRepository.findAll()
//////                .stream()
//////                .map(this::mapToDTO)
//////                .collect(Collectors.toList());
//////    }
//////
//////    private BankTransferOutputDTO mapToDTO(BankTransfer bankTransfer) {
//////        return new BankTransferOutputDTO(
//////                bankTransfer.getId(),
//////                bankTransfer.getBookingId(),
//////                bankTransfer.getBankName(),
//////                bankTransfer.getAccountNumber(),
//////                bankTransfer.getAccountHolder(),
//////                bankTransfer.getTransferReference(),
//////                bankTransfer.getPaymentSlip(),
//////                bankTransfer.getStatus()
//////        );
//////    }
//////}
////
////
////
////package com.frac.frac_backend.service.impl;
////
////import com.frac.frac_backend.dto.BankTransferInputDTO;
////import com.frac.frac_backend.dto.BankTransferOutputDTO;
////import com.frac.frac_backend.entity.BankTransfer;
////import com.frac.frac_backend.repository.BankTransferRepository;
////import com.frac.frac_backend.service.BankTransferService;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.stereotype.Service;
////
////import java.util.List;
////import java.util.stream.Collectors;
////
////@Service
////public class BankTransferServiceImpl implements BankTransferService {
////
////    @Autowired
////    private BankTransferRepository bankTransferRepository;
////
////    @Override
////    public BankTransferOutputDTO createBankTransfer(BankTransferInputDTO bankTransferDTO) {
////        BankTransfer bankTransfer = new BankTransfer();
////        bankTransfer.setBookingId(bankTransferDTO.getBookingId());
////        bankTransfer.setBankName(bankTransferDTO.getBankName());
////        bankTransfer.setAccountNumber(bankTransferDTO.getAccountNumber());
////        bankTransfer.setAccountHolder(bankTransferDTO.getAccountHolder());
////        bankTransfer.setTransferReference(bankTransferDTO.getTransferReference());
////        bankTransfer.setPaymentSlip(bankTransferDTO.getPaymentSlip());
////        bankTransfer.setStatus(bankTransferDTO.getStatus()); // Initially "Pending"
////
////        bankTransfer = bankTransferRepository.save(bankTransfer);
////        return mapToDTO(bankTransfer);
////    }
////
////    @Override
////    public BankTransferOutputDTO updateBankTransferStatus(Long id, String status) {
////        BankTransfer bankTransfer = bankTransferRepository.findById(id)
////                .orElseThrow(() -> new RuntimeException("BankTransfer not found"));
////
////        bankTransfer.setStatus(status);
////        bankTransfer = bankTransferRepository.save(bankTransfer);
////
////        return mapToDTO(bankTransfer);
////    }
////
////    @Override
////    public List<BankTransferOutputDTO> getAllBankTransfers() {
////        return bankTransferRepository.findAll()
////                .stream()
////                .map(this::mapToDTO)
////                .collect(Collectors.toList());
////    }
////
////    private BankTransferOutputDTO mapToDTO(BankTransfer bankTransfer) {
////        return new BankTransferOutputDTO(
////                bankTransfer.getId(),
////                bankTransfer.getBookingId(),
////                bankTransfer.getBankName(),
////                bankTransfer.getAccountNumber(),
////                bankTransfer.getAccountHolder(),
////                bankTransfer.getTransferReference(),
////                bankTransfer.getPaymentSlip(),
////                bankTransfer.getStatus()
////        );
////    }
////}
//
//
//package com.frac.frac_backend.service.impl;
//
//import com.frac.frac_backend.dto.BankTransferInputDTO;
//import com.frac.frac_backend.dto.BankTransferOutputDTO;
//import com.frac.frac_backend.entity.BankTransfer;
//import com.frac.frac_backend.entity.Booking;
//import com.frac.frac_backend.repository.BankTransferRepository;
//import com.frac.frac_backend.repository.BookingRepository;
//import com.frac.frac_backend.service.BankTransferService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Service
//public class BankTransferServiceImpl implements BankTransferService {
//
//    @Autowired
//    private BankTransferRepository bankTransferRepository;
//
//    @Autowired
//    private BookingRepository bookingRepository;  // New Booking repository to fetch Booking
//
//    @Override
//    public BankTransferOutputDTO createBankTransfer(BankTransferInputDTO bankTransferDTO) {
//        // Fetch the booking entity based on bookingId
//        Booking booking = bookingRepository.findById(bankTransferDTO.getBookingId())
//                .orElseThrow(() -> new RuntimeException("Booking not found"));
//
//        // Create BankTransfer entity
//        BankTransfer bankTransfer = new BankTransfer();
//        bankTransfer.setBooking(booking);  // Set the booking entity
//        bankTransfer.setBankName(bankTransferDTO.getBankName());
//        bankTransfer.setAccountNumber(bankTransferDTO.getAccountNumber());
//        bankTransfer.setAccountHolder(bankTransferDTO.getAccountHolder());
//        bankTransfer.setTransferReference(bankTransferDTO.getTransferReference());
//        bankTransfer.setPaymentSlip(bankTransferDTO.getPaymentSlip());
//        bankTransfer.setStatus(bankTransferDTO.getStatus()); // Initially "Pending"
//
//        bankTransfer = bankTransferRepository.save(bankTransfer);
//
//        return mapToDTO(bankTransfer);
//    }
//
//    @Override
//    public BankTransferOutputDTO updateBankTransferStatus(Long id, String status) {
//        BankTransfer bankTransfer = bankTransferRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("BankTransfer not found"));
//
//        bankTransfer.setStatus(status);
//        bankTransfer = bankTransferRepository.save(bankTransfer);
//
//        return mapToDTO(bankTransfer);
//    }
//
//    @Override
//    public List<BankTransferOutputDTO> getAllBankTransfers() {
//        return bankTransferRepository.findAll()
//                .stream()
//                .map(this::mapToDTO)
//                .collect(Collectors.toList());
//    }
//
//    private BankTransferOutputDTO mapToDTO(BankTransfer bankTransfer) {
//        return new BankTransferOutputDTO(
//                bankTransfer.getId(),
//                bankTransfer.getBooking().getId(),  // Fetch Booking ID from the relationship
//                bankTransfer.getBankName(),
//                bankTransfer.getAccountNumber(),
//                bankTransfer.getAccountHolder(),
//                bankTransfer.getTransferReference(),
//                bankTransfer.getPaymentSlip(),
//                bankTransfer.getStatus()
//        );
//    }
//}


package com.frac.frac_backend.service.impl;

import com.frac.frac_backend.dto.BankTransferInputDTO;
import com.frac.frac_backend.dto.BankTransferOutputDTO;
import com.frac.frac_backend.entity.BankTransfer;
import com.frac.frac_backend.entity.Booking;
import com.frac.frac_backend.repository.BankTransferRepository;
import com.frac.frac_backend.repository.BookingRepository;
import com.frac.frac_backend.service.BankTransferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BankTransferServiceImpl implements BankTransferService {

    @Autowired
    private BankTransferRepository bankTransferRepository;

    @Autowired
    private BookingRepository bookingRepository;  // New Booking repository to fetch Booking

    @Override
    public BankTransferOutputDTO createBankTransfer(BankTransferInputDTO bankTransferDTO) {
        // Fetch the booking entity based on bookingId
        Booking booking = bookingRepository.findById(bankTransferDTO.getBookingId())
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        // Create BankTransfer entity
        BankTransfer bankTransfer = new BankTransfer();
        bankTransfer.setBooking(booking);  // Set the booking entity
        bankTransfer.setBankName(bankTransferDTO.getBankName());
        bankTransfer.setAccountNumber(bankTransferDTO.getAccountNumber());
        bankTransfer.setAccountHolder(bankTransferDTO.getAccountHolder());
        bankTransfer.setTransferReference(bankTransferDTO.getTransferReference());
        bankTransfer.setPaymentSlip(bankTransferDTO.getPaymentSlip());
        bankTransfer.setStatus(bankTransferDTO.getStatus()); // Initially "Pending"

        bankTransfer = bankTransferRepository.save(bankTransfer);

        return mapToDTO(bankTransfer);
    }

    @Override
    public BankTransferOutputDTO updateBankTransferStatus(Long id, String status) {
        BankTransfer bankTransfer = bankTransferRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("BankTransfer not found"));

        bankTransfer.setStatus(status);
        bankTransfer = bankTransferRepository.save(bankTransfer);

        return mapToDTO(bankTransfer);
    }

    @Override
    public List<BankTransferOutputDTO> getAllBankTransfers() {
        return bankTransferRepository.findAll()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BankTransferOutputDTO getBankTransferById(Long id) {
        BankTransfer bankTransfer = bankTransferRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("BankTransfer not found"));

        return mapToDTO(bankTransfer);
    }

    @Override
    public void deleteBankTransfer(Long id) {
        bankTransferRepository.deleteById(id);
    }

    private BankTransferOutputDTO mapToDTO(BankTransfer bankTransfer) {
        return new BankTransferOutputDTO(
                bankTransfer.getId(),
                bankTransfer.getBooking().getId(),  // Fetch Booking ID from the relationship
                bankTransfer.getBankName(),
                bankTransfer.getAccountNumber(),
                bankTransfer.getAccountHolder(),
                bankTransfer.getTransferReference(),
                bankTransfer.getPaymentSlip(),
                bankTransfer.getStatus()
        );
    }
}