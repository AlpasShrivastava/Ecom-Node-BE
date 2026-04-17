
import Product from "./product.model.js"

export const createProduct = async (data) => {
  return await Product.create(data);
};

export const getProducts = async (query) => {
  const {
    page = 1,
    limit = 10,
    sort,
    category,
    minPrice,
    maxPrice,
    search
  } = query;

  const filter = {};

  // CATEGORY FILTER
  if (category) {
    filter.category = category;
  }

  // PRICE FILTER
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  // SEARCH FILTER
  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }

  // SORT LOGIC
  let sortOption = {};
  if (sort === "price_asc") sortOption.price = 1;
  else if (sort === "price_desc") sortOption.price = -1;
  else sortOption.createdAt = -1;

  const skip = (page - 1) * limit;

  const products = await Product.find(filter)
    .populate("category")
    .sort(sortOption)
    .skip(skip)
    .limit(Number(limit));

  const total = await Product.countDocuments(filter);

  return {
    products,
    total,
    page: Number(page),
    totalPages: Math.ceil(total / limit)
  };
};