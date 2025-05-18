import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns"
import type { Meal } from "@/types/meal"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function groupMealsByDate(meals: Meal[]) {
  return meals.reduce(
    (groups, meal) => {
      const date = format(new Date(meal.dateTime), "yyyy-MM-dd")

      if (!groups[date]) {
        groups[date] = []
      }

      groups[date].push(meal)
      return groups
    },
    {} as Record<string, Meal[]>,
  )
}

export function calculateDailyCalories(meals: Meal[]) {
  return meals.reduce(
    (dailyCalories, meal) => {
      const date = format(new Date(meal.dateTime), "yyyy-MM-dd")

      if (!dailyCalories[date]) {
        dailyCalories[date] = 0
      }

      dailyCalories[date] += meal.calories
      return dailyCalories
    },
    {} as Record<string, number>,
  )
}
