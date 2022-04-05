const res = require("express/lib/response")
const User=require("../models/User")
const bcrpyt=require("bcrypt");
const { rawListeners } = require("../models/User");

const router = require("express").Router();

router.post("/register",async(req,res) => {
    
   
    
    try {
        const salt =await bcrpyt.genSalt(10)
        const hashedPassword=await bcrpyt.hash(req.body.password,salt);

        
        
        const user= await new User({
            username:req.body.username,
            email:req.body.email,
            role:req.body.role,
            password:hashedPassword
         })
        
         const newuser= await user.save();
        res.status(200).send(user);
    }
    catch(err) {
        res.status(400).json(err);
    }
    
});


//Login

router.post("/login",async (req,res) => {

    try {
     const user= await User.findOne({email:req.body.email})
     !user && res.status(404).json("No such user found")

     const validPassword= await bcrpyt.compare(req.body.password,user.password)
     !validPassword && res.status(400).json("invalid Password")

     res.status(200).json(user);
    }
    catch(err){
      res.status(400).json(err);
    }

})


module.exports=router
