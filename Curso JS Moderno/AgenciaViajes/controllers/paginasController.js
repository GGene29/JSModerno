// import Task from '../models/Viaje.js';
import db from "../config/db.js";
import Bank from "../models/Viaje.js";
import ConfigParameter from "../models/IrConfigParameter.js";

const principal = async (req,res) => {

    // Consultar DB
    // const tareas = await Task.findAll();
    try {
        const response = await Bank.findAll();
        console.log("Respuesta");
        console.log(response);
        // const [results, metadata] = await db.query('SELECT "id", "key", "value", "create_uid", "write_uid", "active", "create_date", "write_date" FROM "ir_config_parameter" AS "ir_config_parameter";');
        const results = await ConfigParameter.findAll();
        console.log(results);
        // console.log(metadata);

        res.render('inicio', {
            pagina : 'Inicio del controlador'
        });        
    } catch (error) {
        console.log(error);
    }
};

export default principal


// const paginaInicio = async (req,res) => {

//     // Consultar DB
//     Viaje.connect()
//     Viaje.query('SELECT * FROM project.task')    
//         .then(response => {
//             console.log('Paso')
//             console.lof('response.rows')
//         })
//         .catch(error => {
//             client.end()
//         })
    
//     res.render('inicio', {
//         pagina: 'Inicio',
//         prueba:'Funcionando'
//     });
// };

// export{
//     paginaInicio
// }