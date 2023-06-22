var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController')
const userAuth = require('../middlewares/auth-jwt')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/signup",controller.userSignup)

router.post("/login",controller.userLogin)

router.post("/updateProfile",userAuth.verifyToken,controller.updateProfile)



module.exports = router;
