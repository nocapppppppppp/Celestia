const Review = require("../models/Review");

const reviews = [
  {
    _id: "65c252e3dcd9253acfbaa76c",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f599444e",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25339dcd9253acfbaa79e",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994450",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c2535fdcd9253acfbaa7c9",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994451",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25380dcd9253acfbaa7df",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994452",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c253ebdcd9253acfbaa7f5",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994453",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25416dcd9253acfbaa80b",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994454",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c2542cdcd9253acfbaa821",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994455",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25443dcd9253acfbaa837",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994456",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25473dcd9253acfbaa84d",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994457",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c254a8dcd9253acfbaa863",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f599444f",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c254d1dcd9253acfbaa891",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994458",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c254f2dcd9253acfbaa89e",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994459",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c2551bdcd9253acfbaa8ab",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f599445a",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25533dcd9253acfbaa8b8",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f599445b",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25550dcd9253acfbaa8c5",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f599445c",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c255abdcd9253acfbaa908",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f599445f",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c255cadcd9253acfbaa916",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994461",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c255e9dcd9253acfbaa924",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994460",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c255fcdcd9253acfbaa932",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f599445e",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25676dcd9253acfbaa940",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f599445d",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25703dcd9253acfbaa970",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994462",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25735dcd9253acfbaa988",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994463",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25758dcd9253acfbaa9a0",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994464",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25787dcd9253acfbaa9b8",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994469",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c257c1dcd9253acfbaa9d0",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f599446a",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25805dcd9253acfbaa9e8",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994454",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c2583adcd9253acfbaaa06",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f599446b",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25950dcd9253acfbaaa88",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994456",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c2596edcd9253acfbaaaa0",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994457",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c259a0dcd9253acfbaaab8",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f599444f",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c259b0dcd9253acfbaaad0",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994458",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c259cadcd9253acfbaaae8",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994459",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c259e4dcd9253acfbaab00",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f599445b",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c259fadcd9253acfbaab18",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f599445c",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25af9dcd9253acfbaab43",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f59944a1",
    rating: 5,
    comment:
      "✨",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25b50dcd9253acfbaab77",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f59944a0",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25b9bdcd9253acfbaab8d",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f59944a2",
    rating: 5,
    comment:
      ".",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
];

exports.seedReview = async () => {
  try {
    await Review.deleteMany({});
    await Review.insertMany(reviews);
    console.log("Review seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
