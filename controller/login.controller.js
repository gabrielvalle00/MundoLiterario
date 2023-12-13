const express = require('express');
const app = express();
const crud = require('../models/crud');

const Login = require('../models/login.models');
const bodyParser = require('body-parser');
const filePath = "./data/db.loginusers.json";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const login = (req, res) => {
    res.render('login');    
};

const loginCreate = (req, res) => {
    let login = new Login(req.body);
    crud.read(filePath);
    login.id = crud.verificaId();
    crud.create(login, filePath);
    // res.redirect('/login');

    //validando com json
    res.render('home', { dadoslogin: 'Thata', login:true,funcionario:true});
}



module.exports = { login, loginValida , loginCreate };