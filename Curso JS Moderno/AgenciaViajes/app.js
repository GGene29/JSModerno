// Configuración de express

// importación de express 
// Nuevo - soporta importar
import express from 'express';
// Antes - se debía instanciar
// const express = require('express');
import router from './routes/index.js';
import db from './config/db.js';


// import pkg from 'pg';
// const { Pool } = pkg;

// función para ejecutar express
const app = express();

const initServer = async() => {
    try {
        
        // Validar la conexión con la abse de datos
        await db.authenticate();
        console.log("conexion establecida");

        await db.sync({ alter: false });
                
        // Definir puerto - Variables de Entorno
        const port = process.env.PORT || 4000;
        
        // El "use" soporta todos -> get, post, put, patch.
        // Agregar Router
        app.use('/', router); 
        
        // Habilitar PUG
        app.set('view engine', 'pug');
        
        //Middleware - obtener fecha actual
        app.use( (req, res, next) => {
            
            
            const years = new Date();
            // console.log(years)
            
            // console.log(res)
            res.locals.yearsActual = years.getFullYear();
            res.locals.nombresitio = "Agencia de Viajes";
        
        
            
            // Obliga a pasar al siguiente
            next();
        })
        
        // Habilitar public
        app.use(express.static('public'))
        
        // Arranca mediante listen y un callback 
        app.listen(port, ()=>{
            console.log(`Servidor funcionando port ${port}`)
        })

    } catch (error) {
        console.log(error);
    }        
}    

initServer();