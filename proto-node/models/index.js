import { Sequelize, DataTypes } from 'sequelize';

const DB_NAME = 'TIKOKDB';
const DB_USERNAME = 'DB_USER_NAME'
const DB_PASS = 'DB_PASSWORD'
const DB_HOST = 'localhost'
const DB_TYPE = 'postgres'

const SQL_DB = new Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASS,
    {
        host : DB_HOST,
        dialect: DB_TYPE
    }
)

SQL_DB.authenticate()
        .then(()=>{
            console.log('SQL DB connected.')
        })
        .catch(err => {
            console.error(`SQL ERR - ${err}`)
        })


export {SQL_DB, DataTypes}
