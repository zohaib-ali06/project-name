const express = require('express');

const routes=express()

const Selected_theme=require('../controllers/Selectedtheme');


routes.post('/', Selected_theme.genre_list);
routes.post('/login/themes', Selected_theme.insertThemes);
// routes.get('/:id', Selected_theme.getdata);
routes.get('/themedata/:id', Selected_theme.getThemesData);
routes.post('/upload', Selected_theme.imgupload);






module.exports=routes;