import { SQL_DB } from './index.js';
import {User} from './users.js';
import {Video} from './video.js';
import {Shares} from './shares.js';
import {Likes} from './likes.js';
import {Follows} from './follows.js';
import {Comment} from './comments.js';

SQL_DB.sync({force: false})
        .then(()=>{
            console.log("DB synced.")
        })
        .catch((err)=>{
            console.log(`SYNC err ${err}`)
        })