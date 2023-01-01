const { boat} = require("./models");

module.exports.findAllBoats = filterQuery=>{
    return boat.find(filterQuery).lean().exec()
}
module.exports.findboat= filterQuery => {
  return boat.findOne(filterQuery).lean().exec();
}

module.exports.createboat=body=> {
  return boat.create(body);
}
module.exports.deleteboat= filterQuery=> {
  return boat.findByIdAndDelete(filterQuery);
}
