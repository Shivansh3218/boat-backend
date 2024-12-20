const { findAllBoats, searchBoats, findBoatsByCategory } = require("./methods");

module.exports.getAllProducts = async (req, res) => {
  try {
    // If body has description, filter by category
    if (req.body && req.body.description) {
      const data = await findBoatsByCategory(req.body.description);
      return res.send(data);
    }
    // Otherwise return all products
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
