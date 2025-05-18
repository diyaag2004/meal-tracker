"use client";

import { Info, Utensils, BarChart3, Clock, PieChart, Sparkles, Users, Heart, Trophy } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/magicui/bento-grid";
import { PageHeader } from "@/components/page-header";
import { Lens } from "@/components/magicui/lens";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Background elements */}
      <div className="absolute top-40 right-10 opacity-20 hidden lg:block">
        <OrbitingCircles radius={100} speed={2} className="bg-primary/10 dark:bg-primary/5 rounded-full p-1">
          <Heart className="text-primary h-3 w-3" />
          <PieChart className="text-primary h-3 w-3" />
          <BarChart3 className="text-primary h-3 w-3" />
          <Clock className="text-primary h-3 w-3" />
        </OrbitingCircles>
      </div>
      
      <div className="absolute bottom-40 left-10 opacity-20 hidden lg:block">
        <OrbitingCircles radius={80} speed={1.5} reverse className="bg-primary/10 dark:bg-primary/5 rounded-full p-1">
          <Utensils className="text-primary h-3 w-3" />
          <Sparkles className="text-primary h-3 w-3" />
          <Trophy className="text-primary h-3 w-3" />
          <Users className="text-primary h-3 w-3" />
        </OrbitingCircles>
      </div>

      <div className="container mx-auto py-12 px-4 md:px-6 relative z-10">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-2xl blur-xl opacity-50 -z-10"></div>
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            <PageHeader
              title="About Meal Tracker"
              description="Learn more about our app and its features"
              icon={<Info className="h-6 w-6" />}
            />

            <div className="mt-8 prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                At Meal Tracker, we believe that maintaining a healthy diet should be simple and accessible to everyone. 
                Our mission is to provide an intuitive tool that helps you track your daily calorie intake, 
                visualize your eating patterns, and make informed decisions about your nutrition.
              </p>

              <h2 className="text-3xl font-bold tracking-tighter mt-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Our Story</h2>
              <p className="text-muted-foreground text-lg">
                Meal Tracker was created by Diya Agrawal, who wanted a simple yet effective way to monitor daily food intake. 
                What started as a personal project quickly evolved into a comprehensive tool designed to help anyone who wants 
                to be more mindful about their eating habits. Whether you're trying to lose weight, gain muscle, or simply 
                maintain a balanced diet, Meal Tracker provides the insights you need to succeed.
              </p>
              
              <div className="mt-6 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">From the Creator</h3>
                </div>
                <p className="text-muted-foreground italic">
                  "I am Diya Agrawal, the creator of this application. I built Meal Tracker to solve my own challenges with nutrition tracking, and I'm thrilled to share it with you. My goal was to create something beautiful, functional, and easy to use that helps people make better food choices every day."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-4">Key Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our app is packed with features to help you achieve your nutrition goals</p>
        </div>

        <Lens className="w-full mb-16" zoomLevel={1.1}>
          <BentoGrid className="mt-6">
            <BentoGridItem
              title="Easy Meal Logging"
              description="Quickly log your meals with name, calories, and time with our simple interface."
              icon={<Utensils className="h-8 w-8 text-primary" />}
              className="animate-float bg-gradient-to-br from-background to-muted/30"
            />
            <BentoGridItem
              title="Daily Summary"
              description="Get a quick overview of your daily calorie intake and remaining calories."
              icon={<PieChart className="h-8 w-8 text-primary" />}
              className="animate-pulse-slow bg-gradient-to-br from-background to-muted/30"
            />
            <BentoGridItem
              title="Visual Charts"
              description="Track your progress with visual charts showing your calorie intake over time."
              icon={<BarChart3 className="h-8 w-8 text-primary" />}
              className="animate-float bg-gradient-to-br from-background to-muted/30"
            />
            <BentoGridItem
              title="Meal Timing"
              description="Track when you eat to establish healthy eating patterns and intervals."
              icon={<Clock className="h-8 w-8 text-primary" />}
              className="animate-pulse-slow bg-gradient-to-br from-background to-muted/30"
            />
            <BentoGridItem
              title="Beautiful UI"
              description="Enjoy a modern, responsive interface that works seamlessly on all your devices."
              icon={<Sparkles className="h-8 w-8 text-primary" />}
              className="animate-float bg-gradient-to-br from-background to-muted/30"
              colSpan={2}
            />
          </BentoGrid>
        </Lens>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-2xl blur-xl opacity-50 -z-10"></div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">About the Creator</h2>
              </div>
              
              <p className="text-muted-foreground">
                Meal Tracker was developed by Diya Agrawal, a passionate developer who believes in the power 
                of technology to improve health and wellness. Diya is constantly working to improve the app 
                based on user feedback and the latest research in nutrition science.
              </p>
              
              <div className="mt-6 bg-primary/5 p-6 rounded-xl">
                <div className="font-semibold text-lg mb-2">Diya Agrawal</div>
                <div className="text-sm text-muted-foreground mb-4">Creator & Lead Developer</div>
                <p className="text-muted-foreground">
                  With a background in both nutrition and software development, Diya created Meal Tracker 
                  to bridge the gap between technical complexity and everyday usability in nutrition apps.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-2xl blur-xl opacity-50 -z-10"></div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Contact Us</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">
                We'd love to hear from you! Whether you have questions, feedback, or suggestions, 
                please don't hesitate to reach out to us.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:diyaag2020@gmail.com" className="text-sm text-primary hover:underline">diyaag2020@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-primary">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Office</div>
                    <div className="text-sm text-muted-foreground">123 Nutrition St, Health City, CA 94103</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}