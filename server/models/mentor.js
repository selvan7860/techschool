const mongoose = require('mongoose');

const mentorDetails = mongoose.Schema({
    project: {
        type: String,
        required: true
    },
    project_manager:{
        type: String,
        required:true
    },
    bandwidth:{
        type: String,
        match: /^\d{2}:\d{2}:\d{2}$/
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const mentor = mongoose.model("Mentor", mentorDetails);

module.exports = mentor;