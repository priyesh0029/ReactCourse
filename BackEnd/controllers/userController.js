const userHelper = require('../helpers/userHelper')

module.exports ={

    userSignup : async(req,res)=>{
        console.log("req.body.data : ",req.body.data.name);
        try {
            await userHelper.doSignUp(req.body.data).then((response)=>{
               res.status(200).json({status : true})
            }).catch((error)=>{
                console.log("catch error : ",error);
                res.status(400).json(error)
            })
        } catch (error) {
            console.log(error);
        }

    },

    userLogin : async(req,res)=>{
        
        try {
            await userHelper.doLogin(req.body.data)
            .then((response)=>{
               res.status(200).json({status : true,response})
            }).catch((error)=>{
                console.log("catch error : ",error);
                res.status(400).json(error)
            })
        } catch (error) {
            console.log(error); 
        }
    },

    updateProfile : async(req,res)=>{
        console.log("req.body.data : ",req.body);
    }
}