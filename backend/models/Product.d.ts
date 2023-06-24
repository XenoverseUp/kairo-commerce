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

export interface IProduct extends Document {
  name: string
  description: string
  price: number
  images: Image[]
  category:
    | "electric"
    | "acoustic"
    | "12-strings"
    | "accessories"
    | "headphones"
  brand: string
  stock: number
  ratings: number
  reviews: Review[]
  createdAt: Date
}
