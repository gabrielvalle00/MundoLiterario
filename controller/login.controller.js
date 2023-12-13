const login = (req, res) => {
    res.render('login');    
};

const loginValida = (req, res) => {
    //validar com jason
    console.log("livros")
    res.render('home', { dadoslogin: 'Thata', login:true,funcionario:true});    
};

module.exports = { login, loginValida };