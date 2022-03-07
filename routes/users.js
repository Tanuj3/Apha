const res = require("express/lib/response");
const bcrpyt = require("bcrypt");
const User = require("../models/User");
const router = require("express").Router();

//update user 
router.put("/:id", async (req, res) => {

    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrpyt.genSalt(10);
                req.body.password = await bcrpyt.hash(req.body.password, salt)
            }
            catch (err) {
                return res.status(400).json(err)
            }

        }

        try {
            const user = await User.findByIdAndUpdate(req.body.userId, { $set: req.body })
            res.status(200).json("Account has beeen updated")

        } catch {
            return res.status(400).json(err)
        }

    } else {
        return res.status(400).json("You can update only your account")
    }

})

//delete a user 

router.delete("/:id", async (req, res) => {

    
    if (req.body.userId === req.params.id || req.body.isAdmin) {

        try {
            const user = await User.findByIdAndDelete(req.body.userId)
            res.status(200).json("Account has beeen deleted")

        } catch {
            return res.status(400).json(err)
        }

    } else {
        return res.status(401).json("You can delete only your account")
    }

})

//Get a user
router.get("/", async (req, res) => {

    const userId=req.query.userId
    const username=req.query.username
    try {
        const user = userId
        ?await User.findById(userId)
        :await User.findOne({username:username})
        const { password, updatedAt, ...other } = user._doc
        res.status(200).json(other)
    }
    catch (err) {
        return res.status(400).json(err)
    }

})



//get friends
router.get("/friends/:userId", async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      const friends = await Promise.all(
        user.followings.map((friendId) => {
          return User.findById(friendId);
        })
      );
      let friendList = [];
      friends.map((friend) => {
        const { _id, username, profilePicture } = friend;
        friendList.push({ _id, username, profilePicture });
      });
      res.status(200).json(friendList)
    } catch (err) {
      res.status(500).json(err);
    }
  });



//Follow A User 
router.put("/:id/follow",async (req, res) => {

    if(req.body.id !== req.params.id) {

        try {

            const user=await User.findById(req.params.id) 
            const currentUser=await User.findById(req.body.userId)

            if(!user.followers.includes(req.body.userId)) {

                await user.updateOne({$push:{followers:req.body.userId}})
                await currentUser.updateOne({$push:{followings:req.params.id}})
                res.status(200).json("Following Complete ")
            }
            else {
                res.status(403).json("You already follow this user")
            }

        }
        catch(err) {
            res.status(400).json(err)
        }

    } else {
        res.status(403).json("Cannot follow yourself")
    }


})


router.put("/:id/unfollow",async (req, res) => {

    if(req.body.id !== req.params.id) {

        try {

            const user=await User.findById(req.params.id) 
            const currentUser=await User.findById(req.body.userId)

            if(user.followers.includes(req.body.userId)) {

                await user.updateOne({$pull:{followers:req.body.userId}})
                await currentUser.updateOne({$push:{followings:req.params.id}})
                res.status(200).json("Unfollowed ")
            }
            else {
                res.status(403).json("You already unfollow this user")
            }

        }
        catch(err) {
            res.status(400).json(err)
        }

    } else {
        res.status(403).json("Cannot unfollow yourself")
    }


})









module.exports = router
