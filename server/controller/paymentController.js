const paymentService = require('../services/paymentServices');

async function addPayment(req, res, next) {
    try{
        const {month, price} = req.body;
        const paymentData = {month, price};
        const newPayment = await paymentService.addPaymentService(paymentData);
        res.status(201).json(newPayment);
    }
    catch(error){
        next(error);
    }
}

async function getAllPaymentController(req, res, next) {
    try{
        const payment = await paymentService.getAllPayment();
        res.json(payment)
    }catch(error){
        next(error);
    }
}

async function updatePaymentController(req, res, next) {
    try {
        const paymentId = req.params.id;
        const {month, price} = req.body;
        const paymentData = {month, price};
        const payment = await paymentService.updatePaymentService(paymentId, paymentData);
        res.status(200).json(payment)
    } catch (error) {
        next(error)
    }
}

async function deletePaymentController(req, res, next) {
    try {
        const paymentId = req.params.id;
        const deletePayment = await paymentService.deletePaymentService(paymentId);
        res.json({message: "Dleted Successfully",deletePayment})
    } catch (error) {
        next(error)
    }
}

module.exports = {addPayment, getAllPaymentController, deletePaymentController, updatePaymentController};