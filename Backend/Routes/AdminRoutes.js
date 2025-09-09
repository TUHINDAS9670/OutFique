const express=require("express");
const UserModel=require("../models/User")
const {protect,admin}=require("../middleware/authMiddleware")

const router=express.Router();

// @route get api/admin/users
// @desc fet all users(admin only)
// @access private/admin

router.get("/",protect,admin,async(req,res)=>{
  try {
    const users=await UserModel.find({});
    res.json(users)
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server Error"});
  }
})

// @route POST /api/admin/users
// @desc add a new user (admin only)
// @access private /admin
router.post("/",protect,admin,async(req,res)=>{
  const {name,email,password,role}=req.body;
  try {
    let user=await UserModel.findOne({email});
    if(user){
      return res.status(400).json({message:"user already exists"})
    }
    user=new UserModel({
      name,email,password,role:role||"customer",
    });
    await user.save();
    res.status(201).json({message:"User created successfully",user})
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server Error"})
  }
})

// @route PUT /api/admin/user/:id
// @desc Update user info (admin only)-Name,email and role
// @access private/admin
router.put("/:id",protect,admin,async(req,res)=>{
  try {
    const user=await UserModel.findById(req.params.id);
    if(user){
      user.name=req.body.name;
      user.email=req.body.email;
      user.role=req.body.role;
    }
    const updatedUser=await user.save();
    res.json({message:"User updated successfully",user:updatedUser});
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server Error"})
    
  }
})
// @route DELeTE /api/admin/users/:id
// @desc delete a user
// @access Private/admin

router.delete("/:id",protect,async(req,res)=>{
  try {
    const user=await UserModel.findById(req.params.id);
    if(user){
      await user.deleteOne();
      res.json({message:"User deleted successfully"})
    }
    else{
      res.status(404).json({message:"User not found"})
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server error"})
    
  }
})
module.exports=router;
