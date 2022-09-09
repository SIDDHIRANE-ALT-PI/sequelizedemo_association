const express = require('express');
const app = express();
const sequelize = require('./util/database');

const port = 8080;
const Customer = require('./models/customer');
const Order = require('./models/order');
Customer.hasMany(Order);
let customerId = null;

sequelize.sync({ force: true }).then((result) => {
    return Customer.create({ name: 'Siddhi Rane', email: 'siddhi@gmail.com' });
    console.log(result);
}).then(Customer => {
    customerId = Customer.id;
    console.log('First Customer Created:', Customer);
    //old code //return Order.create({total:45});
    return Customer.createOrder({ total: 45 });
})
    .then(order => {
        console.log('order is', order);
       return Order.findAll({ where: customerId });
       
    })
    .then(orders=>{
        console.log('All the Orders are:',orders);
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(port, () => {
    console.log(`port is listening at ${port}`);
})

