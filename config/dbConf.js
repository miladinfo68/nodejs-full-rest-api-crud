const mongoose = require("mongoose");
const Employee = require('../models/emp-model.js');
mongoose.connect(process.env.BD_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    //Employee.countDocuments.drop();
    Employee.countDocuments((err, count) => {
        if (count == 0) {
            Employee.create([{
                userName: 'miladinfo68@jalali.com',
                password: '123456',
                fullName: 'milad jalali',
                mobile: '00989352453609'
            }, {
                userName: 'fake1@gmail.com',
                password: '123456',
                fullName: 'fake user 1',
                mobile: '00989352453609'
            }]).then(emp => {
                console.log(`${emp.length} items created`);
            }).catch((err) => {
                console.log(err);
            })
            // .finally(() => {
            //     mongoose.connection.close();
            // });
        }
    });
    console.log("connecting to database successfuly has done!");
}).catch(err => {
    console.log("error in conecting to db \n" + err);
});