import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Coffee, Users, BookOpen, DollarSign } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center container mx-auto w-full">
        <Link className="flex items-center justify-center" href="#">
          <Coffee className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-800">CMS</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Streamline Your Canteen Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Efficient, user-friendly, and comprehensive solution for
                  managing your school or office canteen.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/auth/login">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
              <Card>
                <CardHeader>
                  <Coffee className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Canteen Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Efficiently manage daily operations, inventory, and meal
                    planning.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Student Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Keep track of student information, meal preferences, and
                    dietary restrictions.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-yellow-600 mb-2" />
                  <CardTitle>Class Assignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Organize students into classes for easier meal distribution
                    and management.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DollarSign className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Payment Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Monitor and manage payments, generate reports, and send
                    reminders.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Streamlined Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;The Canteen Management System has revolutionized how
                    we run our school canteen. It&apos;s efficient and easy to
                    use!&quot;
                  </p>
                  <p className="mt-4 font-semibold">
                    - Sarah Johnson, School Principal
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Improved Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;With this system, we&apos;ve significantly reduced
                    errors in payments and meal distribution. It&apos;s a
                    game-changer!&quot;
                  </p>
                  <p className="mt-4 font-semibold">
                    - Mike Thompson, Canteen Manager
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Parent-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;As a parent, I love being able to easily manage my
                    child&apos;s meal plan and payments online. It&apos;s so
                    convenient!&quot;
                  </p>
                  <p className="mt-4 font-semibold">- Emily Chen, Parent</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For small canteens</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$29/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>Up to 100 students</li>
                    <li>Basic reporting</li>
                    <li>Email support</li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>
                    For medium-sized institutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$79/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>Up to 500 students</li>
                    <li>Advanced reporting</li>
                    <li>Priority support</li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large institutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited students</li>
                    <li>Custom features</li>
                    <li>24/7 support</li>
                  </ul>
                  <Button className="mt-6 w-full">Contact Us</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Canteen Management?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of satisfied users and experience the
                  difference today.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Canteen Management System. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
