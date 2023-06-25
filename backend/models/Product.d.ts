import { Document } from "mongoose"

interface Image {
  public_id: string
  url: string
}

interface Review {
  rating: number
  comment: string
  createdAt: Date
}

interface ColorStock {
  color: string
  name: string
  stock: number
}

export interface IProduct extends Document {
  name: string
  description: string
  price: number
  cover_image: Image
  images: Image[]
  category:
    | "electric"
    | "acoustic"
    | "vintage"
    | "bass"
    | "12-strings"
    | "accessories"
    | "headphones"
  features: string[]
  brand: string
  stocks: ColorStock[]
  fingerboardMaterial: string
  ratings: number
  reviews: Review[]
  createdAt: Date
}
