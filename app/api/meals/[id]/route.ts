import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import { connectToDatabase } from "@/lib/mongodb"
import type { Meal } from "@/types/meal"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const { db } = await connectToDatabase()

    const meal = await db.collection("meals").findOne({ _id: new ObjectId(id) })

    if (!meal) {
      return NextResponse.json({ error: "Meal not found" }, { status: 404 })
    }

    return NextResponse.json(meal)
  } catch (error) {
    console.error("Error fetching meal:", error)
    return NextResponse.json({ error: "Failed to fetch meal" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const mealUpdate = (await request.json()) as Partial<Meal>

    const { db } = await connectToDatabase()

    // Prepare update data
    const updateData: any = {}
    if (mealUpdate.name) updateData.name = mealUpdate.name
    if (mealUpdate.calories) updateData.calories = mealUpdate.calories
    if (mealUpdate.dateTime) updateData.dateTime = new Date(mealUpdate.dateTime)

    const result = await db.collection("meals").updateOne({ _id: new ObjectId(id) }, { $set: updateData })

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Meal not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Meal updated successfully" })
  } catch (error) {
    console.error("Error updating meal:", error)
    return NextResponse.json({ error: "Failed to update meal" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const { db } = await connectToDatabase()

    const result = await db.collection("meals").deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Meal not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Meal deleted successfully" })
  } catch (error) {
    console.error("Error deleting meal:", error)
    return NextResponse.json({ error: "Failed to delete meal" }, { status: 500 })
  }
}
