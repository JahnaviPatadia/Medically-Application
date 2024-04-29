const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log(process.env.COONECTION_STRING);
    const connect = await mongoose.connect(process.env.COONECTION_STRING);
    console.log(
      "Database Connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log("Not Connected", err);
    process.exit(1);
  }
};

module.exports = connectDb;
