var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./schemas/User')
router.post('',async function (req, res) {
    const allUsers = await User.find({});

   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   const role = req.body.role;
   var newUser = {
    id:allUsers.length+1,
    username:username,
    password:password,
    email:email,
    role:role,
    token:'',
}
const saveRes = await new User(newUser).save(); 
res.status(200).send({message:"User Saved!"});
   
 
});
router.get('',async function (req, res) {
    const allUsers = await User.find({});
    res.status(200).send({
        size:allUsers.length,
        
        users:allUsers.map((user)=>({
            username:user.username,
            password:user.password,
            email:user.email,
            role:user.role,
            token:user.token,
            
        })),

        code:200,
        message:"All users received successfully!",
    });
    
  
 });

router.put('/:username',async function (req, res) {


    const username = req.params.username;
    const newToken = req.body.token;
    const allUsers = await User.find({});
    var user =  allUsers.find((user) => user.username === username);
    if(!user) return res.status(404).send("user not found!")
    var user2 =  allUsers.find((user) => user.token === newToken);
    if(user2) return res.status(404).send("this token is already taken!")
   
    await User.updateOne({ _id: user._id }, user);
    return res.status(200).send(
      {
       
        message:"user token changed successfully!",
      }
    );

});
router.delete('/:username',async function (req, res) {
    
    const username = req.params.username;
    const allUsers= await User.find({});
    const user =  allUsers.find((user) => user.username === username);
    if(!user) return res.status(404).send("user not found!")
    
    await  User.findOneAndRemove({_id:user._id});
    return res.status(200).send(
      {
        message:"user deleted successfully!",
      }
    );

});
module.exports = router