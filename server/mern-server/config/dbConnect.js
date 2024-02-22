const mongoose = require('mongoose')
const dbConnect = async () => {
    try {
        await mongoose.connect(
          "mongodb+srv://aadii1502:Am150205@cluster0.3b89bbx.mongodb.net/income-expenses-app?retryWrites=true&w=majority"
          
        );
        console.log("Db connected Successfully");
      } catch (error) {
        console.log(error.message);
        process.exit(1);
      }
}
dbConnect();