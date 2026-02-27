//////package com.frac.frac_backend.service.impl;
//////
//////import com.frac.frac_backend.dto.PaymentInputDTO;
//////import com.frac.frac_backend.dto.PaymentOutputDTO;
//////import com.frac.frac_backend.entity.Booking;
//////import com.frac.frac_backend.entity.Payment;
//////import com.frac.frac_backend.repository.BookingRepository;
//////import com.frac.frac_backend.repository.PaymentRepository;
//////import com.frac.frac_backend.service.PaymentService;
//////import com.frac.frac_backend.util.PaymentPdfGenerator;
//////import org.springframework.beans.factory.annotation.Autowired;
//////import org.springframework.stereotype.Service;
//////
//////import java.time.LocalDateTime;
//////
//////@Service
//////public class PaymentServiceImpl implements PaymentService {
//////
//////    @Autowired
//////    private PaymentRepository paymentRepository;
//////
//////    @Autowired
//////    private BookingRepository bookingRepository;
//////
//////    @Override
//////    public PaymentOutputDTO createPaymentAndReceipt(PaymentInputDTO dto) {
//////
//////        Booking booking = bookingRepository.findById(dto.getBookingId())
//////                .orElseThrow(() -> new RuntimeException("Booking not found"));
//////
//////        // Prevent duplicate payment for same booking (optional)
//////        paymentRepository.findByBooking_Id(booking.getId())
//////                .ifPresent(p -> { throw new RuntimeException("Payment already exists for this booking"); });
//////
//////        Payment payment = Payment.builder()
//////                .booking(booking)
//////                .customer(booking.getCustomer())
//////                .vehicle(booking.getVehicle())
//////                .agent(booking.getAgent())
//////                .amount(dto.getAmount())
//////                .currency(dto.getCurrency() == null ? "LKR" : dto.getCurrency())
//////                .paidAt(LocalDateTime.now())
//////                .paymentMethod(dto.getPaymentMethod())
//////                .paymentStatus(dto.getPaymentStatus())
//////                .maskedCardNumber(dto.getMaskedCardNumber())
//////                .cardLast4(dto.getCardLast4())
//////                .cardBrand(dto.getCardBrand())
//////                .paymentReference(dto.getPaymentReference())
//////                .build();
//////
//////        // generate pdf receipt
//////        byte[] pdfBytes = PaymentPdfGenerator.generateReceiptPdf(payment, booking);
//////
//////        payment.setPdfFileName("payment_receipt_booking_" + booking.getId() + ".pdf");
//////        payment.setPdfContentType("application/pdf");
//////        payment.setPdfData(pdfBytes);
//////
//////        Payment saved = paymentRepository.save(payment);
//////
//////        return mapToOutput(saved);
//////    }
//////
//////    @Override
//////    public byte[] downloadReceiptPdf(Long paymentId) {
//////        Payment payment = paymentRepository.findById(paymentId)
//////                .orElseThrow(() -> new RuntimeException("Payment not found"));
//////
//////        if (payment.getPdfData() == null) {
//////            throw new RuntimeException("No PDF found for this payment");
//////        }
//////        return payment.getPdfData();
//////    }
//////
//////    @Override
//////    public PaymentOutputDTO getPaymentByBookingId(Long bookingId) {
//////        Payment payment = paymentRepository.findByBooking_Id(bookingId)
//////                .orElseThrow(() -> new RuntimeException("Payment not found for this booking"));
//////        return mapToOutput(payment);
//////    }
//////
//////    private PaymentOutputDTO mapToOutput(Payment payment) {
//////        return PaymentOutputDTO.builder()
//////                .id(payment.getId())
//////                .bookingId(payment.getBooking().getId())
//////                .amount(payment.getAmount())
//////                .currency(payment.getCurrency())
//////                .paidAt(payment.getPaidAt())
//////                .paymentMethod(payment.getPaymentMethod())
//////                .paymentStatus(payment.getPaymentStatus())
//////                .maskedCardNumber(payment.getMaskedCardNumber())
//////                .cardLast4(payment.getCardLast4())
//////                .cardBrand(payment.getCardBrand())
//////                .paymentReference(payment.getPaymentReference())
//////                .hasPdf(payment.getPdfData() != null)
//////                .build();
//////    }
//////}
////
////
////
////package com.frac.frac_backend.service.impl;
////
////import com.frac.frac_backend.dto.PaymentInputDTO;
////import com.frac.frac_backend.dto.PaymentOutputDTO;
////import com.frac.frac_backend.entity.Booking;
////import com.frac.frac_backend.entity.Payment;
////import com.frac.frac_backend.repository.BookingRepository;
////import com.frac.frac_backend.repository.PaymentRepository;
////import com.frac.frac_backend.service.PaymentService;
////import com.frac.frac_backend.util.PaymentPdfGenerator;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.stereotype.Service;
////
////import java.time.LocalDateTime;
////
////@Service
////public class PaymentServiceImpl implements PaymentService {
////
////    @Autowired
////    private PaymentRepository paymentRepository;
////
////    @Autowired
////    private BookingRepository bookingRepository;
////
////    @Override
////    public PaymentOutputDTO createPaymentAndReceipt(PaymentInputDTO dto) {
////
////        Booking booking = bookingRepository.findById(dto.getBookingId())
////                .orElseThrow(() -> new RuntimeException("Booking not found"));
////
////        // Prevent duplicates (1 booking -> 1 payment)
////        paymentRepository.findByBooking_Id(booking.getId())
////                .ifPresent(p -> { throw new RuntimeException("Payment already exists for this booking"); });
////
////        Payment payment = Payment.builder()
////                .booking(booking)
////                .customer(booking.getCustomer())
////                .vehicle(booking.getVehicle())
////                .agent(booking.getAgent())
////                .amount(dto.getAmount())
////                .currency(dto.getCurrency() == null ? "LKR" : dto.getCurrency())
////                .paidAt(LocalDateTime.now())
////                .paymentMethod(dto.getPaymentMethod())
////                .paymentStatus(dto.getPaymentStatus())
////                .maskedCardNumber(dto.getMaskedCardNumber())
////                .cardLast4(dto.getCardLast4())
////                .cardBrand(dto.getCardBrand())
////                .paymentReference(dto.getPaymentReference())
////                .build();
////
////        // Generate PDF
////        byte[] pdfBytes = PaymentPdfGenerator.generateReceiptPdf(payment, booking);
////
////        payment.setPdfFileName("payment_receipt_booking_" + booking.getId() + ".pdf");
////        payment.setPdfContentType("application/pdf");
////        payment.setPdfData(pdfBytes);
////
////        Payment saved = paymentRepository.save(payment);
////        return mapToOutput(saved);
////    }
////
////    @Override
////    public byte[] downloadReceiptPdf(Long paymentId) {
////        Payment payment = paymentRepository.findById(paymentId)
////                .orElseThrow(() -> new RuntimeException("Payment not found"));
////
////        if (payment.getPdfData() == null) {
////            throw new RuntimeException("No PDF found for this payment");
////        }
////        return payment.getPdfData();
////    }
////
////    @Override
////    public PaymentOutputDTO getPaymentByBookingId(Long bookingId) {
////        Payment payment = paymentRepository.findByBooking_Id(bookingId)
////                .orElseThrow(() -> new RuntimeException("Payment not found for this booking"));
////        return mapToOutput(payment);
////    }
////
////    private PaymentOutputDTO mapToOutput(Payment payment) {
////        return PaymentOutputDTO.builder()
////                .id(payment.getId())
////                .bookingId(payment.getBooking().getId())
////                .amount(payment.getAmount())
////                .currency(payment.getCurrency())
////                .paidAt(payment.getPaidAt())
////                .paymentMethod(payment.getPaymentMethod())
////                .paymentStatus(payment.getPaymentStatus())
////                .maskedCardNumber(payment.getMaskedCardNumber())
////                .cardLast4(payment.getCardLast4())
////                .cardBrand(payment.getCardBrand())
////                .paymentReference(payment.getPaymentReference())
////                .hasPdf(payment.getPdfData() != null)
////                .build();
////    }
////}
//
//
//package com.frac.frac_backend.service.impl;
//
//import com.frac.frac_backend.dto.PaymentInputDTO;
//import com.frac.frac_backend.dto.PaymentOutputDTO;
//import com.frac.frac_backend.entity.Booking;
//import com.frac.frac_backend.entity.Payment;
//import com.frac.frac_backend.enums.PaymentStatus;
//import com.frac.frac_backend.repository.BookingRepository;
//import com.frac.frac_backend.repository.PaymentRepository;
//import com.frac.frac_backend.service.PaymentService;
//import com.frac.frac_backend.util.PaymentPdfGenerator;
//import jakarta.transaction.Transactional;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//
//@Service
//public class PaymentServiceImpl implements PaymentService {
//
//    @Autowired
//    private PaymentRepository paymentRepository;
//
//    @Autowired
//    private BookingRepository bookingRepository;
//
//    @Transactional
//    @Override
//    public PaymentOutputDTO createPaymentAndReceipt(PaymentInputDTO dto) {
//
//        Booking booking = bookingRepository.findById(dto.getBookingId())
//                .orElseThrow(() -> new RuntimeException("Booking not found"));
//
//        // Prevent duplicate payment for same booking
//        paymentRepository.findByBooking_Id(booking.getId())
//                .ifPresent(p -> { throw new RuntimeException("Payment already exists for this booking"); });
//
//        Payment payment = Payment.builder()
//                .booking(booking)
//                .customer(booking.getCustomer())
//                .vehicle(booking.getVehicle())
//                .agent(booking.getAgent())
//                .amount(dto.getAmount())
//                .currency(dto.getCurrency() == null ? "LKR" : dto.getCurrency())
//                .paidAt(LocalDateTime.now())
//                .paymentMethod(dto.getPaymentMethod())
//                .paymentStatus(dto.getPaymentStatus())
//                .maskedCardNumber(dto.getMaskedCardNumber())
//                .cardLast4(dto.getCardLast4())
//                .cardBrand(dto.getCardBrand())
//                .paymentReference(dto.getPaymentReference())
//                .build();
//
//        // Generate PDF
//        byte[] pdfBytes = PaymentPdfGenerator.generateReceiptPdf(payment, booking);
//        payment.setPdfFileName("payment_receipt_booking_" + booking.getId() + ".pdf");
//        payment.setPdfContentType("application/pdf");
//        payment.setPdfData(pdfBytes);
//
//        // Save payment
//        Payment savedPayment = paymentRepository.save(payment);
//
//        // ✅ Update booking payment status if payment is PAID
//        if (savedPayment.getPaymentStatus() == PaymentStatus.PAID) {
//            booking.setPaymentStatus(PaymentStatus.PAID);
//            bookingRepository.save(booking);
//        }
//
//        return mapToOutput(savedPayment);
//    }
//
//    @Override
//    public byte[] downloadReceiptPdf(Long paymentId) {
//        Payment payment = paymentRepository.findById(paymentId)
//                .orElseThrow(() -> new RuntimeException("Payment not found"));
//
//        if (payment.getPdfData() == null) {
//            throw new RuntimeException("No PDF found for this payment");
//        }
//        return payment.getPdfData();
//    }
//
//    @Override
//    public PaymentOutputDTO getPaymentByBookingId(Long bookingId) {
//        Payment payment = paymentRepository.findByBooking_Id(bookingId)
//                .orElseThrow(() -> new RuntimeException("Payment not found for this booking"));
//
//        return mapToOutput(payment);
//    }
//
//    private PaymentOutputDTO mapToOutput(Payment payment) {
//        return PaymentOutputDTO.builder()
//                .id(payment.getId())
//                .bookingId(payment.getBooking().getId())
//                .amount(payment.getAmount())
//                .currency(payment.getCurrency())
//                .paidAt(payment.getPaidAt())
//                .paymentMethod(payment.getPaymentMethod())
//                .paymentStatus(payment.getPaymentStatus())
//                .maskedCardNumber(payment.getMaskedCardNumber())
//                .cardLast4(payment.getCardLast4())
//                .cardBrand(payment.getCardBrand())
//                .paymentReference(payment.getPaymentReference())
//                .hasPdf(payment.getPdfData() != null)
//                .build();
//    }
//}



package com.frac.frac_backend.service.impl;

import com.frac.frac_backend.dto.PaymentInputDTO;
import com.frac.frac_backend.dto.PaymentOutputDTO;
import com.frac.frac_backend.entity.Booking;
import com.frac.frac_backend.entity.Payment;
import com.frac.frac_backend.enums.PaymentStatus;
import com.frac.frac_backend.repository.BookingRepository;
import com.frac.frac_backend.repository.PaymentRepository;
import com.frac.frac_backend.service.PaymentService;
import com.frac.frac_backend.util.PaymentPdfGenerator;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Transactional
    @Override
    public PaymentOutputDTO createPaymentAndReceipt(PaymentInputDTO dto) {

        Booking booking = bookingRepository.findById(dto.getBookingId())
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        // If you want ONLY 1 payment per booking, keep this check:
        paymentRepository.findByBooking_Id(booking.getId())
                .ifPresent(p -> { throw new RuntimeException("Payment already exists for this booking"); });

        PaymentStatus status = dto.getPaymentStatus();
        if (status == null) {
            status = PaymentStatus.PENDING;
        }

        Payment payment = Payment.builder()
                .booking(booking)
                .customer(booking.getCustomer())
                .vehicle(booking.getVehicle())
                .agent(booking.getAgent())
                .amount(dto.getAmount())
                .currency(dto.getCurrency() == null ? "LKR" : dto.getCurrency())
                .paidAt(LocalDateTime.now())
                .paymentMethod(dto.getPaymentMethod())
                .paymentStatus(status)
                .maskedCardNumber(dto.getMaskedCardNumber())
                .cardLast4(dto.getCardLast4())
                .cardBrand(dto.getCardBrand())
                .paymentReference(dto.getPaymentReference())
                .build();

        // Generate PDF
        byte[] pdfBytes = PaymentPdfGenerator.generateReceiptPdf(payment, booking);
        payment.setPdfFileName("payment_receipt_booking_" + booking.getId() + ".pdf");
        payment.setPdfContentType("application/pdf");
        payment.setPdfData(pdfBytes);

        // Save payment
        Payment savedPayment = paymentRepository.save(payment);

        // ✅ ALWAYS sync booking.paymentStatus to payment.paymentStatus
        booking.setPaymentStatus(savedPayment.getPaymentStatus());
        bookingRepository.save(booking);

        return mapToOutput(savedPayment);
    }

    @Override
    public byte[] downloadReceiptPdf(Long paymentId) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new RuntimeException("Payment not found"));

        if (payment.getPdfData() == null) {
            throw new RuntimeException("No PDF found for this payment");
        }
        return payment.getPdfData();
    }

    @Override
    public PaymentOutputDTO getPaymentByBookingId(Long bookingId) {
        Payment payment = paymentRepository.findByBooking_Id(bookingId)
                .orElseThrow(() -> new RuntimeException("Payment not found for this booking"));

        return mapToOutput(payment);
    }

    private PaymentOutputDTO mapToOutput(Payment payment) {
        return PaymentOutputDTO.builder()
                .id(payment.getId())
                .bookingId(payment.getBooking().getId())
                .amount(payment.getAmount())
                .currency(payment.getCurrency())
                .paidAt(payment.getPaidAt())
                .paymentMethod(payment.getPaymentMethod())
                .paymentStatus(payment.getPaymentStatus())
                .maskedCardNumber(payment.getMaskedCardNumber())
                .cardLast4(payment.getCardLast4())
                .cardBrand(payment.getCardBrand())
                .paymentReference(payment.getPaymentReference())
                .hasPdf(payment.getPdfData() != null)
                .build();
    }
}