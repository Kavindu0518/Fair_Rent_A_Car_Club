//////////package com.frac.frac_backend.util;
//////////
//////////import com.frac.frac_backend.entity.Booking;
//////////import com.frac.frac_backend.entity.Payment;
//////////import com.lowagie.text.Document;
//////////import com.lowagie.text.Paragraph;
//////////import com.lowagie.text.pdf.PdfWriter;
//////////
//////////import java.io.ByteArrayOutputStream;
//////////
//////////public class PaymentPdfGenerator {
//////////
//////////    public static byte[] generateReceiptPdf(Payment payment, Booking booking) {
//////////        try {
//////////            ByteArrayOutputStream baos = new ByteArrayOutputStream();
//////////            Document document = new Document();
//////////            PdfWriter.getInstance(document, baos);
//////////
//////////            document.open();
//////////
//////////            document.add(new Paragraph("FRAC - Payment Receipt"));
//////////            document.add(new Paragraph(" "));
//////////            document.add(new Paragraph("Receipt Ref: " + safe(payment.getPaymentReference())));
//////////            document.add(new Paragraph("Payment Status: " + payment.getPaymentStatus()));
//////////            document.add(new Paragraph("Payment Method: " + payment.getPaymentMethod()));
//////////            document.add(new Paragraph("Paid At: " + payment.getPaidAt()));
//////////            document.add(new Paragraph("Amount: " + payment.getAmount() + " " + safe(payment.getCurrency())));
//////////
//////////            document.add(new Paragraph(" "));
//////////            document.add(new Paragraph("Booking Details"));
//////////            document.add(new Paragraph("Booking ID: " + booking.getId()));
//////////            document.add(new Paragraph("Pickup Date: " + booking.getPickupDate()));
//////////            document.add(new Paragraph("DropOff Date: " + booking.getDropOffDate()));
//////////            document.add(new Paragraph("Pickup Location: " + safe(booking.getPickupLocation())));
//////////            document.add(new Paragraph("DropOff Location: " + safe(booking.getDropOffLocation())));
//////////
//////////            if (payment.getPaymentMethod() != null && payment.getPaymentMethod().name().equals("CARD")) {
//////////                document.add(new Paragraph(" "));
//////////                document.add(new Paragraph("Card: " + safe(payment.getMaskedCardNumber())));
//////////                document.add(new Paragraph("Brand: " + safe(payment.getCardBrand())));
//////////            }
//////////
//////////            document.close();
//////////            return baos.toByteArray();
//////////        } catch (Exception e) {
//////////            throw new RuntimeException("PDF generation failed: " + e.getMessage());
//////////        }
//////////    }
//////////
//////////    private static String safe(String s) {
//////////        return s == null ? "" : s;
//////////    }
//////////}
////////
////////
////////package com.frac.frac_backend.util;
////////
////////import com.frac.frac_backend.entity.Booking;
////////import com.frac.frac_backend.entity.Payment;
////////import com.lowagie.text.*;
////////import com.lowagie.text.Font;
////////import com.lowagie.text.pdf.PdfPCell;
////////import com.lowagie.text.pdf.PdfPTable;
////////import com.lowagie.text.pdf.PdfWriter;
////////
////////import java.awt.Color;
////////import java.io.ByteArrayOutputStream;
////////import java.time.format.DateTimeFormatter;
////////
////////public class PaymentPdfGenerator {
////////
////////    // Custom colors
////////    private static final Color PRIMARY_COLOR = new Color(41, 128, 185); // Blue
////////    private static final Color SECONDARY_COLOR = new Color(52, 73, 94); // Dark Gray
////////    private static final Color SUCCESS_COLOR = new Color(46, 204, 113); // Green
////////    private static final Color BORDER_COLOR = new Color(189, 195, 199); // Light Gray
////////    private static final Color BACKGROUND_COLOR = new Color(236, 240, 241); // Light Grayish
////////
////////    // Fonts
////////    private static final Font TITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 24, PRIMARY_COLOR);
////////    private static final Font HEADER_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, SECONDARY_COLOR);
////////    private static final Font SUBHEADER_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, SECONDARY_COLOR);
////////    private static final Font NORMAL_FONT = FontFactory.getFont(FontFactory.HELVETICA, 10, Color.BLACK);
////////    private static final Font LABEL_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, SECONDARY_COLOR);
////////    private static final Font AMOUNT_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 16, SUCCESS_COLOR);
////////
////////    public static byte[] generateReceiptPdf(Payment payment, Booking booking) {
////////        try {
////////            ByteArrayOutputStream baos = new ByteArrayOutputStream();
////////            Document document = new Document(PageSize.A4);
////////            PdfWriter.getInstance(document, baos);
////////
////////            document.open();
////////
////////            // Add header with logo-like design
////////            addHeader(document);
////////
////////            // Add receipt title and status
////////            addReceiptTitle(document, payment);
////////
////////            // Add payment details in a table
////////            addPaymentDetails(document, payment);
////////
////////            // Add booking details in a table
////////            addBookingDetails(document, booking);
////////
////////            // Add card details if applicable
////////            if (payment.getPaymentMethod() != null && payment.getPaymentMethod().name().equals("CARD")) {
////////                addCardDetails(document, payment);
////////            }
////////
////////            // Add footer
////////            addFooter(document);
////////
////////            document.close();
////////            return baos.toByteArray();
////////
////////        } catch (Exception e) {
////////            throw new RuntimeException("PDF generation failed: " + e.getMessage());
////////        }
////////    }
////////
////////    private static void addHeader(Document document) throws DocumentException {
////////        PdfPTable headerTable = new PdfPTable(2);
////////        headerTable.setWidthPercentage(100);
////////
////////        // Company name/logo placeholder
////////        Paragraph companyPara = new Paragraph();
////////        companyPara.add(new Chunk("FRAC", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 28, PRIMARY_COLOR)));
////////        companyPara.add(new Chunk("\n", NORMAL_FONT));
////////        companyPara.add(new Chunk("Vehicle Rentals", FontFactory.getFont(FontFactory.HELVETICA, 10, SECONDARY_COLOR)));
////////
////////        PdfPCell companyCell = new PdfPCell(companyPara);
////////        companyCell.setBorder(Rectangle.NO_BORDER);
////////        companyCell.setPadding(10);
////////        headerTable.addCell(companyCell);
////////
////////        // Receipt badge
////////        Paragraph receiptBadge = new Paragraph("RECEIPT", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, Color.WHITE));
////////        receiptBadge.setAlignment(Element.ALIGN_RIGHT);
////////
////////        PdfPCell badgeCell = new PdfPCell(receiptBadge);
////////        badgeCell.setBorder(Rectangle.NO_BORDER);
////////        badgeCell.setBackgroundColor(PRIMARY_COLOR);
////////        badgeCell.setPadding(10);
////////        badgeCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
////////        headerTable.addCell(badgeCell);
////////
////////        document.add(headerTable);
////////        document.add(new Paragraph(" "));
////////    }
////////
////////    private static void addReceiptTitle(Document document, Payment payment) throws DocumentException {
////////        PdfPTable titleTable = new PdfPTable(2);
////////        titleTable.setWidthPercentage(100);
////////
////////        // Receipt reference
////////        Paragraph refPara = new Paragraph();
////////        refPara.add(new Chunk("Receipt No: ", LABEL_FONT));
////////        refPara.add(new Chunk(safe(payment.getPaymentReference()), NORMAL_FONT));
////////
////////        PdfPCell refCell = new PdfPCell(refPara);
////////        refCell.setBorder(Rectangle.NO_BORDER);
////////        refCell.setPadding(5);
////////        titleTable.addCell(refCell);
////////
////////        // Date
////////        Paragraph datePara = new Paragraph();
////////        datePara.add(new Chunk("Date: ", LABEL_FONT));
////////        if (payment.getPaidAt() != null) {
////////            datePara.add(new Chunk(payment.getPaidAt().format(DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm")), NORMAL_FONT));
////////        }
////////
////////        PdfPCell dateCell = new PdfPCell(datePara);
////////        dateCell.setBorder(Rectangle.NO_BORDER);
////////        dateCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
////////        dateCell.setPadding(5);
////////        titleTable.addCell(dateCell);
////////
////////        document.add(titleTable);
////////        document.add(new Paragraph(" "));
////////    }
////////
////////    private static void addPaymentDetails(Document document, Payment payment) throws DocumentException {
////////        // Section header
////////        Paragraph paymentHeader = new Paragraph("PAYMENT DETAILS", HEADER_FONT);
////////        paymentHeader.setSpacingBefore(10);
////////        paymentHeader.setSpacingAfter(5);
////////        document.add(paymentHeader);
////////
////////        // Payment details table
////////        PdfPTable paymentTable = new PdfPTable(2);
////////        paymentTable.setWidthPercentage(100);
////////        paymentTable.setSpacingAfter(10);
////////
////////        addDetailRow(paymentTable, "Payment Status:", String.valueOf(payment.getPaymentStatus()));
////////        addDetailRow(paymentTable, "Payment Method:", payment.getPaymentMethod() != null ? payment.getPaymentMethod().name() : "");
////////        addDetailRow(paymentTable, "Transaction Date:", payment.getPaidAt() != null ?
////////                payment.getPaidAt().format(DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm:ss")) : "");
////////
////////        // Amount row with special styling
////////        PdfPCell amountLabelCell = new PdfPCell(new Paragraph("Amount:", LABEL_FONT));
////////        amountLabelCell.setBorder(Rectangle.BOTTOM | Rectangle.TOP);
////////        amountLabelCell.setBorderColor(BORDER_COLOR);
////////        amountLabelCell.setPadding(5);
////////        amountLabelCell.setBackgroundColor(BACKGROUND_COLOR);
////////        paymentTable.addCell(amountLabelCell);
////////
////////        PdfPCell amountValueCell = new PdfPCell(new Paragraph(payment.getAmount() + " " + safe(payment.getCurrency()), AMOUNT_FONT));
////////        amountValueCell.setBorder(Rectangle.BOTTOM | Rectangle.TOP);
////////        amountValueCell.setBorderColor(BORDER_COLOR);
////////        amountValueCell.setPadding(5);
////////        amountValueCell.setBackgroundColor(BACKGROUND_COLOR);
////////        paymentTable.addCell(amountValueCell);
////////
////////        document.add(paymentTable);
////////    }
////////
////////    private static void addBookingDetails(Document document, Booking booking) throws DocumentException {
////////        // Section header
////////        Paragraph bookingHeader = new Paragraph("BOOKING DETAILS", HEADER_FONT);
////////        bookingHeader.setSpacingBefore(15);
////////        bookingHeader.setSpacingAfter(5);
////////        document.add(bookingHeader);
////////
////////        // Booking details table
////////        PdfPTable bookingTable = new PdfPTable(2);
////////        bookingTable.setWidthPercentage(100);
////////        bookingTable.setSpacingAfter(10);
////////
////////        addDetailRow(bookingTable, "Booking ID:", String.valueOf(booking.getId()));
////////        addDetailRow(bookingTable, "Pickup Date:", booking.getPickupDate() != null ?
////////                booking.getPickupDate().format(DateTimeFormatter.ofPattern("dd MMM yyyy")) : "");
////////        addDetailRow(bookingTable, "DropOff Date:", booking.getDropOffDate() != null ?
////////                booking.getDropOffDate().format(DateTimeFormatter.ofPattern("dd MMM yyyy")) : "");
////////        addDetailRow(bookingTable, "Pickup Location:", safe(booking.getPickupLocation()));
////////        addDetailRow(bookingTable, "DropOff Location:", safe(booking.getDropOffLocation()));
////////
////////        document.add(bookingTable);
////////    }
////////
////////    private static void addCardDetails(Document document, Payment payment) throws DocumentException {
////////        // Section header
////////        Paragraph cardHeader = new Paragraph("CARD DETAILS", HEADER_FONT);
////////        cardHeader.setSpacingBefore(15);
////////        cardHeader.setSpacingAfter(5);
////////        document.add(cardHeader);
////////
////////        // Card details table
////////        PdfPTable cardTable = new PdfPTable(2);
////////        cardTable.setWidthPercentage(100);
////////        cardTable.setSpacingAfter(10);
////////
////////        addDetailRow(cardTable, "Card Number:", safe(payment.getMaskedCardNumber()));
////////        addDetailRow(cardTable, "Card Brand:", safe(payment.getCardBrand()));
////////
////////        document.add(cardTable);
////////    }
////////
////////    private static void addFooter(Document document) throws DocumentException {
////////        document.add(new Paragraph(" "));
////////
////////        // Horizontal line
////////        PdfPTable lineTable = new PdfPTable(1);
////////        lineTable.setWidthPercentage(100);
////////        PdfPCell lineCell = new PdfPCell(new Paragraph(" "));
////////        lineCell.setBorder(Rectangle.TOP);
////////        lineCell.setBorderColor(BORDER_COLOR);
////////        lineCell.setPadding(10);
////////        lineTable.addCell(lineCell);
////////        document.add(lineTable);
////////
////////        // Footer text
////////        Paragraph footer = new Paragraph();
////////        footer.add(new Chunk("Thank you for choosing FRAC Vehicle Rentals!",
////////                FontFactory.getFont(FontFactory.HELVETICA, 10, PRIMARY_COLOR)));
////////        footer.setAlignment(Element.ALIGN_CENTER);
////////        document.add(footer);
////////
////////        Paragraph contactInfo = new Paragraph();
////////        contactInfo.add(new Chunk("Contact: support@frac.com | +94 11 234 5678",
////////                FontFactory.getFont(FontFactory.HELVETICA, 8, SECONDARY_COLOR)));
////////        contactInfo.setAlignment(Element.ALIGN_CENTER);
////////        document.add(contactInfo);
////////    }
////////
////////    private static void addDetailRow(PdfPTable table, String label, String value) {
////////        PdfPCell labelCell = new PdfPCell(new Paragraph(label, LABEL_FONT));
////////        labelCell.setBorder(Rectangle.BOTTOM);
////////        labelCell.setBorderColor(BORDER_COLOR);
////////        labelCell.setPadding(5);
////////        table.addCell(labelCell);
////////
////////        PdfPCell valueCell = new PdfPCell(new Paragraph(value, NORMAL_FONT));
////////        valueCell.setBorder(Rectangle.BOTTOM);
////////        valueCell.setBorderColor(BORDER_COLOR);
////////        valueCell.setPadding(5);
////////        table.addCell(valueCell);
////////    }
////////
////////    private static String safe(String s) {
////////        return s == null ? "" : s;
////////    }
////////}
//////
//////
//////package com.frac.frac_backend.util;
//////
//////import com.frac.frac_backend.entity.Booking;
//////import com.frac.frac_backend.entity.Payment;
//////import com.lowagie.text.Document;
//////import com.lowagie.text.Paragraph;
//////import com.lowagie.text.pdf.PdfWriter;
//////
//////import java.io.ByteArrayOutputStream;
//////import java.time.LocalDate;
//////import java.time.LocalDateTime;
//////import java.time.format.DateTimeFormatter;
//////
//////public class PaymentPdfGenerator {
//////
//////    private static final DateTimeFormatter DATE_FMT = DateTimeFormatter.ofPattern("yyyy-MM-dd");
//////    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
//////
//////    public static byte[] generateReceiptPdf(Payment payment, Booking booking) {
//////        try {
//////            ByteArrayOutputStream baos = new ByteArrayOutputStream();
//////            Document document = new Document();
//////            PdfWriter.getInstance(document, baos);
//////
//////            document.open();
//////
//////            document.add(new Paragraph("FRAC - Payment Receipt"));
//////            document.add(new Paragraph(" "));
//////
//////            // Customer / Agent / Vehicle
//////            String customerName = safe(booking.getCustomer().getFirstName()) + " " + safe(booking.getCustomer().getLastName());
//////            String agentName = safe(booking.getAgent().getCompanyName());
//////            String vehicleInfo = safe(booking.getVehicle().getMakeModel()) + " (" + safe(booking.getVehicle().getRegNumber()) + ")";
//////
//////            document.add(new Paragraph("Customer: " + customerName.trim()));
//////            document.add(new Paragraph("Agent: " + agentName));
//////            document.add(new Paragraph("Vehicle: " + vehicleInfo));
//////
//////            document.add(new Paragraph(" "));
//////            document.add(new Paragraph("Booking Details"));
//////            document.add(new Paragraph("Booking ID: " + booking.getId()));
//////            document.add(new Paragraph("Pickup Date: " + formatDate(booking.getPickupDate())));
//////            document.add(new Paragraph("DropOff Date: " + formatDate(booking.getDropOffDate())));
//////            document.add(new Paragraph("Pickup Location: " + safe(booking.getPickupLocation())));
//////            document.add(new Paragraph("DropOff Location: " + safe(booking.getDropOffLocation())));
//////
//////            document.add(new Paragraph(" "));
//////            document.add(new Paragraph("Extras"));
//////            document.add(new Paragraph("GPS Included: " + (booking.isGpsIncluded() ? "YES" : "NO")));
//////            document.add(new Paragraph("Child Seat Included: " + (booking.isChildSeatIncluded() ? "YES" : "NO")));
//////
//////            document.add(new Paragraph(" "));
//////            document.add(new Paragraph("Payment Details"));
//////            document.add(new Paragraph("Reference: " + safe(payment.getPaymentReference())));
//////            document.add(new Paragraph("Status: " + safeEnum(payment.getPaymentStatus())));
//////            document.add(new Paragraph("Method: " + safeEnum(payment.getPaymentMethod())));
//////            document.add(new Paragraph("Paid At: " + formatDateTime(payment.getPaidAt())));
//////            document.add(new Paragraph("Amount: " + payment.getAmount() + " " + safe(payment.getCurrency())));
//////
//////            if (payment.getPaymentMethod() != null && payment.getPaymentMethod().name().equals("CARD")) {
//////                document.add(new Paragraph("Card: " + safe(payment.getMaskedCardNumber())));
//////                document.add(new Paragraph("Brand: " + safe(payment.getCardBrand())));
//////            }
//////
//////            document.close();
//////            return baos.toByteArray();
//////
//////        } catch (Exception e) {
//////            throw new RuntimeException("PDF generation failed: " + e.getMessage(), e);
//////        }
//////    }
//////
//////    private static String formatDate(LocalDate date) {
//////        return date == null ? "" : date.format(DATE_FMT);
//////    }
//////
//////    private static String formatDateTime(LocalDateTime dt) {
//////        return dt == null ? "" : dt.format(DATETIME_FMT);
//////    }
//////
//////    private static String safe(String s) {
//////        return s == null ? "" : s;
//////    }
//////
//////    private static String safeEnum(Object e) {
//////        return e == null ? "" : e.toString();
//////    }
//////}
////
////
////
////package com.frac.frac_backend.util;
////
////import com.frac.frac_backend.entity.Booking;
////import com.frac.frac_backend.entity.Payment;
////import com.lowagie.text.*;
////import com.lowagie.text.Font;
////import com.lowagie.text.pdf.PdfPCell;
////import com.lowagie.text.pdf.PdfPTable;
////import com.lowagie.text.pdf.PdfWriter;
////
////import java.awt.Color;
////import java.io.ByteArrayOutputStream;
////import java.time.LocalDate;
////import java.time.LocalDateTime;
////import java.time.format.DateTimeFormatter;
////
////public class PaymentPdfGenerator {
////
////    private static final DateTimeFormatter DATE_FMT = DateTimeFormatter.ofPattern("dd MMM yyyy");
////    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm:ss");
////
////    // Custom colors
////    private static final Color PRIMARY_COLOR = new Color(52, 73, 94);      // Dark blue-gray
////    private static final Color SECONDARY_COLOR = new Color(41, 128, 185);  // Bright blue
////    private static final Color ACCENT_COLOR = new Color(46, 204, 113);     // Green
////    private static final Color WARNING_COLOR = new Color(241, 196, 15);    // Yellow
////    private static final Color LIGHT_GRAY = new Color(236, 240, 241);      // Light gray
////    private static final Color BORDER_COLOR = new Color(189, 195, 199);    // Medium gray
////
////    // Fonts
////    private static final Font TITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 24, PRIMARY_COLOR);
////    private static final Font SUBTITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, SECONDARY_COLOR);
////    private static final Font HEADER_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, PRIMARY_COLOR);
////    private static final Font LABEL_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, PRIMARY_COLOR);
////    private static final Font NORMAL_FONT = FontFactory.getFont(FontFactory.HELVETICA, 10, Color.BLACK);
////    private static final Font AMOUNT_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 16, ACCENT_COLOR);
////    private static final Font STATUS_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, Color.WHITE);
////
////    public static byte[] generateReceiptPdf(Payment payment, Booking booking) {
////        try {
////            ByteArrayOutputStream baos = new ByteArrayOutputStream();
////            Document document = new Document(PageSize.A4);
////            PdfWriter.getInstance(document, baos);
////
////            document.open();
////
////            // Add header with company branding
////            addHeader(document);
////
////            // Add receipt information
////            addReceiptInfo(document, payment);
////
////            // Add customer and vehicle information
////            addCustomerVehicleInfo(document, booking);
////
////            // Add booking details
////            addBookingDetails(document, booking);
////
////            // Add extras
////            addExtras(document, booking);
////
////            // Add payment details
////            addPaymentDetails(document, payment);
////
////            // Add footer
////            addFooter(document);
////
////            document.close();
////            return baos.toByteArray();
////
////        } catch (Exception e) {
////            throw new RuntimeException("PDF generation failed: " + e.getMessage(), e);
////        }
////    }
////
////    private static void addHeader(Document document) throws DocumentException {
////        // Company header with gradient-like effect using tables
////        PdfPTable headerTable = new PdfPTable(2);
////        headerTable.setWidthPercentage(100);
////
////        // Company name and tagline
////        Paragraph companyPara = new Paragraph();
////        companyPara.add(new Chunk("FRAC", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 28, SECONDARY_COLOR)));
////        companyPara.add(new Chunk("\n", NORMAL_FONT));
////        companyPara.add(new Chunk("Vehicle Rentals", FontFactory.getFont(FontFactory.HELVETICA, 10, PRIMARY_COLOR)));
////
////        PdfPCell companyCell = new PdfPCell(companyPara);
////        companyCell.setBorder(Rectangle.NO_BORDER);
////        companyCell.setPadding(10);
////        headerTable.addCell(companyCell);
////
////        // Receipt badge
////        PdfPCell badgeCell = new PdfPCell(new Paragraph("PAYMENT RECEIPT",
////                FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, Color.WHITE)));
////        badgeCell.setBackgroundColor(SECONDARY_COLOR);
////        badgeCell.setBorder(Rectangle.NO_BORDER);
////        badgeCell.setPadding(10);
////        badgeCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
////        headerTable.addCell(badgeCell);
////
////        document.add(headerTable);
////        document.add(new Paragraph(" "));
////
////        // Decorative line
////        PdfPTable lineTable = new PdfPTable(1);
////        lineTable.setWidthPercentage(100);
////        PdfPCell lineCell = new PdfPCell(new Paragraph(" "));
////        lineCell.setBorder(Rectangle.TOP);
////        lineCell.setBorderColor(SECONDARY_COLOR);
////        lineCell.setBorderWidth(2);
////        lineCell.setPadding(5);
////        lineTable.addCell(lineCell);
////        document.add(lineTable);
////        document.add(new Paragraph(" "));
////    }
////
////    private static void addReceiptInfo(Document document, Payment payment) throws DocumentException {
////        PdfPTable receiptTable = new PdfPTable(2);
////        receiptTable.setWidthPercentage(100);
////
////        // Receipt reference
////        Paragraph refPara = new Paragraph();
////        refPara.add(new Chunk("Receipt No: ", LABEL_FONT));
////        refPara.add(new Chunk(safe(payment.getPaymentReference()), NORMAL_FONT));
////
////        PdfPCell refCell = new PdfPCell(refPara);
////        refCell.setBorder(Rectangle.NO_BORDER);
////        refCell.setPadding(5);
////        receiptTable.addCell(refCell);
////
////        // Date and status
////        Paragraph datePara = new Paragraph();
////        datePara.add(new Chunk("Date: ", LABEL_FONT));
////        datePara.add(new Chunk(formatDateTime(payment.getPaidAt()), NORMAL_FONT));
////
////        PdfPCell dateCell = new PdfPCell(datePara);
////        dateCell.setBorder(Rectangle.NO_BORDER);
////        dateCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
////        dateCell.setPadding(5);
////        receiptTable.addCell(dateCell);
////
////        document.add(receiptTable);
////
////        // Status badge
////        if (payment.getPaymentStatus() != null) {
////            Paragraph statusPara = new Paragraph("STATUS: " + payment.getPaymentStatus().toString(), STATUS_FONT);
////            statusPara.setAlignment(Element.ALIGN_RIGHT);
////
////            PdfPTable statusTable = new PdfPTable(1);
////            statusTable.setWidthPercentage(30);
////            statusTable.setHorizontalAlignment(Element.ALIGN_RIGHT);
////
////            PdfPCell statusCell = new PdfPCell(statusPara);
////            statusCell.setBackgroundColor(ACCENT_COLOR);
////            statusCell.setBorder(Rectangle.NO_BORDER);
////            statusCell.setPadding(8);
////            statusCell.setHorizontalAlignment(Element.ALIGN_CENTER);
////            statusTable.addCell(statusCell);
////
////            document.add(statusTable);
////        }
////
////        document.add(new Paragraph(" "));
////    }
////
////    private static void addCustomerVehicleInfo(Document document, Booking booking) throws DocumentException {
////        // Section title
////        Paragraph sectionTitle = new Paragraph("CUSTOMER & VEHICLE", SUBTITLE_FONT);
////        sectionTitle.setSpacingBefore(10);
////        sectionTitle.setSpacingAfter(5);
////        document.add(sectionTitle);
////
////        // Create a boxed section
////        PdfPTable infoTable = new PdfPTable(2);
////        infoTable.setWidthPercentage(100);
////        infoTable.setSpacingAfter(10);
////
////        // Customer info
////        String customerName = safe(booking.getCustomer().getFirstName()) + " " + safe(booking.getCustomer().getLastName());
////
////        PdfPCell customerLabelCell = new PdfPCell(new Paragraph("Customer:", LABEL_FONT));
////        customerLabelCell.setBorder(Rectangle.NO_BORDER);
////        customerLabelCell.setBackgroundColor(LIGHT_GRAY);
////        customerLabelCell.setPadding(8);
////        infoTable.addCell(customerLabelCell);
////
////        PdfPCell customerValueCell = new PdfPCell(new Paragraph(customerName.trim(), NORMAL_FONT));
////        customerValueCell.setBorder(Rectangle.NO_BORDER);
////        customerValueCell.setBackgroundColor(LIGHT_GRAY);
////        customerValueCell.setPadding(8);
////        infoTable.addCell(customerValueCell);
////
////        // Agent info
////        PdfPCell agentLabelCell = new PdfPCell(new Paragraph("Agent:", LABEL_FONT));
////        agentLabelCell.setBorder(Rectangle.NO_BORDER);
////        agentLabelCell.setPadding(8);
////        infoTable.addCell(agentLabelCell);
////
////        PdfPCell agentValueCell = new PdfPCell(new Paragraph(safe(booking.getAgent().getCompanyName()), NORMAL_FONT));
////        agentValueCell.setBorder(Rectangle.NO_BORDER);
////        agentValueCell.setPadding(8);
////        infoTable.addCell(agentValueCell);
////
////        // Vehicle info
////        String vehicleInfo = safe(booking.getVehicle().getMakeModel()) + " (" + safe(booking.getVehicle().getRegNumber()) + ")";
////
////        PdfPCell vehicleLabelCell = new PdfPCell(new Paragraph("Vehicle:", LABEL_FONT));
////        vehicleLabelCell.setBorder(Rectangle.NO_BORDER);
////        vehicleLabelCell.setBackgroundColor(LIGHT_GRAY);
////        vehicleLabelCell.setPadding(8);
////        infoTable.addCell(vehicleLabelCell);
////
////        PdfPCell vehicleValueCell = new PdfPCell(new Paragraph(vehicleInfo, NORMAL_FONT));
////        vehicleValueCell.setBorder(Rectangle.NO_BORDER);
////        vehicleValueCell.setBackgroundColor(LIGHT_GRAY);
////        vehicleValueCell.setPadding(8);
////        infoTable.addCell(vehicleValueCell);
////
////        document.add(infoTable);
////    }
////
////    private static void addBookingDetails(Document document, Booking booking) throws DocumentException {
////        Paragraph sectionTitle = new Paragraph("BOOKING DETAILS", SUBTITLE_FONT);
////        sectionTitle.setSpacingBefore(15);
////        sectionTitle.setSpacingAfter(5);
////        document.add(sectionTitle);
////
////        PdfPTable bookingTable = new PdfPTable(2);
////        bookingTable.setWidthPercentage(100);
////        bookingTable.setSpacingAfter(10);
////
////        addDetailRow(bookingTable, "Booking ID:", String.valueOf(booking.getId()));
////        addDetailRow(bookingTable, "Pickup Date:", formatDate(booking.getPickupDate()));
////        addDetailRow(bookingTable, "DropOff Date:", formatDate(booking.getDropOffDate()));
////        addDetailRow(bookingTable, "Pickup Location:", safe(booking.getPickupLocation()));
////        addDetailRow(bookingTable, "DropOff Location:", safe(booking.getDropOffLocation()));
////
////        document.add(bookingTable);
////    }
////
////    private static void addExtras(Document document, Booking booking) throws DocumentException {
////        Paragraph sectionTitle = new Paragraph("ADDITIONAL SERVICES", SUBTITLE_FONT);
////        sectionTitle.setSpacingBefore(15);
////        sectionTitle.setSpacingAfter(5);
////        document.add(sectionTitle);
////
////        PdfPTable extrasTable = new PdfPTable(2);
////        extrasTable.setWidthPercentage(100);
////        extrasTable.setSpacingAfter(10);
////
////        // Create styled cells for extras
////        PdfPCell gpsCell = new PdfPCell(new Paragraph("GPS Navigation", LABEL_FONT));
////        gpsCell.setBorder(Rectangle.NO_BORDER);
////        gpsCell.setBackgroundColor(LIGHT_GRAY);
////        gpsCell.setPadding(8);
////        extrasTable.addCell(gpsCell);
////
////        PdfPCell gpsValueCell = new PdfPCell(new Paragraph(booking.isGpsIncluded() ? "✓ Included" : "✗ Not Included",
////                FontFactory.getFont(FontFactory.HELVETICA, 10, booking.isGpsIncluded() ? ACCENT_COLOR : Color.RED)));
////        gpsValueCell.setBorder(Rectangle.NO_BORDER);
////        gpsValueCell.setBackgroundColor(LIGHT_GRAY);
////        gpsValueCell.setPadding(8);
////        extrasTable.addCell(gpsValueCell);
////
////        PdfPCell childSeatCell = new PdfPCell(new Paragraph("Child Seat", LABEL_FONT));
////        childSeatCell.setBorder(Rectangle.NO_BORDER);
////        childSeatCell.setPadding(8);
////        extrasTable.addCell(childSeatCell);
////
////        PdfPCell childSeatValueCell = new PdfPCell(new Paragraph(booking.isChildSeatIncluded() ? "✓ Included" : "✗ Not Included",
////                FontFactory.getFont(FontFactory.HELVETICA, 10, booking.isChildSeatIncluded() ? ACCENT_COLOR : Color.RED)));
////        childSeatValueCell.setBorder(Rectangle.NO_BORDER);
////        childSeatValueCell.setPadding(8);
////        extrasTable.addCell(childSeatValueCell);
////
////        document.add(extrasTable);
////    }
////
////    private static void addPaymentDetails(Document document, Payment payment) throws DocumentException {
////        Paragraph sectionTitle = new Paragraph("PAYMENT DETAILS", SUBTITLE_FONT);
////        sectionTitle.setSpacingBefore(15);
////        sectionTitle.setSpacingAfter(5);
////        document.add(sectionTitle);
////
////        PdfPTable paymentTable = new PdfPTable(2);
////        paymentTable.setWidthPercentage(100);
////        paymentTable.setSpacingAfter(10);
////
////        addDetailRow(paymentTable, "Reference:", safe(payment.getPaymentReference()));
////        addDetailRow(paymentTable, "Method:", safeEnum(payment.getPaymentMethod()));
////        addDetailRow(paymentTable, "Transaction Date:", formatDateTime(payment.getPaidAt()));
////
////        // Amount row with special styling
////        PdfPCell amountLabelCell = new PdfPCell(new Paragraph("Total Amount:", LABEL_FONT));
////        amountLabelCell.setBorder(Rectangle.TOP);
////        amountLabelCell.setBorderColor(BORDER_COLOR);
////        amountLabelCell.setPadding(8);
////        amountLabelCell.setBackgroundColor(LIGHT_GRAY);
////        paymentTable.addCell(amountLabelCell);
////
////        PdfPCell amountValueCell = new PdfPCell(new Paragraph(payment.getAmount() + " " + safe(payment.getCurrency()), AMOUNT_FONT));
////        amountValueCell.setBorder(Rectangle.TOP);
////        amountValueCell.setBorderColor(BORDER_COLOR);
////        amountValueCell.setPadding(8);
////        amountValueCell.setBackgroundColor(LIGHT_GRAY);
////        paymentTable.addCell(amountValueCell);
////
////        document.add(paymentTable);
////
////        // Card details if applicable
////        if (payment.getPaymentMethod() != null && payment.getPaymentMethod().name().equals("CARD")) {
////            PdfPTable cardTable = new PdfPTable(2);
////            cardTable.setWidthPercentage(60);
////            cardTable.setHorizontalAlignment(Element.ALIGN_LEFT);
////            cardTable.setSpacingAfter(10);
////
////            PdfPCell cardLabelCell = new PdfPCell(new Paragraph("Card:", LABEL_FONT));
////            cardLabelCell.setBorder(Rectangle.NO_BORDER);
////            cardLabelCell.setPadding(5);
////            cardTable.addCell(cardLabelCell);
////
////            PdfPCell cardValueCell = new PdfPCell(new Paragraph(safe(payment.getMaskedCardNumber()), NORMAL_FONT));
////            cardValueCell.setBorder(Rectangle.NO_BORDER);
////            cardValueCell.setPadding(5);
////            cardTable.addCell(cardValueCell);
////
////            PdfPCell brandLabelCell = new PdfPCell(new Paragraph("Brand:", LABEL_FONT));
////            brandLabelCell.setBorder(Rectangle.NO_BORDER);
////            brandLabelCell.setPadding(5);
////            cardTable.addCell(brandLabelCell);
////
////            PdfPCell brandValueCell = new PdfPCell(new Paragraph(safe(payment.getCardBrand()), NORMAL_FONT));
////            brandValueCell.setBorder(Rectangle.NO_BORDER);
////            brandValueCell.setPadding(5);
////            cardTable.addCell(brandValueCell);
////
////            document.add(cardTable);
////        }
////    }
////
////    private static void addFooter(Document document) throws DocumentException {
////        document.add(new Paragraph(" "));
////
////        // Decorative line
////        PdfPTable lineTable = new PdfPTable(1);
////        lineTable.setWidthPercentage(100);
////        PdfPCell lineCell = new PdfPCell(new Paragraph(" "));
////        lineCell.setBorder(Rectangle.TOP);
////        lineCell.setBorderColor(SECONDARY_COLOR);
////        lineCell.setBorderWidth(1);
////        lineCell.setPadding(10);
////        lineTable.addCell(lineCell);
////        document.add(lineTable);
////
////        // Thank you message
////        Paragraph thankYou = new Paragraph("Thank you for choosing FRAC Vehicle Rentals!",
////                FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, SECONDARY_COLOR));
////        thankYou.setAlignment(Element.ALIGN_CENTER);
////        document.add(thankYou);
////
////        // Contact information
////        Paragraph contact = new Paragraph();
////        contact.add(new Chunk("www.frac.com", FontFactory.getFont(FontFactory.HELVETICA, 9, SECONDARY_COLOR)));
////        contact.add(new Chunk("  |  ", FontFactory.getFont(FontFactory.HELVETICA, 9, BORDER_COLOR)));
////        contact.add(new Chunk("support@frac.com", FontFactory.getFont(FontFactory.HELVETICA, 9, SECONDARY_COLOR)));
////        contact.add(new Chunk("  |  ", FontFactory.getFont(FontFactory.HELVETICA, 9, BORDER_COLOR)));
////        contact.add(new Chunk("+94 11 234 5678", FontFactory.getFont(FontFactory.HELVETICA, 9, SECONDARY_COLOR)));
////        contact.setAlignment(Element.ALIGN_CENTER);
////        document.add(contact);
////
////        // Footer note
////        Paragraph footerNote = new Paragraph("This is a computer generated receipt - Valid without signature",
////                FontFactory.getFont(FontFactory.HELVETICA_OBLIQUE, 8, BORDER_COLOR));
////        footerNote.setAlignment(Element.ALIGN_CENTER);
////        footerNote.setSpacingBefore(10);
////        document.add(footerNote);
////    }
////
////    private static void addDetailRow(PdfPTable table, String label, String value) {
////        PdfPCell labelCell = new PdfPCell(new Paragraph(label, LABEL_FONT));
////        labelCell.setBorder(Rectangle.BOTTOM);
////        labelCell.setBorderColor(BORDER_COLOR);
////        labelCell.setPadding(8);
////        table.addCell(labelCell);
////
////        PdfPCell valueCell = new PdfPCell(new Paragraph(value, NORMAL_FONT));
////        valueCell.setBorder(Rectangle.BOTTOM);
////        valueCell.setBorderColor(BORDER_COLOR);
////        valueCell.setPadding(8);
////        table.addCell(valueCell);
////    }
////
////    private static String formatDate(LocalDate date) {
////        return date == null ? "" : date.format(DATE_FMT);
////    }
////
////    private static String formatDateTime(LocalDateTime dt) {
////        return dt == null ? "" : dt.format(DATETIME_FMT);
////    }
////
////    private static String safe(String s) {
////        return s == null ? "" : s;
////    }
////
////    private static String safeEnum(Object e) {
////        return e == null ? "" : e.toString();
////    }
////}
//
//
//package com.frac.frac_backend.util;
//
//import com.frac.frac_backend.entity.Booking;
//import com.frac.frac_backend.entity.Payment;
//import com.lowagie.text.*;
//import com.lowagie.text.Font;
//import com.lowagie.text.pdf.PdfPCell;
//import com.lowagie.text.pdf.PdfPTable;
//import com.lowagie.text.pdf.PdfWriter;
//
//import java.awt.Color;
//import java.io.ByteArrayOutputStream;
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//
//public class PaymentPdfGenerator {
//
//    private static final DateTimeFormatter DATE_FMT = DateTimeFormatter.ofPattern("dd MMM yyyy");
//    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm:ss");
//
//    // Custom colors
//    private static final Color PRIMARY_COLOR = new Color(52, 73, 94);
//    private static final Color SECONDARY_COLOR = new Color(41, 128, 185);
//    private static final Color ACCENT_COLOR = new Color(46, 204, 113);
//    private static final Color LIGHT_GRAY = new Color(236, 240, 241);
//    private static final Color BORDER_COLOR = new Color(189, 195, 199);
//
//        private static final Font TITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 24, PRIMARY_COLOR);
//    private static final Font SUBTITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, SECONDARY_COLOR);
//    private static final Font HEADER_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, PRIMARY_COLOR);
//    private static final Font LABEL_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, PRIMARY_COLOR);
//    private static final Font NORMAL_FONT = FontFactory.getFont(FontFactory.HELVETICA, 10, Color.BLACK);
//    private static final Font AMOUNT_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 16, ACCENT_COLOR);
//    private static final Font STATUS_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, Color.WHITE);
//
////    // Fonts - REDUCED SIZES
////    private static final Font TITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 18, PRIMARY_COLOR);
////    private static final Font SUBTITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 11, SECONDARY_COLOR);
////    private static final Font LABEL_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 8, PRIMARY_COLOR);
////    private static final Font NORMAL_FONT = FontFactory.getFont(FontFactory.HELVETICA, 8, Color.BLACK);
////    private static final Font AMOUNT_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, ACCENT_COLOR);
////    private static final Font STATUS_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 8, Color.WHITE);
//
//    public static byte[] generateReceiptPdf(Payment payment, Booking booking) {
//        try {
//            ByteArrayOutputStream baos = new ByteArrayOutputStream();
//            Document document = new Document(PageSize.A4, 30, 30, 20, 20); // Reduced margins
//            PdfWriter.getInstance(document, baos);
//
//            document.open();
//
//            // Add header with company branding
//            addHeader(document);
//
//            // Add receipt information
//            addReceiptInfo(document, payment);
//
//            // Add customer and vehicle information
//            addCustomerVehicleInfo(document, booking);
//
//            // Add booking details
//            addBookingDetails(document, booking);
//
//            // Add extras
//            addExtras(document, booking);
//
//            // Add payment details
//            addPaymentDetails(document, payment);
//
//            // Add footer
//            addFooter(document);
//
//            document.close();
//            return baos.toByteArray();
//
//        } catch (Exception e) {
//            throw new RuntimeException("PDF generation failed: " + e.getMessage(), e);
//        }
//    }
//
//    private static void addHeader(Document document) throws DocumentException {
//        PdfPTable headerTable = new PdfPTable(2);
//        headerTable.setWidthPercentage(100);
//
//        Paragraph companyPara = new Paragraph();
//        companyPara.add(new Chunk("FRAC", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 20, SECONDARY_COLOR)));
//        companyPara.add(new Chunk(" ", NORMAL_FONT));
//        companyPara.add(new Chunk("Vehicle Rentals", FontFactory.getFont(FontFactory.HELVETICA, 8, PRIMARY_COLOR)));
//
//        PdfPCell companyCell = new PdfPCell(companyPara);
//        companyCell.setBorder(Rectangle.NO_BORDER);
//        companyCell.setPadding(0);
//        companyCell.setPaddingBottom(5);
//        headerTable.addCell(companyCell);
//
//        PdfPCell badgeCell = new PdfPCell(new Paragraph("PAYMENT RECEIPT",
//                FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, Color.WHITE)));
//        badgeCell.setBackgroundColor(SECONDARY_COLOR);
//        badgeCell.setBorder(Rectangle.NO_BORDER);
//        badgeCell.setPadding(5);
//        badgeCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
//        headerTable.addCell(badgeCell);
//
//        document.add(headerTable);
//
//        // Simple thin line
//        PdfPTable lineTable = new PdfPTable(1);
//        lineTable.setWidthPercentage(100);
//        PdfPCell lineCell = new PdfPCell(new Paragraph(" "));
//        lineCell.setBorder(Rectangle.TOP);
//        lineCell.setBorderColor(SECONDARY_COLOR);
//        lineCell.setBorderWidth(1);
//        lineCell.setPadding(2);
//        lineTable.addCell(lineCell);
//        document.add(lineTable);
//    }
//
//    private static void addReceiptInfo(Document document, Payment payment) throws DocumentException {
//        PdfPTable receiptTable = new PdfPTable(2);
//        receiptTable.setWidthPercentage(100);
//        receiptTable.setSpacingBefore(5);
//
//        Paragraph refPara = new Paragraph();
//        refPara.add(new Chunk("Receipt No: ", LABEL_FONT));
//        refPara.add(new Chunk(safe(payment.getPaymentReference()), NORMAL_FONT));
//
//        PdfPCell refCell = new PdfPCell(refPara);
//        refCell.setBorder(Rectangle.NO_BORDER);
//        refCell.setPadding(2);
//        receiptTable.addCell(refCell);
//
//        Paragraph datePara = new Paragraph();
//        datePara.add(new Chunk("Date: ", LABEL_FONT));
//        datePara.add(new Chunk(formatDateTime(payment.getPaidAt()), NORMAL_FONT));
//
//        PdfPCell dateCell = new PdfPCell(datePara);
//        dateCell.setBorder(Rectangle.NO_BORDER);
//        dateCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
//        dateCell.setPadding(2);
//        receiptTable.addCell(dateCell);
//
//        document.add(receiptTable);
//
//        // Status badge - compact
//        if (payment.getPaymentStatus() != null) {
//            Paragraph statusPara = new Paragraph(payment.getPaymentStatus().toString(), STATUS_FONT);
//            statusPara.setAlignment(Element.ALIGN_RIGHT);
//
//            PdfPTable statusTable = new PdfPTable(1);
//            statusTable.setWidthPercentage(20);
//            statusTable.setHorizontalAlignment(Element.ALIGN_RIGHT);
//
//            PdfPCell statusCell = new PdfPCell(statusPara);
//            statusCell.setBackgroundColor(ACCENT_COLOR);
//            statusCell.setBorder(Rectangle.NO_BORDER);
//            statusCell.setPadding(3);
//            statusCell.setHorizontalAlignment(Element.ALIGN_CENTER);
//            statusTable.addCell(statusCell);
//
//            document.add(statusTable);
//        }
//    }
//
//    private static void addCustomerVehicleInfo(Document document, Booking booking) throws DocumentException {
//        Paragraph sectionTitle = new Paragraph("CUSTOMER & VEHICLE", SUBTITLE_FONT);
//        sectionTitle.setSpacingBefore(8);
//        sectionTitle.setSpacingAfter(2);
//        document.add(sectionTitle);
//
//        PdfPTable infoTable = new PdfPTable(2);
//        infoTable.setWidthPercentage(100);
//        infoTable.setSpacingAfter(5);
//
//        String customerName = safe(booking.getCustomer().getFirstName()) + " " + safe(booking.getCustomer().getLastName());
//        String vehicleInfo = safe(booking.getVehicle().getMakeModel()) + " (" + safe(booking.getVehicle().getRegNumber()) + ")";
//
//        addCompactRow(infoTable, "Customer:", customerName.trim(), true);
//        addCompactRow(infoTable, "Agent:", safe(booking.getAgent().getCompanyName()), false);
//        addCompactRow(infoTable, "Vehicle:", vehicleInfo, true);
//
//        document.add(infoTable);
//    }
//
//    private static void addBookingDetails(Document document, Booking booking) throws DocumentException {
//        Paragraph sectionTitle = new Paragraph("BOOKING DETAILS", SUBTITLE_FONT);
//        sectionTitle.setSpacingBefore(5);
//        sectionTitle.setSpacingAfter(2);
//        document.add(sectionTitle);
//
//        PdfPTable bookingTable = new PdfPTable(2);
//        bookingTable.setWidthPercentage(100);
//        bookingTable.setSpacingAfter(5);
//
//        addCompactRow(bookingTable, "Booking ID:", String.valueOf(booking.getId()), true);
//        addCompactRow(bookingTable, "Pickup Date:", formatDate(booking.getPickupDate()), false);
//        addCompactRow(bookingTable, "DropOff Date:", formatDate(booking.getDropOffDate()), true);
//        addCompactRow(bookingTable, "Pickup Location:", safe(booking.getPickupLocation()), false);
//        addCompactRow(bookingTable, "DropOff Location:", safe(booking.getDropOffLocation()), true);
//
//        document.add(bookingTable);
//    }
//
//    private static void addExtras(Document document, Booking booking) throws DocumentException {
//        Paragraph sectionTitle = new Paragraph("ADDITIONAL SERVICES", SUBTITLE_FONT);
//        sectionTitle.setSpacingBefore(5);
//        sectionTitle.setSpacingAfter(2);
//        document.add(sectionTitle);
//
//        PdfPTable extrasTable = new PdfPTable(2);
//        extrasTable.setWidthPercentage(100);
//        extrasTable.setSpacingAfter(5);
//
//        PdfPCell gpsCell = new PdfPCell(new Paragraph("GPS Navigation", LABEL_FONT));
//        gpsCell.setBorder(Rectangle.NO_BORDER);
//        gpsCell.setBackgroundColor(LIGHT_GRAY);
//        gpsCell.setPadding(4);
//        extrasTable.addCell(gpsCell);
//
//        PdfPCell gpsValueCell = new PdfPCell(new Paragraph(booking.isGpsIncluded() ? "✓ Included" : "✗ Not Included",
//                FontFactory.getFont(FontFactory.HELVETICA, 8, booking.isGpsIncluded() ? ACCENT_COLOR : Color.RED)));
//        gpsValueCell.setBorder(Rectangle.NO_BORDER);
//        gpsValueCell.setBackgroundColor(LIGHT_GRAY);
//        gpsValueCell.setPadding(4);
//        extrasTable.addCell(gpsValueCell);
//
//        PdfPCell childSeatCell = new PdfPCell(new Paragraph("Child Seat", LABEL_FONT));
//        childSeatCell.setBorder(Rectangle.NO_BORDER);
//        childSeatCell.setPadding(4);
//        extrasTable.addCell(childSeatCell);
//
//        PdfPCell childSeatValueCell = new PdfPCell(new Paragraph(booking.isChildSeatIncluded() ? "✓ Included" : "✗ Not Included",
//                FontFactory.getFont(FontFactory.HELVETICA, 8, booking.isChildSeatIncluded() ? ACCENT_COLOR : Color.RED)));
//        childSeatValueCell.setBorder(Rectangle.NO_BORDER);
//        childSeatValueCell.setPadding(4);
//        extrasTable.addCell(childSeatValueCell);
//
//        document.add(extrasTable);
//    }
//
//    private static void addPaymentDetails(Document document, Payment payment) throws DocumentException {
//        Paragraph sectionTitle = new Paragraph("PAYMENT DETAILS", SUBTITLE_FONT);
//        sectionTitle.setSpacingBefore(5);
//        sectionTitle.setSpacingAfter(2);
//        document.add(sectionTitle);
//
//        PdfPTable paymentTable = new PdfPTable(2);
//        paymentTable.setWidthPercentage(100);
//        paymentTable.setSpacingAfter(5);
//
//        addCompactRow(paymentTable, "Reference:", safe(payment.getPaymentReference()), true);
//        addCompactRow(paymentTable, "Method:", safeEnum(payment.getPaymentMethod()), false);
//        addCompactRow(paymentTable, "Transaction Date:", formatDateTime(payment.getPaidAt()), true);
//
//        // Amount row
//        PdfPCell amountLabelCell = new PdfPCell(new Paragraph("Total Amount:", LABEL_FONT));
//        amountLabelCell.setBorder(Rectangle.TOP);
//        amountLabelCell.setBorderColor(BORDER_COLOR);
//        amountLabelCell.setPadding(4);
//        amountLabelCell.setBackgroundColor(LIGHT_GRAY);
//        paymentTable.addCell(amountLabelCell);
//
//        PdfPCell amountValueCell = new PdfPCell(new Paragraph(payment.getAmount() + " " + safe(payment.getCurrency()), AMOUNT_FONT));
//        amountValueCell.setBorder(Rectangle.TOP);
//        amountValueCell.setBorderColor(BORDER_COLOR);
//        amountValueCell.setPadding(4);
//        amountValueCell.setBackgroundColor(LIGHT_GRAY);
//        paymentTable.addCell(amountValueCell);
//
//        document.add(paymentTable);
//
//        // Card details if applicable - compact inline format
//        if (payment.getPaymentMethod() != null && payment.getPaymentMethod().name().equals("CARD")) {
//            Paragraph cardPara = new Paragraph();
//            cardPara.add(new Chunk("Card: ", LABEL_FONT));
//            cardPara.add(new Chunk(safe(payment.getMaskedCardNumber()) + "  ", NORMAL_FONT));
//            cardPara.add(new Chunk("Brand: ", LABEL_FONT));
//            cardPara.add(new Chunk(safe(payment.getCardBrand()), NORMAL_FONT));
//
//            PdfPTable cardTable = new PdfPTable(1);
//            cardTable.setWidthPercentage(100);
//            PdfPCell cardCell = new PdfPCell(cardPara);
//            cardCell.setBorder(Rectangle.NO_BORDER);
//            cardCell.setPadding(2);
//            cardTable.addCell(cardCell);
//            document.add(cardTable);
//        }
//    }
//
//    private static void addFooter(Document document) throws DocumentException {
//        // Simple line
//        PdfPTable lineTable = new PdfPTable(1);
//        lineTable.setWidthPercentage(100);
//        lineTable.setSpacingBefore(5);
//        PdfPCell lineCell = new PdfPCell(new Paragraph(" "));
//        lineCell.setBorder(Rectangle.TOP);
//        lineCell.setBorderColor(BORDER_COLOR);
//        lineCell.setBorderWidth(0.5f);
//        lineCell.setPadding(3);
//        lineTable.addCell(lineCell);
//        document.add(lineTable);
//
//        // Thank you message
//        Paragraph thankYou = new Paragraph("Thank you for choosing FRAC Vehicle Rentals!",
//                FontFactory.getFont(FontFactory.HELVETICA, 8, SECONDARY_COLOR));
//        thankYou.setAlignment(Element.ALIGN_CENTER);
//        thankYou.setSpacingBefore(2);
//        document.add(thankYou);
//
//        // Contact information - compact
//        Paragraph contact = new Paragraph();
//        contact.add(new Chunk("www.frac.com", FontFactory.getFont(FontFactory.HELVETICA, 7, SECONDARY_COLOR)));
//        contact.add(new Chunk(" | ", FontFactory.getFont(FontFactory.HELVETICA, 7, BORDER_COLOR)));
//        contact.add(new Chunk("support@frac.com", FontFactory.getFont(FontFactory.HELVETICA, 7, SECONDARY_COLOR)));
//        contact.add(new Chunk(" | ", FontFactory.getFont(FontFactory.HELVETICA, 7, BORDER_COLOR)));
//        contact.add(new Chunk("+94 11 234 5678", FontFactory.getFont(FontFactory.HELVETICA, 7, SECONDARY_COLOR)));
//        contact.setAlignment(Element.ALIGN_CENTER);
//        contact.setSpacingBefore(1);
//        document.add(contact);
//    }
//
//    private static void addCompactRow(PdfPTable table, String label, String value, boolean grayBackground) {
//        PdfPCell labelCell = new PdfPCell(new Paragraph(label, LABEL_FONT));
//        labelCell.setBorder(Rectangle.NO_BORDER);
//        if (grayBackground) {
//            labelCell.setBackgroundColor(LIGHT_GRAY);
//        }
//        labelCell.setPadding(3);
//        table.addCell(labelCell);
//
//        PdfPCell valueCell = new PdfPCell(new Paragraph(value, NORMAL_FONT));
//        valueCell.setBorder(Rectangle.NO_BORDER);
//        if (grayBackground) {
//            valueCell.setBackgroundColor(LIGHT_GRAY);
//        }
//        valueCell.setPadding(3);
//        table.addCell(valueCell);
//    }
//
//    private static String formatDate(LocalDate date) {
//        return date == null ? "" : date.format(DATE_FMT);
//    }
//
//    private static String formatDateTime(LocalDateTime dt) {
//        return dt == null ? "" : dt.format(DATETIME_FMT);
//    }
//
//    private static String safe(String s) {
//        return s == null ? "" : s;
//    }
//
//    private static String safeEnum(Object e) {
//        return e == null ? "" : e.toString();
//    }
//}



//package com.frac.frac_backend.util;
//
//import com.frac.frac_backend.entity.Booking;
//import com.frac.frac_backend.entity.Payment;
//import com.lowagie.text.*;
//import com.lowagie.text.Font;
//import com.lowagie.text.pdf.PdfPCell;
//import com.lowagie.text.pdf.PdfPTable;
//import com.lowagie.text.pdf.PdfWriter;
//
//import java.awt.Color;
//import java.io.ByteArrayOutputStream;
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//
//public class PaymentPdfGenerator {
//
//    private static final DateTimeFormatter DATE_FMT = DateTimeFormatter.ofPattern("dd MMM yyyy");
//    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm:ss");
//
//    // Custom colors
//    private static final Color PRIMARY_COLOR = new Color(52, 73, 94);
//    private static final Color SECONDARY_COLOR = new Color(41, 128, 185);
//    private static final Color ACCENT_COLOR = new Color(46, 204, 113);
//    private static final Color LIGHT_GRAY = new Color(245, 245, 245);
//    private static final Color BORDER_COLOR = new Color(200, 200, 200);
//
//    // Professional font sizes
//    private static final Font TITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 22, PRIMARY_COLOR);
//    private static final Font SUBTITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, SECONDARY_COLOR);
//    private static final Font HEADER_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, PRIMARY_COLOR);
//    private static final Font LABEL_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, PRIMARY_COLOR);
//    private static final Font NORMAL_FONT = FontFactory.getFont(FontFactory.HELVETICA, 10, Color.BLACK);
//    private static final Font AMOUNT_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 16, ACCENT_COLOR);
//    private static final Font STATUS_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, Color.WHITE);
//
//    public static byte[] generateReceiptPdf(Payment payment, Booking booking) {
//        try {
//            ByteArrayOutputStream baos = new ByteArrayOutputStream();
//            Document document = new Document(PageSize.A4, 36, 36, 36, 36);
//            PdfWriter.getInstance(document, baos);
//
//            document.open();
//
//            // Header
//            addHeader(document);
//
//            // Receipt Info
//            addReceiptInfo(document, payment);
//
//            // Customer & Vehicle
//            addCustomerVehicleInfo(document, booking);
//
//            // Booking Details
//            addBookingDetails(document, booking);
//
//            // Additional Services
//            addExtras(document, booking);
//
//            // Payment Details
//            addPaymentDetails(document, payment);
//
//            // Footer
//            addFooter(document);
//
//            document.close();
//            return baos.toByteArray();
//
//        } catch (Exception e) {
//            throw new RuntimeException("PDF generation failed: " + e.getMessage(), e);
//        }
//    }
//
//    private static void addHeader(Document document) throws DocumentException {
//        PdfPTable headerTable = new PdfPTable(2);
//        headerTable.setWidthPercentage(100);
//        headerTable.setWidths(new float[]{3f, 1f});
//
//        // Company branding
//        Paragraph companyPara = new Paragraph();
//        companyPara.add(new Chunk("FRAC", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 26, SECONDARY_COLOR)));
//        companyPara.add(new Chunk("  ", NORMAL_FONT));
//        companyPara.add(new Chunk("Vehicle Rentals", FontFactory.getFont(FontFactory.HELVETICA, 11, PRIMARY_COLOR)));
//
//        PdfPCell companyCell = new PdfPCell(companyPara);
//        companyCell.setBorder(Rectangle.NO_BORDER);
//        companyCell.setPaddingBottom(8);
//        headerTable.addCell(companyCell);
//
//        // Receipt badge
//        PdfPCell badgeCell = new PdfPCell(new Paragraph("RECEIPT",
//                FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, Color.WHITE)));
//        badgeCell.setBackgroundColor(SECONDARY_COLOR);
//        badgeCell.setBorder(Rectangle.NO_BORDER);
//        badgeCell.setPadding(8);
//        badgeCell.setHorizontalAlignment(Element.ALIGN_CENTER);
//        badgeCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
//        headerTable.addCell(badgeCell);
//
//        document.add(headerTable);
//
//        // Decorative line
//        PdfPTable lineTable = new PdfPTable(1);
//        lineTable.setWidthPercentage(100);
//        lineTable.setSpacingBefore(2);
//        PdfPCell lineCell = new PdfPCell(new Paragraph(" "));
//        lineCell.setBorder(Rectangle.TOP);
//        lineCell.setBorderColor(SECONDARY_COLOR);
//        lineCell.setBorderWidth(1.5f);
//        lineCell.setPadding(3);
//        lineTable.addCell(lineCell);
//        document.add(lineTable);
//
//        document.add(new Paragraph(" "));
//    }
//
//    private static void addReceiptInfo(Document document, Payment payment) throws DocumentException {
//        PdfPTable receiptTable = new PdfPTable(3);
//        receiptTable.setWidthPercentage(100);
//        receiptTable.setWidths(new float[]{2f, 3f, 1.5f});
//        receiptTable.setSpacingBefore(2);
//
//        // Receipt No
//        Paragraph refPara = new Paragraph();
//        refPara.add(new Chunk("Receipt No: ", LABEL_FONT));
//        refPara.add(new Chunk(safe(payment.getPaymentReference()), NORMAL_FONT));
//
//        PdfPCell refCell = new PdfPCell(refPara);
//        refCell.setBorder(Rectangle.NO_BORDER);
//        refCell.setPadding(4);
//        receiptTable.addCell(refCell);
//
//        // Date
//        Paragraph datePara = new Paragraph();
//        datePara.add(new Chunk("Date: ", LABEL_FONT));
//        datePara.add(new Chunk(formatDateTime(payment.getPaidAt()), NORMAL_FONT));
//
//        PdfPCell dateCell = new PdfPCell(datePara);
//        dateCell.setBorder(Rectangle.NO_BORDER);
//        dateCell.setPadding(4);
//        receiptTable.addCell(dateCell);
//
//        // Status badge
//        if (payment.getPaymentStatus() != null) {
//            Paragraph statusPara = new Paragraph(payment.getPaymentStatus().toString(), STATUS_FONT);
//            statusPara.setAlignment(Element.ALIGN_CENTER);
//
//            PdfPCell statusCell = new PdfPCell(statusPara);
//            statusCell.setBackgroundColor(ACCENT_COLOR);
//            statusCell.setBorder(Rectangle.NO_BORDER);
//            statusCell.setPadding(5);
//            statusCell.setHorizontalAlignment(Element.ALIGN_CENTER);
//            receiptTable.addCell(statusCell);
//        } else {
//            receiptTable.addCell(new PdfPCell(new Paragraph("")));
//        }
//
//        document.add(receiptTable);
//        document.add(new Paragraph(" "));
//    }
//
//    private static void addCustomerVehicleInfo(Document document, Booking booking) throws DocumentException {
//        Paragraph sectionTitle = new Paragraph("CUSTOMER & VEHICLE", SUBTITLE_FONT);
//        sectionTitle.setSpacingBefore(5);
//        sectionTitle.setSpacingAfter(5);
//        document.add(sectionTitle);
//
//        PdfPTable infoTable = new PdfPTable(2);
//        infoTable.setWidthPercentage(100);
//        infoTable.setKeepTogether(true);
//        infoTable.setSpacingAfter(8);
//
//        String customerName = safe(booking.getCustomer().getFirstName()) + " " + safe(booking.getCustomer().getLastName());
//        String vehicleInfo = safe(booking.getVehicle().getMakeModel()) + " (" + safe(booking.getVehicle().getRegNumber()) + ")";
//
//        addDetailRow(infoTable, "Customer:", customerName.trim(), true);
//        addDetailRow(infoTable, "Agent:", safe(booking.getAgent().getCompanyName()), false);
//        addDetailRow(infoTable, "Vehicle:", vehicleInfo, true);
//
//        document.add(infoTable);
//    }
//
//    private static void addBookingDetails(Document document, Booking booking) throws DocumentException {
//        Paragraph sectionTitle = new Paragraph("BOOKING DETAILS", SUBTITLE_FONT);
//        sectionTitle.setSpacingBefore(5);
//        sectionTitle.setSpacingAfter(5);
//        document.add(sectionTitle);
//
//        PdfPTable bookingTable = new PdfPTable(2);
//        bookingTable.setWidthPercentage(100);
//        bookingTable.setKeepTogether(true);
//        bookingTable.setSpacingAfter(8);
//
//        addDetailRow(bookingTable, "Booking ID:", String.valueOf(booking.getId()), true);
//        addDetailRow(bookingTable, "Pickup Date:", formatDate(booking.getPickupDate()), false);
//        addDetailRow(bookingTable, "DropOff Date:", formatDate(booking.getDropOffDate()), true);
//        addDetailRow(bookingTable, "Pickup Location:", safe(booking.getPickupLocation()), false);
//        addDetailRow(bookingTable, "DropOff Location:", safe(booking.getDropOffLocation()), true);
//
//        document.add(bookingTable);
//    }
//
//    private static void addExtras(Document document, Booking booking) throws DocumentException {
//        Paragraph sectionTitle = new Paragraph("ADDITIONAL SERVICES", SUBTITLE_FONT);
//        sectionTitle.setSpacingBefore(5);
//        sectionTitle.setSpacingAfter(5);
//        document.add(sectionTitle);
//
//        PdfPTable extrasTable = new PdfPTable(2);
//        extrasTable.setWidthPercentage(100);
//        extrasTable.setKeepTogether(true);
//        extrasTable.setSpacingAfter(8);
//
//        // GPS Row
//        PdfPCell gpsLabelCell = new PdfPCell(new Paragraph("GPS Navigation", LABEL_FONT));
//        gpsLabelCell.setBorder(Rectangle.NO_BORDER);
//        gpsLabelCell.setBackgroundColor(LIGHT_GRAY);
//        gpsLabelCell.setPadding(6);
//        extrasTable.addCell(gpsLabelCell);
//
//        String gpsValue = booking.isGpsIncluded() ? "✓ Included" : "✗ Not Included";
//        Color gpsColor = booking.isGpsIncluded() ? ACCENT_COLOR : Color.RED;
//        PdfPCell gpsValueCell = new PdfPCell(new Paragraph(gpsValue,
//                FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, gpsColor)));
//        gpsValueCell.setBorder(Rectangle.NO_BORDER);
//        gpsValueCell.setBackgroundColor(LIGHT_GRAY);
//        gpsValueCell.setPadding(6);
//        extrasTable.addCell(gpsValueCell);
//
//        // Child Seat Row
//        PdfPCell childLabelCell = new PdfPCell(new Paragraph("Child Seat", LABEL_FONT));
//        childLabelCell.setBorder(Rectangle.NO_BORDER);
//        childLabelCell.setPadding(6);
//        extrasTable.addCell(childLabelCell);
//
//        String childValue = booking.isChildSeatIncluded() ? "✓ Included" : "✗ Not Included";
//        Color childColor = booking.isChildSeatIncluded() ? ACCENT_COLOR : Color.RED;
//        PdfPCell childValueCell = new PdfPCell(new Paragraph(childValue,
//                FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, childColor)));
//        childValueCell.setBorder(Rectangle.NO_BORDER);
//        childValueCell.setPadding(6);
//        extrasTable.addCell(childValueCell);
//
//        document.add(extrasTable);
//    }
//
//    private static void addPaymentDetails(Document document, Payment payment) throws DocumentException {
//        Paragraph sectionTitle = new Paragraph("PAYMENT DETAILS", SUBTITLE_FONT);
//        sectionTitle.setSpacingBefore(5);
//        sectionTitle.setSpacingAfter(5);
//        document.add(sectionTitle);
//
//        PdfPTable paymentTable = new PdfPTable(2);
//        paymentTable.setWidthPercentage(100);
//        paymentTable.setKeepTogether(true);
//        paymentTable.setSpacingAfter(8);
//
//        addDetailRow(paymentTable, "Reference:", safe(payment.getPaymentReference()), true);
//        addDetailRow(paymentTable, "Method:", safeEnum(payment.getPaymentMethod()), false);
//        addDetailRow(paymentTable, "Transaction Date:", formatDateTime(payment.getPaidAt()), true);
//
//        // Amount row with special styling
//        PdfPCell amountLabelCell = new PdfPCell(new Paragraph("Total Amount:", HEADER_FONT));
//        amountLabelCell.setBorder(Rectangle.TOP);
//        amountLabelCell.setBorderColor(BORDER_COLOR);
//        amountLabelCell.setPadding(8);
//        amountLabelCell.setBackgroundColor(LIGHT_GRAY);
//        paymentTable.addCell(amountLabelCell);
//
//        PdfPCell amountValueCell = new PdfPCell(new Paragraph(payment.getAmount() + " " + safe(payment.getCurrency()), AMOUNT_FONT));
//        amountValueCell.setBorder(Rectangle.TOP);
//        amountValueCell.setBorderColor(BORDER_COLOR);
//        amountValueCell.setPadding(8);
//        amountValueCell.setBackgroundColor(LIGHT_GRAY);
//        paymentTable.addCell(amountValueCell);
//
//        document.add(paymentTable);
//
//        // Card details if applicable
//        if (payment.getPaymentMethod() != null && payment.getPaymentMethod().name().equals("CARD")
//                && payment.getMaskedCardNumber() != null) {
//            PdfPTable cardTable = new PdfPTable(2);
//            cardTable.setWidthPercentage(60);
//            cardTable.setHorizontalAlignment(Element.ALIGN_LEFT);
//            cardTable.setSpacingBefore(3);
//
//            PdfPCell cardLabelCell = new PdfPCell(new Paragraph("Card Number:", LABEL_FONT));
//            cardLabelCell.setBorder(Rectangle.NO_BORDER);
//            cardLabelCell.setPadding(4);
//            cardTable.addCell(cardLabelCell);
//
//            PdfPCell cardValueCell = new PdfPCell(new Paragraph(safe(payment.getMaskedCardNumber()), NORMAL_FONT));
//            cardValueCell.setBorder(Rectangle.NO_BORDER);
//            cardValueCell.setPadding(4);
//            cardTable.addCell(cardValueCell);
//
//            PdfPCell brandLabelCell = new PdfPCell(new Paragraph("Brand:", LABEL_FONT));
//            brandLabelCell.setBorder(Rectangle.NO_BORDER);
//            brandLabelCell.setPadding(4);
//            cardTable.addCell(brandLabelCell);
//
//            PdfPCell brandValueCell = new PdfPCell(new Paragraph(safe(payment.getCardBrand()), NORMAL_FONT));
//            brandValueCell.setBorder(Rectangle.NO_BORDER);
//            brandValueCell.setPadding(4);
//            cardTable.addCell(brandValueCell);
//
//            document.add(cardTable);
//        }
//    }
//
//    private static void addFooter(Document document) throws DocumentException {
//        document.add(new Paragraph(" "));
//
//        // Decorative line
//        PdfPTable lineTable = new PdfPTable(1);
//        lineTable.setWidthPercentage(100);
//        lineTable.setSpacingBefore(5);
//        PdfPCell lineCell = new PdfPCell(new Paragraph(" "));
//        lineCell.setBorder(Rectangle.TOP);
//        lineCell.setBorderColor(SECONDARY_COLOR);
//        lineCell.setBorderWidth(1);
//        lineCell.setPadding(8);
//        lineTable.addCell(lineCell);
//        document.add(lineTable);
//
//        // Thank you message
//        Paragraph thankYou = new Paragraph("Thank you for choosing FRAC Vehicle Rentals!",
//                FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, SECONDARY_COLOR));
//        thankYou.setAlignment(Element.ALIGN_CENTER);
//        thankYou.setSpacingBefore(5);
//        document.add(thankYou);
//
//        // Contact information
//        Paragraph contact = new Paragraph();
//        contact.add(new Chunk("www.frac.com", FontFactory.getFont(FontFactory.HELVETICA, 9, SECONDARY_COLOR)));
//        contact.add(new Chunk("  |  ", FontFactory.getFont(FontFactory.HELVETICA, 9, BORDER_COLOR)));
//        contact.add(new Chunk("support@frac.com", FontFactory.getFont(FontFactory.HELVETICA, 9, SECONDARY_COLOR)));
//        contact.add(new Chunk("  |  ", FontFactory.getFont(FontFactory.HELVETICA, 9, BORDER_COLOR)));
//        contact.add(new Chunk("+94 11 234 5678", FontFactory.getFont(FontFactory.HELVETICA, 9, SECONDARY_COLOR)));
//        contact.setAlignment(Element.ALIGN_CENTER);
//        contact.setSpacingBefore(3);
//        document.add(contact);
//
//        // Footer note
//        Paragraph footerNote = new Paragraph("This is a computer generated receipt",
//                FontFactory.getFont(FontFactory.HELVETICA_OBLIQUE, 8, BORDER_COLOR));
//        footerNote.setAlignment(Element.ALIGN_CENTER);
//        footerNote.setSpacingBefore(8);
//        document.add(footerNote);
//    }
//
//    private static void addDetailRow(PdfPTable table, String label, String value, boolean grayBackground) {
//        PdfPCell labelCell = new PdfPCell(new Paragraph(label, LABEL_FONT));
//        labelCell.setBorder(Rectangle.NO_BORDER);
//        if (grayBackground) {
//            labelCell.setBackgroundColor(LIGHT_GRAY);
//        }
//        labelCell.setPadding(6);
//        table.addCell(labelCell);
//
//        PdfPCell valueCell = new PdfPCell(new Paragraph(value, NORMAL_FONT));
//        valueCell.setBorder(Rectangle.NO_BORDER);
//        if (grayBackground) {
//            valueCell.setBackgroundColor(LIGHT_GRAY);
//        }
//        valueCell.setPadding(6);
//        table.addCell(valueCell);
//    }
//
//    private static String formatDate(LocalDate date) {
//        return date == null ? "" : date.format(DATE_FMT);
//    }
//
//    private static String formatDateTime(LocalDateTime dt) {
//        return dt == null ? "" : dt.format(DATETIME_FMT);
//    }
//
//    private static String safe(String s) {
//        return s == null ? "" : s;
//    }
//
//    private static String safeEnum(Object e) {
//        return e == null ? "" : e.toString();
//    }
//}


package com.frac.frac_backend.util;

import com.frac.frac_backend.entity.Booking;
import com.frac.frac_backend.entity.Payment;
import com.lowagie.text.*;
import com.lowagie.text.Font;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class PaymentPdfGenerator {

    // Date Formatters
    private static final DateTimeFormatter DATE_FMT = DateTimeFormatter.ofPattern("dd MMM yyyy");
    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm:ss");

    // Custom colors
    private static final Color PRIMARY_COLOR = new Color(52, 73, 94);
    private static final Color SECONDARY_COLOR = new Color(41, 128, 185);
    private static final Color ACCENT_COLOR = new Color(46, 204, 113);
    private static final Color LIGHT_GRAY = new Color(245, 245, 245);
    private static final Color BORDER_COLOR = new Color(200, 200, 200);

    // Fonts
    private static final Font TITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 22, PRIMARY_COLOR);
    private static final Font SUBTITLE_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, SECONDARY_COLOR);
    private static final Font HEADER_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, PRIMARY_COLOR);
    private static final Font LABEL_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, PRIMARY_COLOR);
    private static final Font NORMAL_FONT = FontFactory.getFont(FontFactory.HELVETICA, 10, Color.BLACK);
    private static final Font AMOUNT_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 16, ACCENT_COLOR);
    private static final Font STATUS_FONT = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, Color.WHITE);

    public static byte[] generateReceiptPdf(Payment payment, Booking booking) {
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            Document document = new Document(PageSize.A4, 36, 36, 36, 36);
            PdfWriter.getInstance(document, baos);

            document.open();

            // Header
            addHeader(document);

            // Receipt Info
            addReceiptInfo(document, payment);

            // Customer & Vehicle
            addCustomerVehicleInfo(document, booking);

            // Booking Details
            addBookingDetails(document, booking);

            // Additional Services
            addExtras(document, booking);

            // Payment Details
            addPaymentDetails(document, payment);

            // Footer
            addFooter(document);

            document.close();
            return baos.toByteArray();

        } catch (Exception e) {
            throw new RuntimeException("PDF generation failed: " + e.getMessage(), e);
        }
    }

    private static void addHeader(Document document) throws DocumentException {
        PdfPTable headerTable = new PdfPTable(2);
        headerTable.setWidthPercentage(100);
        headerTable.setWidths(new float[]{3f, 1f});

        // Company branding
        Paragraph companyPara = new Paragraph();
        companyPara.add(new Chunk("FRAC", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 26, SECONDARY_COLOR)));
        companyPara.add(new Chunk("  ", NORMAL_FONT));
        companyPara.add(new Chunk("Vehicle Rentals", FontFactory.getFont(FontFactory.HELVETICA, 11, PRIMARY_COLOR)));

        PdfPCell companyCell = new PdfPCell(companyPara);
        companyCell.setBorder(Rectangle.NO_BORDER);
        companyCell.setPaddingBottom(8);
        headerTable.addCell(companyCell);

        // Receipt badge
        PdfPCell badgeCell = new PdfPCell(new Paragraph("RECEIPT", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, Color.WHITE)));
        badgeCell.setBackgroundColor(SECONDARY_COLOR);
        badgeCell.setBorder(Rectangle.NO_BORDER);
        badgeCell.setPadding(8);
        badgeCell.setHorizontalAlignment(Element.ALIGN_CENTER);
        badgeCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
        headerTable.addCell(badgeCell);

        document.add(headerTable);

        // Decorative line
        PdfPTable lineTable = new PdfPTable(1);
        lineTable.setWidthPercentage(100);
        lineTable.setSpacingBefore(2);
        PdfPCell lineCell = new PdfPCell(new Paragraph(" "));
        lineCell.setBorder(Rectangle.TOP);
        lineCell.setBorderColor(SECONDARY_COLOR);
        lineCell.setBorderWidth(1.5f);
        lineCell.setPadding(3);
        lineTable.addCell(lineCell);
        document.add(lineTable);

        document.add(new Paragraph(" "));
    }

    private static void addReceiptInfo(Document document, Payment payment) throws DocumentException {
        PdfPTable receiptTable = new PdfPTable(3);
        receiptTable.setWidthPercentage(100);
        receiptTable.setWidths(new float[]{2f, 3f, 1.5f});
        receiptTable.setSpacingBefore(2);

        // Receipt No
        Paragraph refPara = new Paragraph();
        refPara.add(new Chunk("Receipt No: ", LABEL_FONT));
        refPara.add(new Chunk(safe(payment.getPaymentReference()), NORMAL_FONT));

        PdfPCell refCell = new PdfPCell(refPara);
        refCell.setBorder(Rectangle.NO_BORDER);
        refCell.setPadding(4);
        receiptTable.addCell(refCell);

        // Date
        Paragraph datePara = new Paragraph();
        datePara.add(new Chunk("Date: ", LABEL_FONT));
        datePara.add(new Chunk(formatDateTime(payment.getPaidAt()), NORMAL_FONT));

        PdfPCell dateCell = new PdfPCell(datePara);
        dateCell.setBorder(Rectangle.NO_BORDER);
        dateCell.setPadding(4);
        receiptTable.addCell(dateCell);

        // Status badge
        if (payment.getPaymentStatus() != null) {
            Paragraph statusPara = new Paragraph(payment.getPaymentStatus().toString(), STATUS_FONT);
            statusPara.setAlignment(Element.ALIGN_CENTER);

            PdfPCell statusCell = new PdfPCell(statusPara);
            statusCell.setBackgroundColor(ACCENT_COLOR);
            statusCell.setBorder(Rectangle.NO_BORDER);
            statusCell.setPadding(5);
            statusCell.setHorizontalAlignment(Element.ALIGN_CENTER);
            receiptTable.addCell(statusCell);
        } else {
            receiptTable.addCell(new PdfPCell(new Paragraph("")));
        }

        document.add(receiptTable);
        document.add(new Paragraph(" "));
    }

    private static void addCustomerVehicleInfo(Document document, Booking booking) throws DocumentException {
        Paragraph sectionTitle = new Paragraph("CUSTOMER & VEHICLE", SUBTITLE_FONT);
        sectionTitle.setSpacingBefore(5);
        sectionTitle.setSpacingAfter(5);
        document.add(sectionTitle);

        PdfPTable infoTable = new PdfPTable(2);
        infoTable.setWidthPercentage(100);
        infoTable.setKeepTogether(true);
        infoTable.setSpacingAfter(8);

        String customerName = safe(booking.getCustomer().getFirstName()) + " " + safe(booking.getCustomer().getLastName());
        String vehicleInfo = safe(booking.getVehicle().getMakeModel()) + " (" + safe(booking.getVehicle().getRegNumber()) + ")";

        addDetailRow(infoTable, "Customer:", customerName.trim(), true);
        addDetailRow(infoTable, "Agent:", safe(booking.getAgent().getCompanyName()), false);
        addDetailRow(infoTable, "Vehicle:", vehicleInfo, true);

        document.add(infoTable);
    }

    private static void addBookingDetails(Document document, Booking booking) throws DocumentException {
        Paragraph sectionTitle = new Paragraph("BOOKING DETAILS", SUBTITLE_FONT);
        sectionTitle.setSpacingBefore(5);
        sectionTitle.setSpacingAfter(5);
        document.add(sectionTitle);

        PdfPTable bookingTable = new PdfPTable(2);
        bookingTable.setWidthPercentage(100);
        bookingTable.setKeepTogether(true);
        bookingTable.setSpacingAfter(8);

        addDetailRow(bookingTable, "Booking ID:", String.valueOf(booking.getId()), true);
        addDetailRow(bookingTable, "Pickup Date:", formatDate(booking.getPickupDate()), false);
        addDetailRow(bookingTable, "DropOff Date:", formatDate(booking.getDropOffDate()), true);
        addDetailRow(bookingTable, "Pickup Location:", safe(booking.getPickupLocation()), false);
        addDetailRow(bookingTable, "DropOff Location:", safe(booking.getDropOffLocation()), true);

        document.add(bookingTable);
    }

    private static void addExtras(Document document, Booking booking) throws DocumentException {
        Paragraph sectionTitle = new Paragraph("ADDITIONAL SERVICES", SUBTITLE_FONT);
        sectionTitle.setSpacingBefore(5);
        sectionTitle.setSpacingAfter(5);
        document.add(sectionTitle);

        PdfPTable extrasTable = new PdfPTable(2);
        extrasTable.setWidthPercentage(100);
        extrasTable.setKeepTogether(true);
        extrasTable.setSpacingAfter(8);

        // GPS Row
        PdfPCell gpsLabelCell = new PdfPCell(new Paragraph("GPS Navigation", LABEL_FONT));
        gpsLabelCell.setBorder(Rectangle.NO_BORDER);
        gpsLabelCell.setBackgroundColor(LIGHT_GRAY);
        gpsLabelCell.setPadding(6);
        extrasTable.addCell(gpsLabelCell);

        String gpsValue = booking.isGpsIncluded() ? "✓ Included" : "✗ Not Included";
        Color gpsColor = booking.isGpsIncluded() ? ACCENT_COLOR : Color.RED;
        PdfPCell gpsValueCell = new PdfPCell(new Paragraph(gpsValue,
                FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, gpsColor)));
        gpsValueCell.setBorder(Rectangle.NO_BORDER);
        gpsValueCell.setBackgroundColor(LIGHT_GRAY);
        gpsValueCell.setPadding(6);
        extrasTable.addCell(gpsValueCell);

        // Child Seat Row
        PdfPCell childLabelCell = new PdfPCell(new Paragraph("Child Seat", LABEL_FONT));
        childLabelCell.setBorder(Rectangle.NO_BORDER);
        childLabelCell.setPadding(6);
        extrasTable.addCell(childLabelCell);

        String childValue = booking.isChildSeatIncluded() ? "✓ Included" : "✗ Not Included";
        Color childColor = booking.isChildSeatIncluded() ? ACCENT_COLOR : Color.RED;
        PdfPCell childValueCell = new PdfPCell(new Paragraph(childValue,
                FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, childColor)));
        childValueCell.setBorder(Rectangle.NO_BORDER);
        childValueCell.setPadding(6);
        extrasTable.addCell(childValueCell);

        document.add(extrasTable);
    }

    private static void addPaymentDetails(Document document, Payment payment) throws DocumentException {
        Paragraph sectionTitle = new Paragraph("PAYMENT DETAILS", SUBTITLE_FONT);
        sectionTitle.setSpacingBefore(5);
        sectionTitle.setSpacingAfter(5);
        document.add(sectionTitle);

        PdfPTable paymentTable = new PdfPTable(2);
        paymentTable.setWidthPercentage(100);
        paymentTable.setKeepTogether(true);
        paymentTable.setSpacingAfter(8);

        addDetailRow(paymentTable, "Reference:", safe(payment.getPaymentReference()), true);
        addDetailRow(paymentTable, "Method:", safeEnum(payment.getPaymentMethod()), false);
        addDetailRow(paymentTable, "Transaction Date:", formatDateTime(payment.getPaidAt()), true);

        // Amount row with special styling
        PdfPCell amountLabelCell = new PdfPCell(new Paragraph("Total Amount:", HEADER_FONT));
        amountLabelCell.setBorder(Rectangle.TOP);
        amountLabelCell.setBorderColor(BORDER_COLOR);
        amountLabelCell.setPadding(8);
        amountLabelCell.setBackgroundColor(LIGHT_GRAY);
        paymentTable.addCell(amountLabelCell);

        PdfPCell amountValueCell = new PdfPCell(new Paragraph(payment.getAmount() + " " + safe(payment.getCurrency()), AMOUNT_FONT));
        amountValueCell.setBorder(Rectangle.TOP);
        amountValueCell.setBorderColor(BORDER_COLOR);
        amountValueCell.setPadding(8);
        amountValueCell.setBackgroundColor(LIGHT_GRAY);
        paymentTable.addCell(amountValueCell);

        document.add(paymentTable);

        // Card details if applicable
        if (payment.getPaymentMethod() != null && payment.getPaymentMethod().name().equals("CARD")
                && payment.getMaskedCardNumber() != null) {
            PdfPTable cardTable = new PdfPTable(2);
            cardTable.setWidthPercentage(60);
            cardTable.setHorizontalAlignment(Element.ALIGN_LEFT);
            cardTable.setSpacingBefore(3);

            PdfPCell cardLabelCell = new PdfPCell(new Paragraph("Card Number:", LABEL_FONT));
            cardLabelCell.setBorder(Rectangle.NO_BORDER);
            cardLabelCell.setPadding(4);
            cardTable.addCell(cardLabelCell);

            PdfPCell cardValueCell = new PdfPCell(new Paragraph(safe(payment.getMaskedCardNumber()), NORMAL_FONT));
            cardValueCell.setBorder(Rectangle.NO_BORDER);
            cardValueCell.setPadding(4);
            cardTable.addCell(cardValueCell);

            PdfPCell brandLabelCell = new PdfPCell(new Paragraph("Brand:", LABEL_FONT));
            brandLabelCell.setBorder(Rectangle.NO_BORDER);
            brandLabelCell.setPadding(4);
            cardTable.addCell(brandLabelCell);

            PdfPCell brandValueCell = new PdfPCell(new Paragraph(safe(payment.getCardBrand()), NORMAL_FONT));
            brandValueCell.setBorder(Rectangle.NO_BORDER);
            brandValueCell.setPadding(4);
            cardTable.addCell(brandValueCell);

            document.add(cardTable);
        }
    }

    private static void addFooter(Document document) throws DocumentException {
        document.add(new Paragraph(" "));

        // Decorative line
        PdfPTable lineTable = new PdfPTable(1);
        lineTable.setWidthPercentage(100);
        lineTable.setSpacingBefore(5);
        PdfPCell lineCell = new PdfPCell(new Paragraph(" "));
        lineCell.setBorder(Rectangle.TOP);
        lineCell.setBorderColor(SECONDARY_COLOR);
        lineCell.setBorderWidth(1);
        lineCell.setPadding(8);
        lineTable.addCell(lineCell);
        document.add(lineTable);

        // Thank you message
        Paragraph thankYou = new Paragraph("Thank you for choosing FRAC Vehicle Rentals!",
                FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, SECONDARY_COLOR));
        thankYou.setAlignment(Element.ALIGN_CENTER);
        thankYou.setSpacingBefore(5);
        document.add(thankYou);

        // Contact information
        Paragraph contact = new Paragraph();
        contact.add(new Chunk("www.frac.com", FontFactory.getFont(FontFactory.HELVETICA, 9, SECONDARY_COLOR)));
        contact.add(new Chunk("  |  ", FontFactory.getFont(FontFactory.HELVETICA, 9, BORDER_COLOR)));
        contact.add(new Chunk("support@frac.com", FontFactory.getFont(FontFactory.HELVETICA, 9, SECONDARY_COLOR)));
        contact.add(new Chunk("  |  ", FontFactory.getFont(FontFactory.HELVETICA, 9, BORDER_COLOR)));
        contact.add(new Chunk("+94 11 234 5678", FontFactory.getFont(FontFactory.HELVETICA, 9, SECONDARY_COLOR)));
        contact.setAlignment(Element.ALIGN_CENTER);
        contact.setSpacingBefore(3);
        document.add(contact);

        // Footer note
        Paragraph footerNote = new Paragraph("This is a computer generated receipt",
                FontFactory.getFont(FontFactory.HELVETICA_OBLIQUE, 8, BORDER_COLOR));
        footerNote.setAlignment(Element.ALIGN_CENTER);
        footerNote.setSpacingBefore(8);
        document.add(footerNote);
    }

    private static void addDetailRow(PdfPTable table, String label, String value, boolean grayBackground) {
        PdfPCell labelCell = new PdfPCell(new Paragraph(label, LABEL_FONT));
        labelCell.setBorder(Rectangle.NO_BORDER);
        if (grayBackground) {
            labelCell.setBackgroundColor(LIGHT_GRAY);
        }
        labelCell.setPadding(6);
        table.addCell(labelCell);

        PdfPCell valueCell = new PdfPCell(new Paragraph(value, NORMAL_FONT));
        valueCell.setBorder(Rectangle.NO_BORDER);
        if (grayBackground) {
            valueCell.setBackgroundColor(LIGHT_GRAY);
        }
        valueCell.setPadding(6);
        table.addCell(valueCell);
    }

    private static String formatDate(LocalDate date) {
        return date == null ? "" : date.format(DATE_FMT);
    }

    private static String formatDateTime(LocalDateTime dt) {
        return dt == null ? "" : dt.format(DATETIME_FMT);
    }

    private static String safe(String s) {
        return s == null ? "" : s;
    }

    private static String safeEnum(Object e) {
        return e == null ? "" : e.toString();
    }
}