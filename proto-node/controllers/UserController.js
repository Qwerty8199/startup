import {User} from '../models/users.js'

export const loginUser = async (req, res) =>{

    try{

        const { username, email, password } = req.body;
        const fetchedUser = await User.findOne({ where:{ username: username } })
        if(!fetchedUser){
            res.status(404)
                .json({
                    'message':'User Not Found'
                })
        }
        if(fetchedUser.password != password){
            res.status(401)
                .json({
                    'message':"Invalid Credentials"
                })
        }

        res.status(200)
            .json({
                'message':'Logged In'
            })

    }catch(err){
        console.error(err)
    }

}


export const registerUser = async (req, res) =>{
    try{

        const { username, email, password } = req.body;
        const fetchedUser = await User.findOne({ where:{ username: username } })
        if(fetchedUser){
            res.status(404)
                .json({
                    'message':'User Already present'
                })
        }
        const newUser = await User.create({
            username:username,
            email:email,
            password:password,
        })
        res.status(200)
            .json({
                'message':'User registered'
            })

    }catch(err){
        console.error(err)
    }
}