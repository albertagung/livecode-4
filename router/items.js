const express = require('express')
const router = express.Router()
const Models = require('../models')

router.get('/',function(req,res){
  Models.Item.findAll().then(function(dataItem){
    res.render('items',{Item:dataItem})
  })
})

router.get('/add',function(req,res){
  res.render('addItems')
})

router.post('/add',function(req,res){
  Models.Item.create({
    name: req.body.name,
    brand: req.body.brand,
    codeitem: req.body.codeitem
  }).then(function(){
    res.redirect('/items')
  })
})

router.get('/edit/:id',function(req,res){
  Models.Item.findAll({
    where:{
      id: req.params.id
    }
  }).then(function(dataItem){
    res.render('editItems',{Item:dataItem})
  })
})

router.post('/edit/:id',function(req,res){
  Models.Item.update({
    name: req.body.name,
    brand: req.body.brand,
    codeitem: req.body.codeitem
  },{
    where: {
      id: req.params.id
    }
  }).then(function(){
    res.render('editItems')
  })
})

router.get('/delete/:id',function(req,res){
  Models.Item.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(){
    res.redirect('/items')
  })
})


module.exports = router
