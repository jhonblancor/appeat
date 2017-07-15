var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const Product = require('models/product.js');
var app = express();


app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());



app.set("view engine", "jade");

app.use(express.static("public"));

app.get("/", function(solicitud, respuesta){
	respuesta.render("index");
});

app.post("/menu", function(solicitud, respuesta){
	console.log(solicitud.body);

		let product = new Product();

		product.title = solicitud.body.title
		product.description = solicitud.body.description
		product.imageUrl = solicitud.body.imageUrl
		product.pricing = solicitud.body.pricing
		product.password = solicitud.body.password

		product.save((err, productStored) =>{
		if(err) res.status(500).send({ message: 'errror al guardar el producto' + err})
		else{
			res.status(200).send({product: productStored})
			respuesta.render("index");
		}
		
	})


});

app.get("/menu/new", function(solicitud, respuesta){
respuesta.render("menu/new");
});


mongoose.connect("mongodb://localhost/primera_web", (err, res) =>{
	if(err){
		console.log('error al intentar conectar con la base de datos'+err);
	}else{
		console.log('Conexion exitosa...!');
	}
	app.listen(8085, ()=>{
		Console.log('API Corriendo ')
	});
});
