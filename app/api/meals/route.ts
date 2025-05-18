import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import type { Meal } from "@/types/meal"

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    const meals = await db.collection("meals").find({}).sort({ dateTime: -1 }).toArray()

    return NextResponse.json(meals)
  } catch (error) {
    console.error("Error fetching meals:", error)
    return NextResponse.json({ error: "Failed to fetch meals" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const meal = (await request.json()) as Meal

    // Validate meal data
    if (!meal.name || !meal.calories || !meal.dateTime) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { db } = await connectToDatabase()
    const result = await db.collection("meals").insertOne({
      ...meal,
      dateTime: new Date(meal.dateTime),
      createdAt: new Date(),
    })

    return NextResponse.json(
      {
        message: "Meal added successfully",
        id: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error adding meal:", error)
    return NextResponse.json({ error: "Failed to add meal" }, { status: 500 })
  }
}
