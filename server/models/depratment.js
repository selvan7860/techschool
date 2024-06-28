const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const department = mongoose.model('Department', departmentSchema)

module.exports = department;