const mongoose = require('mongoose')
const Employee = require('./models/employee');

mongoose.connect('mongodb://localhost:27017/employee1', { useNewUrlParser: true })
    .then(() => {
        console.log(" Mongo Connection open");
    })
    .catch(err => {
        console.log("error in mongo connection is ", err);
    })



// const employee = new Employee({
//     firstname: 'Sam',
//     lastname: 'shamra',
//     mobilenumber: 345678,
//     employeeid: 'ERAD0001',
//     address: [
//         {
//             street: 'roft',
//             city: 'dehradun',
//             state: 'Uttarakhand',
//             country: 'India',
//             pincode: '248001'
//         }
//     ]
// })

// employee.save();

