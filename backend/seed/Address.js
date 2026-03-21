const Address = require("../models/Address");

const addresses = [
  {
    _id: "65c26398e1e1a2106ac8fbd5",
    user: "65b8e564ea5ce114184ccb96",
    street: "02 Nguyen Tat Thanh",
    city: "District 4",
    state: "Ho Chi Minh City",
    phoneNumber: "090 900 00Có",
    postalCode: "700000",
    country: "Vietnam",
    type: "Home",
    __v: 0,
  },
  {
    _id: "65c26412e1e1a2106ac8fbd8",
    user: "65b8e564ea5ce114184ccb96",
    street: "02 Nguyen Tat Thanh",
    city: "District 4",
    state: "Ho Chi Minh City",
    phoneNumber: "028 39400989",
    postalCode: "700000",
    country: "Vietnam",
    type: "Buisness",
    __v: 0,
  },
];

exports.seedAddress = async () => {
  try {
    await Address.deleteMany({});
    await Address.insertMany(addresses);
    console.log("Address seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
