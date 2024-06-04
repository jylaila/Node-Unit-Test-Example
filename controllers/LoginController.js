const loginModel = require('../models/LoginModel')
const login = new loginModel()
const logged = login.isLogged()

exports.getLogin = ((req, res) => {
    /*
            #swagger.tags = ['Login']
            #swagger.summary = 'Call some function'
            #swagger.description = 'This endpoint will show if user is logged'
        */
    res.send(`<h1>${logged}</h1>`)
});

exports.getIsLogged = ((req, res) => {
    /*
       #swagger.ignore = true
     */
    res.render("LoginView", { logged: logged });
});

exports.createUser = ((req, res) => {
    //#swagger.tags = ['Create User']
    const {email, password} = req.body
    res.status(200).json("User add sucessfully")
});

exports.getbyId = ((req, res) => {
    const filter = req.query.filter;
    const version = req.headers.version;
    return res.status(200).send("Getting User");
});



