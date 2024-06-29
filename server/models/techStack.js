const mongoose = require('mongoose');

const techstackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const techStack = mongoose.model("TechStack", techstackSchema);

module.exports = techStack;