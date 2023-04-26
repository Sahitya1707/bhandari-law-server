const jwt = require("jsonwebtoken");
const Admin = require("../models/admin_schema");
const JWT_SECRET = "userChandan123";

const authenticateAdmin = (req, res, next) => {
  try {
    const userToken = req.header("user-token");
    if (!userToken) {
      return res.status(200).json({
        login: false,
        message: "token doesn't exist or might be wrong.",
      });
    }
    const payload = jwt.verify(userToken, JWT_SECRET);
    const { _id } = payload;
    Admin.findById(_id)
      .then((userData) => {
        if (userData.role === "user") {
          req.user = userData;
          next();
        } else if (userData.role === "admin") {
          req.admin = userData;
          next();
        } else {
          return res.status(200).json({
            login: false,
            message: "token doesn't exist or might be wrong.",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(200).json({
          login: false,
          message: "token doesn't exist or might be wrong.",
        });
      });
  } catch (error) {
    return res.status(200).json({
      login: false,
      message: "token doesn't exist or might be wrong.",
    });
  }
};

module.exports = authenticateAdmin;
