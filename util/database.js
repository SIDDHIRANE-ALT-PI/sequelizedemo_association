const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_youtube', 'root', 'rootpassword', {
    host: 'localhost',
    dialect: 'mysql'
    //pool:{max:5,min:0,idle:10000}
});
module.exports = sequelize;