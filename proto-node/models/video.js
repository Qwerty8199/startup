import { SQL_DB, DataTypes } from './index.js'
import {User} from './users.js'

export const Video = SQL_DB.define('Video', {

    videoId : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
    },
    userId : {
        type: DataTypes.INTEGER,
        allownull : true,
        references : {
            model : User,
            key: 'userId'
        }
    },
    title:{
        type : DataTypes.STRING,
    },
    videoURL : {
        type : DataTypes.STRING,
    },
    thumbnail : {
        type : DataTypes.STRING,
    },
    likesCount:{
        type: DataTypes.INTEGER,
    },
    commentsCount:{
        type: DataTypes.INTEGER,
    }},
    {
        timestamps: true
    }
)