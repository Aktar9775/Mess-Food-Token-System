const cors = require("cors");
const mongoose = require("mongoose");
const mongoUri =
  "mongodb+srv://sohel:sohel@cluster0.zeg5p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectTomongo = () => {
  mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true,
      tlsInsecure: false,
     
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
module.exports = connectTomongo;
