const Account = require("../../model/Account");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");
const createAccountCtrl = async (req, res,next) => {
  const {name,initialBalance,accountType,notes} = req.body
    try {
      //1.Find the logged in user
      const userFound = await User.findById(req.user);
      if(!userFound) return next(new AppErr('User not found',404))
      //2.Create the user 
      const account = await Account.create({
        name,initialBalance,accountType,notes,createdBy:req.user,
      })
      //3.Push the account into the users account field
      userFound.accounts.push(account._id)
      //4.Resave the user
      await userFound.save();
      res.json({ 
        status:"success",
        data:account,
       });
    } catch (error) {
      next(error)
    }
  };
  
  //all
  const getAccountsCtrl = async (req, res) => {
    try {
      const accounts= await Account.find().populate('transactions');
      res.json({ accounts});
    } catch (error) {
      res.json(error);
    }
  };
  
  //single
  const getAccountCtrl = async (req, res) => {
    try {
      //find the id from params
      const { id } = req.params;
      const account = await Account.findById(id).populate("transactions");
      res.json({
        status: "success",
        data: account,
      });
    } catch (error) {
      next(new AppErr(error.message, 500));
    }
  };
  
  //delete
  const deleteAccountCtrl = async (req, res,next) => {
    try {
      const { id } = req.params;
      await Account.findByIdAndDelete(id);
      res.status(200).json({
        status: "success",
        data: null,
      });
    } catch (error) {
      next(new AppErr(error.message, 500));
    }
  };
  
  //update
  const updateAccountCtrl = async (req, res) => {
    try {
      const { id } = req.params;
      const account = await Account.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      res.json({
        status: "success",
        data: account,
      });
    } catch (error) {
      next(new AppErr(error.message, 500));
    }
  };
  
  module.exports = {
    createAccountCtrl,
    getAccountCtrl,
    deleteAccountCtrl,
    updateAccountCtrl,
    getAccountsCtrl,
  };
  