import express from 'express';

export const VideoRouter = express.Router()

// Videos
VideoRouter.post('/upload',()=>{});
VideoRouter.get('/videos/feed',()=>{});
VideoRouter.get('/vidoes/:videoId',()=>{})

// Video Interactions
VideoRouter.post('/videos/:videoId/like',()=>{})
VideoRouter.post('/Vidoes/:videoId/comment',()=>{})
VideoRouter.post('/videos/:videoId/share',()=>{})

