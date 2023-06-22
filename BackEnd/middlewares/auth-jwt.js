const jwt = require('jsonwebtoken');


module.exports = {

     verifyToken : (req, res, next) => {
        try {
            console.log('in verify token.');
            let token = req.headers.authorization;  
            console.log(req.headers);
            console.log(token,' tikt111:::');
            token = token.replace('Bearer ', '');
            console.log(token,' tiktoken2222:::');
    
            if(!token) {
                return res.status(403).send({message: 'No token provided!'});
            }
        
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
                if(err) {
                    return res.status(401).send({message: 'Unauthorized!'});
                }
                req.userId = decoded.id;
                next();
            }); 
        } catch (error) {
            console.error('error in verify: ', error);
        }
        
    },
}