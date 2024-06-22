const mongoose = require('mongoose')
const dbConnect = async () => {
    try {
        await mongoose.connect(
          ""
          
        );
        console.log("Db connected Successfully");
      } catch (error) {
        console.log(error.message);
        process.exit(1);
      }
}
dbConnect();
