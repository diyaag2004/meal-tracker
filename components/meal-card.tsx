"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { motion } from "framer-motion"
import { Edit2, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import type { Meal } from "@/types/meal"
import { MealEditForm } from "./meal-edit-form"

interface MealCardProps {
  meal: Meal
}

export function MealCard({ meal }: MealCardProps) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)

    try {
      const response = await fetch(`/api/meals/${meal._id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete meal")
      }

      toast({
        title: "Meal deleted",
        description: `${meal.name} has been deleted.`,
      })

      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete meal. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setShowDeleteDialog(false)
    }
  }

  // Generate a pastel color based on the meal name
  const getColorForMeal = (name: string) => {
    const colors = [
      "bg-blue-100 border-blue-300 dark:bg-blue-900 dark:border-blue-700",
      "bg-green-100 border-green-300 dark:bg-green-900 dark:border-green-700",
      "bg-purple-100 border-purple-300 dark:bg-purple-900 dark:border-purple-700",
      "bg-pink-100 border-pink-300 dark:bg-pink-900 dark:border-pink-700",
      "bg-yellow-100 border-yellow-300 dark:bg-yellow-900 dark:border-yellow-700",
      "bg-indigo-100 border-indigo-300 dark:bg-indigo-900 dark:border-indigo-700",
      "bg-red-100 border-red-300 dark:bg-red-900 dark:border-red-700",
      "bg-orange-100 border-orange-300 dark:bg-orange-900 dark:border-orange-700",
    ]

    // Simple hash function to pick a color based on the meal name
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return colors[hash % colors.length]
  }

  const cardColor = getColorForMeal(meal.name)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`${cardColor} border-2`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{meal.name}</CardTitle>
            <div className="flex space-x-1">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowEditDialog(true)}>
                <Edit2 className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-destructive"
                onClick={() => setShowDeleteDialog(true)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {meal.calories} <span className="text-sm font-normal text-gray-600 dark:text-gray-300">calories</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{format(new Date(meal.dateTime), "h:mm a")}</div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Meal</DialogTitle>
            <DialogDescription>Make changes to your meal log.</DialogDescription>
          </DialogHeader>
          <MealEditForm
            meal={meal}
            onSuccess={() => {
              setShowEditDialog(false)
              router.refresh()
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Meal</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this meal? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
