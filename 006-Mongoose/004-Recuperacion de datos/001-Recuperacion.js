var mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/contacto';

const formularioSchema = new mongoose.Schema({
	nombre:String,
	asunto:String,
	mensaje:String,
	fecha:String
})

const Formulario = 
mongoose.model("Formulario",formularioSchema)
mongoose.connect(conexion, {
	useNewUrlParser:true,
	useUnifiedTopology:true
}).then(function(){
	console.log("conectado a mongo");
}).catch(function(error){
  console.error("Error al conectar a MongoDB:", error);
});

