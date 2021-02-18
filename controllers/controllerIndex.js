const Notas = require('../models/notas');

function findAll(res){
    Notas.findAll({
        where: {
            deletedAt: null
        }
    }).then(function(notas){
        res.render('index', {
            notas: notas
        });
    }).catch(console.log('error'));
}

module.exports = {
    home: function(req,res){
        findAll(res);
    },
    details:function(req,res){
        Notas.findAll({
            where: {
                Id: req.body.id
            }
        }).then(function(notas){
            return res.render('index', {
                notas: notas
            });
        }).catch(console.log('error'));
    },
    post: function(req,res){
        Notas.create({ Titulo: req.body.titulo, Texto: req.body.texto, createdAt: new Date() }).then(function(){
            findAll(res);
        }).catch(console.log('error'));
    },
    delete: function(req,res){
        Notas.update({ deletedAt: new Date() }, {
            where: {
              Id:  req.body.Id
            }
          }).then(function(){        
              findAll(res);
        }).catch(console.log('error'));
    }
}