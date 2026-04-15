import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true
    },
  
    description: {
      type: String
    },
  
    price: {
      type: Number,
      required: true
    },
  
    discountPrice: {
      type: Number
    },
  
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
  
    stock: {
      type: Number,
      default: 0
    },
  
    images: [
      {
        url: String,
        altText: String
      }
    ],
  
    ratings: {
      average: {
        type: Number,
        default: 0
      },
      count: {
        type: Number,
        default: 0
      }
    },
  
    brand: {
      type: String
    },
  
    isActive: {
      type: Boolean,
      default: true
    }
  
  }, { timestamps: true });

  const Product = mongoose.model("Product", productSchema);
  export default Product;