const { create } = require("./user.service");
//import bcrypt
const { genSaltSync, hashSync } = require("bcrypt");
module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    //password encypt
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log("Create User Error", err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
