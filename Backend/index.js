const express=require('express');
const connectTomongo=require('./db.js');
const cors=require('cors');
const app=express();

app.use(cors())
app.use(express.json());
app.use("/Auth", require("./route/Auth"));
// app.get("/", (req, res) => {
//     res.send("Hello guys this Sarbeswar and this is my first backened run");
//   });
const port = process.env.PORT || 5000; // Use an environment variable or default to port 5000

app.listen(port, () => {
    console.log(`Server is running and listening on port ${port}`);
});
connectTomongo(); 