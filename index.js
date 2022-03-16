const express = require('express');
const app = express()
const Employee = require('./models/employee');
const path = require('path');
const ejsLint = require('ejs-lint');

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/employee1', { useNewUrlParser: true })
    .then(() => {
        console.log(" Mongo Connection open");
    })
    .catch(err => {
        console.log("error in mongo connection is ", err);
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


///////////////////////////Routes///////////////////////

app.get('/employees', async (req, res) => {
    try {
        const employee = await Employee.find({});
        res.render('index', { employee });
    }
    catch (e) {
        console.log(e);
    }

})

app.get('/employees/new', (req, res) => {
    res.render('new');
})

app.post('/employees', async (req, res) => {
    let c = await Employee.countDocuments();
    const { firstname, lastname, mobilenumber, street, city, state, country, pincode } = req.body;
    const employee = new Employee({ firstname, lastname, mobilenumber, employeeid: `ERAD00${c + 1}` });
    employee.address.push({ street, city, state, country, pincode });
    await employee.save();
    res.redirect(`/employees/${employee._id}`);
})

app.get('/employees/:id', async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.render('show', { employee });
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})