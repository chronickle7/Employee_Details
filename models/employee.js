const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstname: {
        type: String,
        // required: true
    },
    lastname: {
        type: String,
        // required: true
    },
    mobilenumber: {
        type: Number,
        // required: true
    },
    employeeid: {
        type: String,
        // required: true
    },
    address: [
        {
            street: String,
            city: String,
            state: String,
            country: String,
            pincode: Number
        }
    ]
})



module.exports = mongoose.model('Employee', employeeSchema);