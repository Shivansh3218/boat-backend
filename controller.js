var express = require('express');
var mongoose = require('mongoose');
const router = require('router')
const boat = require('./models')
const {findAllBoats,createboat} =require('./methods');

module.exports.getAllProducts = async (req,res)=>{
    const data =await findAllBoats(req.body)
    res.send(data)
}

module.exports.createProduct  = async (request,response)=>{
    const data = await createboat({...request.body});
    response.send(data);
}
