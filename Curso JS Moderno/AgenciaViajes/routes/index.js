import express from 'express';
import  principal  from '../controllers/paginasController.js';
// import { paginaInicio } from '../controllers/paginasController';

const router = express.Router();
// cuerpo
// req "Todo lo que el usuario envía 'visitas, datos, formularios'"
// res "Las respuestas del express, resultados de validaciones, alert"




router.get('/', principal);
// INICIO
// router.get('/', (req,res) => {
//     // Crea tu propia respuesta - Metodo send impresión en pantalla
//     res.render('inicio', {
//         pagina : 'Inicio'
//     });     
// });


router.get('/viajes', (req,res)=>{
    res.render('viajes', {
        pagina : 'Viajes'
    })
})

router.get('/testimonios', (req,res)=>{
    res.render('testimonios', {
        pagina : 'Testimoniales'
    })
})

router.get('/nosotros', (req,res) => {
    
    const viajes = 'Viaje'
    const estatico = 'A alemania'

    
    res.render('nosotros', {
        pagina : 'Nosotros'
    }); 
});

router.get('/contactos', (req,res) => {
    res.render('contactos'); 
});

router.get('/dictionary', (req,res) => {
    // Soporta json, render, send
    res.render('dictionary', { 
        person : { id : 5 , number : 18}
    
    });
});

export default router