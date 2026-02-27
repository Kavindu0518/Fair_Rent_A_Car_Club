// src/services/bankTransferService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const submitBankTransfer = async (formData, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/banktransfer/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Bank transfer submission error:', error);
        throw error;
    }
};