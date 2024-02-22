const express = require('express');
const cors = require('cors')
const app = express();
require('./config/dbConnect')
const usersRoute = require('./routes/users/UserRoute')
const transactionRoutes = require('./routes/transactions/TransactionRoute')
const accountRoutes = require("./routes/accounts/AccountsRoute");
const globalErrHandler = require('./middlewares/globalErrhandler');
//middlewares
app.use(express.json()); //pass incoming data
//cors middlewares
app.use(cors());
//routes

//user routes

app.use("/api/v1/users",usersRoute);

//account routes

app.use("/api/v1/accounts",accountRoutes);

//transaction routes

app.use("/api/v1/transactions", transactionRoutes);

//ErrorHandlers
app.use(globalErrHandler);
//listen to server 
const PORT = process.env.PORT || 9000;
app.listen(PORT , console.log(`Server is up and running on port ${PORT}`));