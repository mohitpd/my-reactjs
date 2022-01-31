const {User} = require('../models/user');

let authenticate = (req, res, next) => {
    let token = req.cookies.auth;

    console.log(token);

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.status(401).send({message: 'Bad Token'});
        req.user = user;
        next();
    });
};

module.exports = {authenticate};
