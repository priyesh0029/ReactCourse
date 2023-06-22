const user = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  doSignUp: async (userData) => {
    console.log("dtaa :", userData);

    try {
      const userInfo = await user.user.findOne({ email: userData.email });
      if (!userInfo) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const data = new user.user({
          name: userData.name,
          email: userData.email,
          password: hashedPassword,
        });

        await data.save(data).then(async (data) => {
          return true;
        });
      } else {
        return Promise.reject("user exist with same e-mail..!");
      }
    } catch (error) {
      console.log(error);
    }
  },

  doLogin: (userData) => {
    console.log("dtaa :", userData);

    return new Promise(async (resolve, reject) => {
      try {
        const userInfo = await user.user.findOne({ email: userData.email });
        if (userInfo) {
          if (userInfo.isBlocked === false) {
            bcrypt
              .compare(userData.password, userInfo.password)
              .then(async (status) => {
                if (status) {
                  const token = jwt.sign(
                    { id: userInfo.id },
                    process.env.JWT_SECRET_KEY,
                    {
                      expiresIn: 86400,
                    }
                  );

                  resolve({
                    userInfo,
                    accessToken: token,
                  });
                } else {
                  reject("invalid password..!");
                }
              });
          } else {
            reject("user is blocked by Admin");
          }
        } else {
          return reject("user does not exist with this e-mail..!");
        }
      } catch (error) {
        console.log(error);
      }
    });
  },
};
