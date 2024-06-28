const Payment = require('../models/payment')

async function addPaymentService(paymentData) {
    try {
        const newPayment = new Payment(paymentData);
        return await newPayment.save();
    } catch (error) {
        throw new Error('Error while adding payment');
    }
}

async function getAllPayment() {
    try {
        return await Payment.find();
    } catch (error) {
        throw new Error('Error while fetching payment');
    }
}

async function updatePaymentService(paymentId, paymentData) {
    try {
        const updatePayment = await Payment.findByIdAndUpdate(
            paymentId,
            paymentData,
            {new: true}
        )
        if(!updatePayment){
            throw new Error('Payment not found');
        }
        return updatePayment;
    } catch (error) {
        throw new Error('Error while updating payment');
    }
}

async function deletePaymentService(paymentId) {
    console.log(paymentId)
    try {
        return await Payment.findByIdAndDelete(paymentId)
    } catch (error) {
        throw new Error('Error while deleting payment');
    }
}

module.exports = {addPaymentService, getAllPayment,deletePaymentService, updatePaymentService};