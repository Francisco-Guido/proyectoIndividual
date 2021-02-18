const { Sequelize } = require('sequelize');
const db = require('../config/database');

const notas = db.define('notas',
{
    Id:{
        type: Sequelize.INTEGER
    },
    Titulo:{
        type: Sequelize.STRING(50)
    },
    Texto:{
        type: Sequelize.INTEGER(2000)
    },
    createdAt:{
        type: Sequelize.DATE
    },
    updatedAt:{
        type: Sequelize.DATE
    },
    deletedAt:{
        type: Sequelize.DATE
    }
});
module.exports = notas;