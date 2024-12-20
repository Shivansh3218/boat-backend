var express = require("express");
var mongoose = require("mongoose");
const { findAllBoats, searchBoats } = require("./methods");

module.exports.getAllProducts = async (req, res) => {
  try {
    const data = await findAllBoats({});
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: "Error fetching products" });
  }
};

module.exports.searchProducts = async (req, res) => {
  try {
    const searchTerm = req.query.term || "";
    const data = await searchBoats(searchTerm);
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: "Error searching products" });
  }
};
