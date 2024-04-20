const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const hashPassword = (password)=>{
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    return hashedPassword;
}

const isValidPassword = (user, password)=>{
    return bcrypt.compareSync(password, user.password)
}

const getToken = (req, res, next)=>{
    let token =  req.cookies.jwtCookie;
    jwt.verify(token, 'JWT_SECRET',(err, decoded)=>{
        if(err) return res.status(403).send('Not authorized')
        req.user = decoded;
        next()
    })
}

module.exports = {
    hashPassword, 
    isValidPassword,
    getToken
}
