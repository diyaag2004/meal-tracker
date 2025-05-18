import { cache } from "react"
import { connectToDatabase } from "@/lib/mongodb"
import type { Meal } from "@/types/meal"

export const getMeals = cache(async (): Promise<Meal[]> => {
  try {
    const { db } = await connectToDatabase()
    const meals = await db.collection("meals").find({}).sort({ dateTime: -1 }).toArray()

    return meals as Meal[]
  } catch (error) {
    console.error("Error fetching meals:", error)
    return []
  }
})

export const getMealById = cache(async (id: string): Promise<Meal | null> => {
  try {
    const { db } = await connectToDatabase()
    const meal = await db.collection("meals").findOne({ _id: id })

    return meal as Meal
  } catch (error) {
    console.error("Error fetching meal:", error)
    return null
  }
})
