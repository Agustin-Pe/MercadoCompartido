const express = require('express');
const app = express();

//Rutas
const rutasHome = require('./routers/home.js');
const rutasLogin = require('./routers/login.js');
const rutasRegister = require('./routers/register.js');

app.set('view engine', 'ejs');

/*const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) );*/


/*Esto permite que se vea el css del html*/
const path=require('path');
const publicPath=path.join(__dirname,'/public');
app.use(express.static(__dirname + '/public'));


const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.log('Servidor Funcionando en puerto 3002')
});

app.use('/', rutasHome);

app.use('/login', rutasLogin);

app.use('/register', rutasRegister);
