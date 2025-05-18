import type { ObjectId } from "mongodb"

export interface Meal {
  _id: ObjectId | string
  name: string
  calories: number
  dateTime: string | Date
  createdAt?: string | Date
}
