const express = require("express");
const cors = require("cors");
const user = require("./src/baker-Apis/userLogin.js");
const uploadImage = require("./src/baker-Apis/image-upload-Api.js");
const getImage = require("./src/baker-Apis/image-get-Api.js");
const getUsers = require("./src/baker-Apis/getUser.js");

const app = express();
app.use(
  cors({
    allowedHeaders: "*",
    methods: "POST",
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(user);
app.use(uploadImage);
app.use(getImage);
app.use(getUsers);
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server is running on ${port}`));
