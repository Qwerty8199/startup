import { SQL_DB, DataTypes } from './index.js'
import {User} from './users.js'
import {Video} from './video.js'

export const Likes = SQL_DB.define('Likes',{
    likeId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{
        type: DataTypes.INTEGER,
        references:{
            model:User,
            key:'userId'
        }
    },
    videoId:{
        type: DataTypes.INTEGER,
        references:{
            model: Video,
            key:'videoId'
        }
    }},{
        timestamps: true
    }
)