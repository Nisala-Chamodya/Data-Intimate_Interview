require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
{
  /*app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This is REST API working for Data Intimate Interview",
  });
});*/
}
//middleweare
app.use(express.json());
{
  /* start calling router here*/
}
app.use("/api/users", userRouter);
{
  /*end calling router here */
}
app.listen(3000, () => {
  console.log("Server Up and Running!!!", process.env.APP_PORT);
});
