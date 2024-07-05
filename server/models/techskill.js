const mongoose = require('mongoose');

const techskillSchema = mongoose.Schema({
    question_code: {
        type: String,
        required: true
    },
    evaluator: {
        type: String,
        required: true
    },
    repo: {
        type: String,
        required: true
    },
    branch_creation: {
        type: Number,
        required: true
    },
    committing_meaasge: {
        type: Number,
        required: true
    },
    code_pushing: {
        type: Number,
        required: true
    },
    scope_identification: {
        type: Number,
        required: true
    },
    scope_covered: {
        type: Number,
        required: true
    },
    time_management:{
        type: Number,
        required: true
    },
    professionalism: {
        type: Number,
        required: true
    },
    high_level_architecture_diagram: {
        type: Number,
        required: true
    },
    low_level_diagram: {
        type: Number,
        required: true
    },
    code_structure:{
        type: Number,
        required: true
    },
    nameing_conventions:{
        type: Number,
        required: true
    },
    code_formatting: {
        type: Number,
        required: true
    }

})