const fs = require("fs");
const express = require("express");
const scriptLoader = express();
const jsdom = require("jsdom");
const cheerio = require("cheerio");
const ProductSchema = require("../../model/product");
const { JSDOM } = jsdom;

scriptLoader.get("/api/script", async (req, res) => {
  fs.readFile("src/assets/chocolate.html", "utf8", async (err, data) => {
    const $ = cheerio.load(data, null, false);
    var products = $(".grid-view-productcard");

    for (let i = 0; i < products.length; i++) {
      let img = $(products[i]).find("img")[0];
      let name = $(products[i]).find(".grid-view-car-title")[0];
      let price = $(products[i]).find(".card2-price")[0];

      console.log(
        $(name).text(),
        $(price).text().replace("₹", ""),
        img.attribs["src"]
      );
      const newCake = new ProductSchema({
        // productType: req.body.productType,
        name: $(name).text().trim(),
        price: $(price).text().replace("₹", "").trim(),
        imageUrl: img.attribs["src"].trim(),
        flavour: "chocolate",
        weight: "1",
      });
      await newCake.save();
    }
    // products.forEach((e) => {
    //   console.log($(e, "img"));
    // });
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });

  // console.log(result);
});

module.exports = scriptLoader;
