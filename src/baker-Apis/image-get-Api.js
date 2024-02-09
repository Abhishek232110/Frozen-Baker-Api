const express = require("express");
const cakeSchema = require("../model/cake");
const uploadImage = express();

uploadImage.get("/api/get/image", async (req, res) => {
  const result = await cakeSchema.find();
  res.send(result);
  // console.log(result);
});

uploadImage.get("/api/get/chocolate", async (req, res) => {
  const query = { flavour: "Chocolate" };
  const data = await cakeSchema.find(query);
  res.send(data);
});

uploadImage.get("/api/get/butterscotch", async (req, res) => {
  const query = { flavour: "Butterscotch" };
  const data = await cakeSchema.find(query);
  res.send(data);
});

uploadImage.get("/api/get/flower", async (req, res) => {
  const query = { flavour: "Flower" };
  const data = await cakeSchema.find(query);
  res.send(data);
});

uploadImage.get("/api/get/truffle", async (req, res) => {
  const query = { flavour: "Truffle" };
  const data = await cakeSchema.find(query);
  res.send(data);
});

uploadImage.get("/api/get/redvelvet", async (req, res) => {
  const query = { flavour: "Redvelvet" };
  const data = await cakeSchema.find(query);
  res.send(data);
});
uploadImage.get("/api/get/vanilla", async (req, res) => {
  const query = { flavour: "Vanilla" };
  const data = await cakeSchema.find(query);
  res.send(data);
});
uploadImage.get("/api/get/fruit", async (req, res) => {
  const query = { flavour: "Fruit" };
  const data = await cakeSchema.find(query);
  res.send(data);
});
uploadImage.get("/api/get/pineapple", async (req, res) => {
  const query = { flavour: "Pineapple" };
  const data = await cakeSchema.find(query);
  res.send(data);
});
module.exports = uploadImage;
