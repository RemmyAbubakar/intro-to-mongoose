const express = require("express")
const { dbConnect } = require("./config/dbConnect")
const userRouter = require("./routes/users.route");



const app = express()

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Welcome to my server. Please use /users to get all users");
});

app.use("/users", userRouter);


async function start(){
  await dbConnect();

app.listen(4000, () => {
    console.log("🚀Server up and running on port http://localhost:400")
});
}

start();