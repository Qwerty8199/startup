import { SQL_DB, DataTypes } from './index.js'
import {User} from './users.js'
import { Video } from './video.js'

export const Comment = SQL_DB.define('Comment',{
    commentId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{
        type: DataTypes.INTEGER,
        references:{
            model:User,
            key:'userId',
        }
    },
    videoId:{
        type: DataTypes.INTEGER,
        references:{
            model: Video,
            key: 'videoId'
        }
    },
    commentContent: {
        type: DataTypes.STRING
    }},
    {
        timestamps: true
    }
)