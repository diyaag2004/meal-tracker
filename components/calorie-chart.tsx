"use client"

import { useEffect, useState } from "react"
import { format, subDays } from "date-fns"
import { motion } from "framer-motion"
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { LineChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import type { Meal } from "@/types/meal"

export function CalorieChart() {
  const [meals, setMeals] = useState<Meal[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("week")

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("/api/meals")
        if (!response.ok) {
          throw new Error("Failed to fetch meals")
        }
        const data = await response.json()
        setMeals(data)
      } catch (error) {
        console.error("Error fetching meals:", error)
        setError("Could not load meal data. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchMeals()
  }, [])

  // Generate data for the chart
  const generateChartData = () => {
    const today = new Date()
    let days = 7

    if (activeTab === "month") {
      days = 30
    } else if (activeTab === "year") {
      days = 365
    }

    const data = []

    for (let i = days - 1; i >= 0; i--) {
      const date = subDays(today, i)
      const dateString = format(date, "yyyy-MM-dd")

      // Filter meals for this date
      const dayMeals = meals.filter((meal) => format(new Date(meal.dateTime), "yyyy-MM-dd") === dateString)

      // Calculate total calories for this date
      const totalCalories = dayMeals.reduce((sum, meal) => sum + meal.calories, 0)

      data.push({
        name: format(date, activeTab === "week" ? "EEE" : "MMM dd"),
        calories: totalCalories,
      })
    }

    return data
  }

  const chartData = generateChartData()

  const renderChart = () => {
    if (isLoading) {
      return (
        <div className="h-[200px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      )
    }

    if (error) {
      return (
        <div className="h-[200px] flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className="mt-2 text-sm text-primary hover:underline">
              Refresh
            </button>
          </div>
        </div>
      )
    }

    if (meals.length === 0) {
      return (
        <div className="h-[200px] flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <p>No meal data available yet.</p>
            <p className="text-sm">Add some meals to see your calorie trends!</p>
          </div>
        </div>
      )
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[200px]"
      >
        <ChartContainer
          config={{
            calories: {
              label: "Calories",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => (value === 0 ? "0" : `${value}`)}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <ChartTooltip>
                        <div className="text-xs font-semibold">{label}</div>
                        <div className="text-sm font-bold">{payload[0].value} calories</div>
                      </ChartTooltip>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="calories"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
                barSize={activeTab === "year" ? 4 : activeTab === "month" ? 8 : 16}
              />
            </RechartsBarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </motion.div>
    )
  }

  return (
    <Card className="overflow-hidden border-primary/20">
      <CardHeader className="pb-2 bg-primary/5">
        <CardTitle className="text-lg flex items-center">
          <LineChart className="mr-2 h-5 w-5 text-primary" />
          Calorie Trends
        </CardTitle>
        <CardDescription>Your calorie intake over time</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="week" onValueChange={setActiveTab}>
          <TabsList className="w-full rounded-none border-b bg-transparent h-12">
            <TabsTrigger value="week" className="flex-1 rounded-none data-[state=active]:bg-background">
              Week
            </TabsTrigger>
            <TabsTrigger value="month" className="flex-1 rounded-none data-[state=active]:bg-background">
              Month
            </TabsTrigger>
            <TabsTrigger value="year" className="flex-1 rounded-none data-[state=active]:bg-background">
              Year
            </TabsTrigger>
          </TabsList>
          <div className="p-4">
            <TabsContent value="week" className="mt-0">
              {renderChart()}
            </TabsContent>
            <TabsContent value="month" className="mt-0">
              {renderChart()}
            </TabsContent>
            <TabsContent value="year" className="mt-0">
              {renderChart()}
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
