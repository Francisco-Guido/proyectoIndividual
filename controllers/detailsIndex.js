const Notas = require('../models/notas');

function findAll(res){
    Notas.findAll({
        where: {
            deletedAt: null
        }
    }).then(function(notas){
        return res.render('index', {
            notas: notas
        });
    }).catch(console.log('error'));
}
module.exports = {
    details:function(req,res){
            Notas.findAll({
                where: {
                    Id: req.query.Id
                }
            }).then(function(notas){
                return res.render('details', {
                    notas: notas
                });
            }).catch(console.log('error'));
        },
    update: function(req,res){
        const nuevaNota = Notas.update({ 
            Titulo: req.body.titulo,
            Texto: req.body.texto,
            updatedAt: new Date() 
        }, {
            where: {
              Id:  req.body.Id
            }
          }).then(function(notas){
               findAll(res);
        }).catch(console.log('error'));
    },
}