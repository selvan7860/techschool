const mongoose = require('mongoose')

const designationSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

const designation = mongoose.model("Designation", designationSchema);

module.exports = designation;