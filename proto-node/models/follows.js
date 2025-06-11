import { SQL_DB, DataTypes } from './index.js'
import {User} from './users.js'

export const Follows = SQL_DB.define('Follows',{
    followId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    followerId:{
        type: DataTypes.INTEGER,
        references:{
            model:User,
            key:'userId'
        }
    },
    followeeId:{
        type: DataTypes.INTEGER,
        references:{
            model:User,
            key:'userId'
        }
    }},
    {
        timestamps: true
    }
)