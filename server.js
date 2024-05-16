const express = require("express");
const cors = require("cors");
const user = require("./src/baker-Apis/userLogin.js");
const uploadImage = require("./src/baker-Apis/image-upload-Api.js");
const getImage = require("./src/baker-Apis/image-get-Api.js");
const getUsers = require("./src/baker-Apis/getUser.js");
const DelivaryDetails = require("./src/baker-Apis/delivaryApi.js");
const loginUser = require("./src/baker-Apis/userLogin.js");
const createUser = require("./src/baker-Apis/createUserApi.js");
const UploadIcecream = require("./src/baker-Apis/icecreams/uploadIceApi.js");
const UploadChocolate = require("./src/baker-Apis/chocolate/uploadChocoApi.js");
const UploadPastry = require("./src/baker-Apis/pastry/uploadPastryApi.js");
const getPastryApi = require("./src/baker-Apis/pastry/getPastryApi.js");
const getChocolateApi = require("./src/baker-Apis/chocolate/getChocolateApi.js");
const getIcecreamApi = require("./src/baker-Apis/icecreams/getIceApi.js");
const productApi = require("./src/baker-Apis/product/product.js");
const scriptLoader = require("./src/baker-Apis/script/crawler.js");

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

//upload Apis
app.use(DelivaryDetails);
app.use(uploadImage);
app.use(loginUser);
app.use(createUser);
app.use(UploadIcecream);
app.use(UploadChocolate);
app.use(UploadPastry);

// get Apis

app.use(getImage);
app.use(getUsers);
app.use(getPastryApi);
app.use(getChocolateApi);
app.use(getIcecreamApi);
app.use(productApi);

app.use(scriptLoader);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server is running on ${port}`));
