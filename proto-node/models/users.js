import { SQL_DB, DataTypes } from "./index.js";

export const User = SQL_DB.define( 'User', {
    userId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
    },
    bio: {
        type: DataTypes.STRING,
        allownull: true,
    }},
    {
        timestamps: true
    }
)

export default User;