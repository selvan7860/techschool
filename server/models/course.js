const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

const course = mongoose.model("Course", courseSchema);

module.exports = course;