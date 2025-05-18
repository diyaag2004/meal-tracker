"use client";

import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, 
  BarChart3, 
  CalendarDays, 
  Clock, 
  PieChart, 
  Utensils, 
  Sparkles, 
  Heart, 
  Star, 
  Apple, 
  Carrot, 
  Salad, 
  CircleUser, 
  CheckCircle2, 
  TrendingUp, 
  Smartphone, 
  Zap,
  Flame,
  Scale,
  Award
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { OrbitingCircles } from "@/components/magicui/orbiting-circles"
import { Lens } from "@/components/magicui/lens"
import { BentoGrid, BentoGridItem } from "@/components/magicui/bento-grid"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Lens effect */}
      <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.08),transparent_40%)]" />
        <Lens className="w-full h-full absolute inset-0" zoomLevel={1.2}>
          <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]" />
        </Lens>
        
        <div className="container relative z-20 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 animate-pulse-slow">
              Track your nutrition journey
            </div>
            <div className="space-y-2 relative">
              <div className="absolute -top-20 -right-20 opacity-70">
                <OrbitingCircles radius={120} speed={1.5} className="bg-primary/30 dark:bg-primary/20 rounded-full p-1">
                  <Heart className="text-primary h-4 w-4" />
                  <Apple className="text-primary h-4 w-4" />
                  <Star className="text-primary h-4 w-4" />
                  <Carrot className="text-primary h-4 w-4" />
                  <Salad className="text-primary h-4 w-4" />
                </OrbitingCircles>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                Track Your Meals, Achieve Your Goals
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A simple, intuitive meal tracking app to help you monitor your calorie intake and maintain a healthy diet.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="animate-shimmer text-purple-600 dark:text-white bg-primary hover:bg-primary/90 hover:text-primary-foreground border border-primary/20">
                <Link href="/my-diet">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-20 bg-background relative overflow-hidden border-t border-b">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03),transparent_40%)]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">10k+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">1M+</div>
              <p className="text-muted-foreground">Meals Tracked</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">15+</div>
              <p className="text-muted-foreground">Features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with BentoGrid */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                Key Features
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Everything you need to track your daily nutrition and calorie intake.
              </p>
            </div>
          </div>
          
          <BentoGrid className="mt-12">
            <BentoGridItem
              title="Easy Meal Logging"
              description="Quickly log your meals with name, calories, and time with our simple interface."
              icon={<Utensils className="h-10 w-10 text-primary" />}
              className="animate-float"
            />
            <BentoGridItem
              title="Daily Summary"
              description="Get a quick overview of your daily calorie intake and remaining calories."
              icon={<PieChart className="h-10 w-10 text-primary" />}
              className="animate-pulse-slow"
            />
            <BentoGridItem
              title="Visual Charts"
              description="Track your progress with visual charts showing your calorie intake over time."
              icon={<BarChart3 className="h-10 w-10 text-primary" />}
              className="animate-float"
            />
            <BentoGridItem
              title="Daily Tracking"
              description="View and manage your meals on a daily basis to maintain consistency."
              icon={<CalendarDays className="h-10 w-10 text-primary" />}
              className="animate-pulse-slow"
            />
            <BentoGridItem
              title="Meal Timing"
              description="Track when you eat to establish healthy eating patterns and intervals."
              icon={<Clock className="h-10 w-10 text-primary" />}
              className="animate-float"
            />
            <BentoGridItem
              title="Beautiful UI"
              description="Enjoy a modern, responsive interface that works seamlessly on all your devices."
              icon={<Sparkles className="h-10 w-10 text-primary" />}
              className="animate-pulse-slow"
            />
          </BentoGrid>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-muted/30 to-transparent"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                How It Works
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Three simple steps to transform your nutrition habits
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -translate-y-1/2"></div>
            
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl"></div>
                <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
              <h3 className="text-xl font-bold">Log Your Meals</h3>
              <p className="text-muted-foreground">
                Quickly add your meals with their calorie content. Our simple interface makes tracking effortless.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl"></div>
                <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
              <h3 className="text-xl font-bold">Track Progress</h3>
              <p className="text-muted-foreground">
                View detailed summaries and charts to understand your eating patterns and make informed decisions.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl"></div>
                <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
              <h3 className="text-xl font-bold">Achieve Goals</h3>
              <p className="text-muted-foreground">
                Stay consistent with your nutrition plan and reach your health and fitness goals faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshot Section */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                  Beautiful, Intuitive Interface
                </h2>
                <p className="text-muted-foreground text-lg">
                  Our app is designed with user experience in mind. The clean and modern interface makes tracking your meals a breeze.
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Dark & Light Mode</h3>
                    <p className="text-muted-foreground">Choose the theme that suits your preference</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Responsive Design</h3>
                    <p className="text-muted-foreground">Works perfectly on any device - mobile, tablet, or desktop</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Interactive Charts</h3>
                    <p className="text-muted-foreground">Visualize your progress with beautiful, interactive charts</p>
                  </div>
                </li>
              </ul>
              
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/20">
                <Link href="/my-diet">
                  Try It Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-400/20 rounded-xl blur-xl opacity-50"></div>
              <div className="relative bg-background border border-border/50 rounded-xl overflow-hidden shadow-xl">
                <div className="p-2 border-b bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
                    <Image src="/image.png" alt="App Screenshot" width={1000} height={1000} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05),transparent_40%)]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                Benefits of Meal Tracking
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Discover how tracking your meals can transform your health
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted/20 p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Increased Awareness</h3>
              <p className="text-muted-foreground">
                Become more conscious of what and how much you're eating, leading to better food choices.
              </p>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Flame className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Weight Management</h3>
              <p className="text-muted-foreground">
                Maintain or achieve your ideal weight by monitoring your calorie intake and adjusting as needed.
              </p>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Balanced Nutrition</h3>
              <p className="text-muted-foreground">
                Ensure you're getting the right balance of nutrients to support your overall health.
              </p>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground">
                See your improvements over time and stay motivated by tracking your consistency.
              </p>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Goal Achievement</h3>
              <p className="text-muted-foreground">
                Reach your fitness and health goals faster by having clear visibility into your nutrition.
              </p>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Better Health</h3>
              <p className="text-muted-foreground">
                Improve your overall health and wellbeing through mindful eating and proper nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-muted/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                What Our Users Say
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of satisfied users who have transformed their nutrition habits.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-background/50 border border-border/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <CircleUser className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Lost 15 pounds</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "This app has completely changed how I approach my meals. The visual charts make it so easy to see my progress and stay motivated."
              </p>
              <div className="flex mt-4 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
            
            <div className="bg-background/50 border border-border/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <CircleUser className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">Fitness enthusiast</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I've tried many meal tracking apps, but this one stands out with its clean interface and ease of use. It's become an essential part of my fitness routine."
              </p>
              <div className="flex mt-4 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
            
            <div className="bg-background/50 border border-border/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <CircleUser className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Emily Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">Nutrition coach</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I recommend this app to all my clients. The daily summaries provide just the right amount of information without being overwhelming."
              </p>
              <div className="flex mt-4 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05),transparent_40%)]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                Ready to Start Tracking?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Begin your journey to better nutrition today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="animate-shimmer bg-primary text-purple-600 dark:text-white hover:bg-primary/90 hover:text-primary-foreground border border-primary/20">
                <Link href="/my-diet">
                  Go to My Diet <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
        </div>
      </div>
      </section>
    </div>
  )
}
