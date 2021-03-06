const firstUser = [
  {
    name: "Andrew",
    profilePicture:
      "https://res.cloudinary.com/dsj26eqz4/image/upload/v1573926228/IMG_0246_c3eftm.jpg",
    employeeID: "ES3321RES110",
    email: "andrew@webtest.co.uk",
    contactNumber: "06 05 04 01 02",
    password: "andrew",
    userType: "Admin"
  }
];

const mongoose = require("mongoose");
const userModel = require("../models/User.js");

mongoose.connect("mongodb://localhost/Travelog", {
  useNewUrlParser: true,
  useCreateIndex: true
});

userModel
  .insertMany(firstUser)
  .then(dbVal => {
    console.log("inserted");
    mongoose.connection.close();
  })
  .catch(err => console.log(error));
