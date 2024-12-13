import { DataTypes } from 'sequelize';
import db from '../config/db.js';


const Bank = db.define('res_bank' , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    state: {
        type: DataTypes.INTEGER
    },
    country:{
        type: DataTypes.INTEGER
    },
    create_uid: {
        type: DataTypes.INTEGER
    },
    write_uid:{
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    street: {
        type: DataTypes.STRING
    },
    street2:{
        type: DataTypes.STRING
    },
    zip:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    bic:{
        type: DataTypes.STRING
    },
    active:{
        type: DataTypes.BOOLEAN
    },
    create_date:{
        type: DataTypes.DATE
    },
    write_date:{
        type: DataTypes.STRING
    } 
});

export default Bank;

//     display_name: {
//         type: DataTypes.STRING,
//     },


