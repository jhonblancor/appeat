'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//definir el schema denuestro producto
const ProductSchema = Schema({
	title:String,
	description:String,
	imageUrl:String,
	pricing: Number,
	password: String
});

//para exportar el modelo - 
//de esta manera el resto de la app sera accesible al modelo
module.exports = mongoose.model('Product', ProductSchema);