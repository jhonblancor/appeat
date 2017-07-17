var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const Product = require('./models/product.js');
var app = express();


app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());



app.set("view engine", "jade");

app.use(express.static("public"));

app.get("/", function(solicitud, respuesta){
	respuesta.render("index");
});

app.post("/menu", function(solicitud, respuesta){
	console.log("entre a post/menu");
	console.log(solicitud.body);
	console.log("pase por solicitud body");
		let product = new Product();
console.log("cree el producto");

		product.title = solicitud.body.title
		console.log("teme valor de title");
		product.description = solicitud.body.description
console.log("teme valor de description");
		product.pricing = solicitud.body.pricing
		console.log("teme valor de precio");
		product.password = solicitud.body.password
console.log("teme valor de pass");
		product.save((err, productStored) =>{
	console.log("lo guarde");
			console.log(product);
				respuesta.render("index");
	
		
		
	})


});

app.get("/menu/new", function(solicitud, respuesta){
respuesta.render("menu/new");
});


mongoose.connect("mongodb://localhost/eatapp", (err, res) =>{
	if(err){
		console.log('error al intentar conectar con la base de datos'+err);
	}else{
		console.log('Conexion exitosa...!');
	}
	app.listen(8085, ()=>{
		console.log('API Corriendo ')
	})
});
