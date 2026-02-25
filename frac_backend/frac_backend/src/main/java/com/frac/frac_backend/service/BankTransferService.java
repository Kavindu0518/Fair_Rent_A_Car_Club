//package com.frac.frac_backend.service;
//
//import com.frac.frac_backend.dto.BankTransferInputDTO;
//import com.frac.frac_backend.dto.BankTransferOutputDTO;
//
//import java.util.List;
//
//public interface BankTransferService {
//
//    BankTransferOutputDTO createBankTransfer(BankTransferInputDTO bankTransferDTO);
//
//    BankTransferOutputDTO updateBankTransferStatus(Long id, String status);
//
//    List<BankTransferOutputDTO> getAllBankTransfers();
//}


package com.frac.frac_backend.service;

import com.frac.frac_backend.dto.BankTransferInputDTO;
import com.frac.frac_backend.dto.BankTransferOutputDTO;

import java.util.List;

public interface BankTransferService {

    BankTransferOutputDTO createBankTransfer(BankTransferInputDTO bankTransferDTO);

    BankTransferOutputDTO updateBankTransferStatus(Long id, String status);

    List<BankTransferOutputDTO> getAllBankTransfers();

    BankTransferOutputDTO getBankTransferById(Long id);

    void deleteBankTransfer(Long id);
}