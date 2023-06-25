import { model, models, Schema } from "mongoose"

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter product name."],
  },
  description: {
    type: String,
    required: [true, "Please enter product description."],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price."],
  },
  cover_image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: true,
    enum: {
      values: [
        "electric",
        "acoustic",
        "vintage",
        "bass",
        "12-strings",
        "accessories",
        "headphones",
      ],
      message: "Please enter a category.",
    },
  },
  brand: {
    type: String,
    required: [true, "Please enter product brand."],
  },
  stocks: [
    {
      color: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
    },
  ],
  fingerboardMaterial: {
    type: String,
    required: true,
  },
  features: [
    {
      type: String,
      required: true,
    },
  ],
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default models.Product || model("Product", productSchema)
