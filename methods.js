const { boat } = require("./models");

module.exports.findAllBoats = (filterQuery) => {
  return boat.find(filterQuery).lean().exec();
};

module.exports.searchBoats = async (searchTerm) => {
  // Convert search term to lowercase for case-insensitive search
  const searchRegex = new RegExp(searchTerm.toLowerCase(), "i");
  return boat
    .find({
      productName: { $regex: searchRegex },
    })
    .lean()
    .exec();
};

module.exports.findboat = (filterQuery) => {
  return boat.findOne(filterQuery).lean().exec();
};

// Note: Keeping these methods for data management but they won't be exposed via API
module.exports.createboat = (body) => {
  return boat.create(body);
};

module.exports.deleteboat = (filterQuery) => {
  return boat.findByIdAndDelete(filterQuery);
};
