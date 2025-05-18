import { format } from "date-fns"
import { Utensils } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getMeals } from "@/lib/data"
import { calculateDailyCalories } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

export async function DailySummary() {
  const meals = await getMeals()
  const today = format(new Date(), "yyyy-MM-dd")
  const dailyCalories = calculateDailyCalories(meals)

  const todayCalories = dailyCalories[today] || 0
  const targetCalories = 2000 // This could be customizable per user
  const percentOfTarget = Math.min(Math.round((todayCalories / targetCalories) * 100), 100)

  // Determine color based on percentage
  let progressColor = "bg-emerald-500"
  if (percentOfTarget > 100) {
    progressColor = "bg-red-500"
  } else if (percentOfTarget > 80) {
    progressColor = "bg-amber-500"
  } else if (percentOfTarget > 50) {
    progressColor = "bg-blue-500"
  }

  return (
    <Card className="overflow-hidden border-primary/20">
      <CardHeader className="pb-2 bg-primary/5">
        <CardTitle className="text-lg flex items-center">
          <Utensils className="mr-2 h-5 w-5 text-primary" />
          Today's Summary
        </CardTitle>
        <CardDescription>{format(new Date(), "EEEE, MMMM d, yyyy")}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-baseline">
            <h3 className="text-3xl font-bold">{todayCalories}</h3>
            <p className="text-muted-foreground">of {targetCalories} calories</p>
          </div>

          <div className="space-y-2">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className={`h-full ${progressColor} rounded-full`} style={{ width: `${percentOfTarget}%` }} />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{percentOfTarget}% of daily target</span>
              <span>{targetCalories - todayCalories} calories remaining</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex justify-between text-sm">
              <span>Total meals today:</span>
              <span className="font-medium">
                {meals.filter((meal) => format(new Date(meal.dateTime), "yyyy-MM-dd") === today).length}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function DailySummarySkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-32 mt-1" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-baseline">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-4 w-32" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-2 w-full" />
            <div className="flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>

          <div className="pt-2">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-8" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
