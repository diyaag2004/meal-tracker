import { Suspense } from "react"
import { format, isSameDay } from "date-fns"

import { MealCard } from "@/components/meal-card"
import { getMeals } from "@/lib/data"
import { groupMealsByDate } from "@/lib/utils"
import { MealListSkeleton } from "./meal-list-skeleton"

export async function MealList() {
  const meals = await getMeals()

  if (!meals || meals.length === 0) {
    return (
      <div className="text-center p-8 border rounded-lg bg-muted/50">
        <h3 className="text-lg font-medium">No meals logged yet</h3>
        <p className="text-muted-foreground mt-1">Add your first meal using the form above.</p>
      </div>
    )
  }

  const groupedMeals = groupMealsByDate(meals)

  return (
    <div className="space-y-8">
      {Object.entries(groupedMeals).map(([dateString, meals]) => (
        <div key={dateString} className="space-y-4">
          <h2 className="text-xl font-semibold sticky top-0 bg-background py-2 z-10">
            {isSameDay(new Date(dateString), new Date()) ? "Today" : format(new Date(dateString), "EEEE, MMMM d, yyyy")}
          </h2>
          <div className="space-y-4">
            <Suspense fallback={<MealListSkeleton count={meals.length} />}>
              {meals.map((meal) => (
                <MealCard key={meal._id.toString()} meal={meal} />
              ))}
            </Suspense>
          </div>
        </div>
      ))}
    </div>
  )
}
