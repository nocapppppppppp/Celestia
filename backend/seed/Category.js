const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", name: "Earrings" },
  { _id: "65a7e24602e12c44f599442d", name: "Bracelets" },
  { _id: "65a7e24602e12c44f599442f", name: "Necklaces" },
  { _id: "65a7e24602e12c44f5994430", name: "Anklets" },
  { _id: "65a7e24602e12c44f5994431", name: "Rings" },
];

exports.seedCategory = async () => {
  try {
    await Category.deleteMany({});
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};