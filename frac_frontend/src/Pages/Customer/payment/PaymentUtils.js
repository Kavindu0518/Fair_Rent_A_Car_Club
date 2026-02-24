export const generateTransactionReference = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `TXN${timestamp}${random}`;
};

export const maskCardNumber = (number) => {
    const cleaned = number.replace(/\s/g, '');
    return `**** **** **** ${cleaned.slice(-4)}`;
};

export const maskAccountNumber = (number) => {
    if (!number) return '';
    const cleaned = number.replace(/\s/g, '');
    if (cleaned.length <= 4) return cleaned;
    return `XXXX XXXX ${cleaned.slice(-4)}`;
};

export const maskWalletId = (id) => {
    if (!id) return '';
    if (id.length <= 4) return id;
    return `****${id.slice(-4)}`;
};

export const detectCardBrand = (number) => {
    const firstDigit = number[0];
    if (firstDigit === '4') return 'VISA';
    if (firstDigit === '5') return 'MASTERCARD';
    if (firstDigit === '3') return 'AMEX';
    if (firstDigit === '6') return 'DISCOVER';
    return 'UNKNOWN';
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR',
        minimumFractionDigits: 0
    }).format(amount).replace('LKR', 'Rs.');
};

export const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export const preparePaymentData = (booking, customerId, selectedMethod, cardDetails, bankTransferDetails, cashDetails, walletDetails, txnRef, methodConfig) => {
    const baseData = {
        bookingId: booking.id,
        customerId: customerId,
        amount: booking.totalPrice,
        currency: 'LKR',
        paymentMethod: methodConfig.backendValue,
        paymentStatus: methodConfig.backendStatus,
        paymentReference: txnRef
    };

    switch (selectedMethod) {
        case 'card': {
            return {
                ...baseData,
                maskedCardNumber: maskCardNumber(cardDetails.cardNumber),
                cardLast4: cardDetails.cardNumber.slice(-4),
                cardBrand: detectCardBrand(cardDetails.cardNumber)
            };
        }
            
        case 'bank':
            return {
                ...baseData,
                bankName: bankTransferDetails.bankName,
                accountNumber: maskAccountNumber(bankTransferDetails.accountNumber),
                accountHolder: bankTransferDetails.accountHolder,
                transferReference: bankTransferDetails.transferReference
            };
            
        case 'cash':
            return {
                ...baseData,
                pickupLocation: cashDetails.pickupLocation,
                contactNumber: cashDetails.contactNumber
            };
            
        case 'wallet':
            return {
                ...baseData,
                walletId: maskWalletId(walletDetails.walletId),
                phoneNumber: walletDetails.phoneNumber,
                cardLast4: walletDetails.phoneNumber?.slice(-4) || '',
                cardBrand: walletDetails.walletType.toUpperCase()
            };
            
        default:
            return baseData;
    }
};