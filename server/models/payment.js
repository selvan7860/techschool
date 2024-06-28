const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    month: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const payment = mongoose.model("Payment", paymentSchema);

module.exports = payment;
