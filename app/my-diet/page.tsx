"use server";

import { Suspense } from "react"
import { 
  CalendarDays, 
  ArrowRight, 
  Zap, 
  Clock, 
  Plus, 
  TrendingUp, 
  Apple, 
  Utensils, 
  Heart, 
  Award, 
  BarChart3 
} from "lucide-react"

import { MealList } from "@/components/meal-list"
import { MealForm } from "@/components/meal-form"
import { DailySummary } from "@/components/daily-summary"
import { CalorieChart } from "@/components/calorie-chart"
import { PageHeader } from "@/components/page-header"
import { MealListSkeleton } from "@/components/meal-list-skeleton"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function MyDietPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto py-12 px-4 md:px-6 space-y-8">
        {/* Hero Section with Animated Gradient */}
        <div className="relative mb-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-400/20 to-primary/20 rounded-3xl blur-xl opacity-60 -z-10 animate-gradient"></div>
          <div className="absolute inset-x-0 -top-40 -bottom-40 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.15),transparent_70%)] z-0"></div>
          
          <Card className="relative border-0 shadow-lg bg-background/80 backdrop-blur-md rounded-3xl overflow-hidden z-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-purple-400 to-primary/80"></div>
            <CardContent className="p-8">
              <PageHeader
                title="My Diet Tracker"
                description="Monitor your daily meals and calorie intake"
                icon={<CalendarDays className="h-7 w-7 text-primary" />}
              />
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-background/50 border border-border/50 hover:border-primary/30 transition-colors rounded-xl p-4 flex items-center gap-4 group hover:shadow-md">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Today's Goal</div>
                    <div className="font-medium text-lg">2000 calories</div>
                  </div>
                </div>
                
                <div className="bg-background/50 border border-border/50 hover:border-primary/30 transition-colors rounded-xl p-4 flex items-center gap-4 group hover:shadow-md">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Last Meal</div>
                    <div className="font-medium text-lg">2 hours ago</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/20 shadow-md hover:shadow-lg transition-all w-full">
                    <Plus className="h-5 w-5 mr-2" /> Add New Meal
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-primary/5 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-primary">1,450</div>
                  <div className="text-xs text-muted-foreground mt-1">Calories Today</div>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-primary">550</div>
                  <div className="text-xs text-muted-foreground mt-1">Remaining</div>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-xs text-muted-foreground mt-1">Meals Today</div>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-primary">72%</div>
                  <div className="text-xs text-muted-foreground mt-1">Goal Progress</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Tabs with Animated Indicator */}
        <Tabs defaultValue="today" className="mb-8">
          <div className="relative">
            <TabsList className="mb-8 w-full justify-start gap-2 bg-transparent">
              <TabsTrigger value="today" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-sm">
                <CalendarDays className="h-4 w-4 mr-2" /> Today
              </TabsTrigger>
              <TabsTrigger value="yesterday" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-sm">
                <Clock className="h-4 w-4 mr-2" /> Yesterday
              </TabsTrigger>
              <TabsTrigger value="week" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-sm">
                <BarChart3 className="h-4 w-4 mr-2" /> This Week
              </TabsTrigger>
              <TabsTrigger value="month" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-sm">
                <TrendingUp className="h-4 w-4 mr-2" /> This Month
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="today" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-7 lg:grid-cols-5">
              <div className="md:col-span-5 lg:col-span-3 space-y-6">
                <Card className="overflow-hidden border-0 shadow-md">
                  <div className="bg-gradient-to-r from-primary/10 to-purple-400/10 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-background/80 p-2 rounded-full shadow-sm">
                          <Utensils className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Add New Meal</h3>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3">
                        Quick Entry
                      </Badge>
                    </div>
                    <MealForm />
                  </div>
                </Card>
                
                <Card className="overflow-hidden border-0 shadow-md">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Apple className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Today's Meals</h3>
                      </div>
                      <Button variant="outline" size="sm" className="text-primary border-primary/20 hover:bg-primary/5">
                        View All <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                    <Suspense fallback={<MealListSkeleton />}>
                      <MealList />
                    </Suspense>
                  </div>
                </Card>
              </div>
              
              <div className="md:col-span-2 lg:col-span-2 space-y-6">
                <Card className="overflow-hidden border-0 shadow-md">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Daily Summary</h3>
                    </div>
                    <DailySummary />
                  </div>
                </Card>
                
                <Card className="overflow-hidden border-0 shadow-md">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Calorie Trends</h3>
                    </div>
                    <CalorieChart />
                  </div>
                </Card>
                
                <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-br from-primary/10 via-purple-400/10 to-primary/5">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-background/80 p-2 rounded-full shadow-sm">
                          <Heart className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Nutrition Tips</h3>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary h-8 px-2 hover:bg-background/50">
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 mt-2">
                      <p className="text-sm text-muted-foreground">
                        Try to eat protein with every meal to help maintain muscle mass and keep you feeling full longer.
                      </p>
                      <div className="mt-3 flex justify-end">
                        <Badge variant="outline" className="text-xs bg-background/50 border-primary/20 text-primary">Daily Tip</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="yesterday">
            <Card className="overflow-hidden border-0 shadow-md">
              <div className="flex flex-col items-center justify-center h-60 bg-muted/10 rounded-xl">
                <CalendarDays className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground">Yesterday's data will appear here</p>
                <Button variant="outline" className="mt-4 text-primary border-primary/20">
                  Load Yesterday's Data
                </Button>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="week">
            <Card className="overflow-hidden border-0 shadow-md">
              <div className="flex flex-col items-center justify-center h-60 bg-muted/10 rounded-xl">
                <BarChart3 className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground">Weekly data will appear here</p>
                <Button variant="outline" className="mt-4 text-primary border-primary/20">
                  Generate Weekly Report
                </Button>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="month">
            <Card className="overflow-hidden border-0 shadow-md">
              <div className="flex flex-col items-center justify-center h-60 bg-muted/10 rounded-xl">
                <TrendingUp className="h-10 w-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground">Monthly data will appear here</p>
                <Button variant="outline" className="mt-4 text-primary border-primary/20">
                  Generate Monthly Report
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 