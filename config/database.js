const { Sequelize } = require('sequelize');
// Option 2: Passing parameters separately (other dialects)
module.exports = new Sequelize('notas_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000        
    }
});