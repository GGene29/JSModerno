// import { Pool }  from 'pg';

// import pkg from 'pg';
// const { Pool } = pkg;

import Sequelize from 'sequelize';

// const { Pool }  = require('pg');


const db = new Sequelize('postgres','odoo','odoo',{
    host :'192.168.0.2',
    port : '5432',
    dialect: 'postgres',
    define:{ 
        timestamps:false,
        freezeTableName: true
    },
    
    // pool: {
    //     max: 5, 
    //     min: 0,
    //     acquire: 5000,
    //     idle: 10000   
    // },
    // operatorsAliases: false

});

// const pool = new Pool(db);
// let datosTareas = "Aquui"

const getInfo = ()=>{
    console.log("Prueba DE FUNCIÓN")
    db.query('SELECT * FROM res_bank;');

};

// getInfo();

export default db;
