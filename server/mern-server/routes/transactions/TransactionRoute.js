const express = require('express')
const transactionRoutes = express.Router();
const {getTransactionCtrl,createTransactionCtrl,getTransactionsCtrl,deleteTransactionCtrl,updateTransactionCtrl} = require('../../controllers/transactions/TransactionCtrl');
const isLogin = require('../../middlewares/isLogin');
//POST/api/v1/transactions
transactionRoutes.post("/",isLogin,createTransactionCtrl)

//GET/api/v1/transactions
transactionRoutes.get("/",getTransactionsCtrl)


//GET/api/v1/transactions/:id
transactionRoutes.get("/:id",getTransactionCtrl)


//DELETE/api/v1/transactions/:id
transactionRoutes.delete("/:id",deleteTransactionCtrl)

//PUT/api/v1/transactions/:id
transactionRoutes.put("/:id",updateTransactionCtrl)

module.exports=transactionRoutes;