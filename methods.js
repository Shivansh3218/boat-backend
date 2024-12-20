const { boat } = require("./models");

module.exports.findAllBoats = (filterQuery) => {
  return boat.find(filterQuery).lean().exec();
};

module.exports.searchBoats = async (searchTerm) => {
  const searchRegex = new RegExp(searchTerm.toLowerCase(), "i");
  return boat
    .find({
      productName: { $regex: searchRegex },
    })
    .lean()
    .exec();
};

module.exports.findBoatsByCategory = async (description) => {
  return boat.find({ description: description }).lean().exec();
};

module.exports.findboat = (filterQuery) => {
  return boat.findOne(filterQuery).lean().exec();
};

module.exports.createboat = (body) => {
  return boat.create(body);
};

module.exports.deleteboat = (filterQuery) => {
  return boat.findByIdAndDelete(filterQuery);
};
