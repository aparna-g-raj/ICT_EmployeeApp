const mongoose = require("mongoose");
mongoose
  .connect('mongodb+srv://agr2k03:<password>@cluster0.ipbzrv9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
