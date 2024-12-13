import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const ConfigParameter = db.define('ir_config_parameter' , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    key:{
        type: DataTypes.STRING,
        allowNull: false
    },
    create_uid: {
        type: DataTypes.INTEGER
    },
    write_uid:{
        type: DataTypes.INTEGER
    },
    // active:{
    //     type: DataTypes.BOOLEAN
    // },
    create_date:{
        type: DataTypes.DATE
    },
    write_date:{
        type: DataTypes.STRING
    } 
});

export default ConfigParameter;


