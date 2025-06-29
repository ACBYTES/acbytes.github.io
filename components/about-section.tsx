"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Briefcase } from "lucide-react"

export function AboutSection() {
  const [yearsInBusiness, setYearsInBusiness] = useState(0)

  useEffect(() => {
    // Calculate years since company founding (let's say 2018)
    const foundingYear = 2020
    const currentYear = new Date().getFullYear()
    const years = currentYear - foundingYear

    // Animate the counter
    let current = 0
    const increment = years / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= years) {
        setYearsInBusiness(years)
        clearInterval(timer)
      } else {
        setYearsInBusiness(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    // {
    //   icon: Briefcase,
    //   value: "100+",
    //   label: "Companies Automated",
    //   description: "Successfully transformed operations",
    // },
    {
      icon: Clock,
      value: "10+",
      label: "Hours Saved Daily",
      description: "On average across all our client companies",
    },
    {
      icon: Award,
      value: "70%",
      label: "Average Reduction",
      description: "In manual workload",
    },
    {
      icon: Users,
      value: `${yearsInBusiness}+`,
      label: "Years Experience",
      description: "In automation solutions",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Companies <span className="gradient-text">Trust Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just build software – we immerse ourselves in your operations, spending time in your back offices
            to understand every process before creating solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="mx-auto p-3 rounded-full bg-primary/20 w-fit mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <h4 className="text-lg font-semibold mb-2">{stat.label}</h4>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Our Proven Methodology</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Deep Analysis</h4>
                  <p className="text-gray-400">
                    We spend weeks in your back office, observing and documenting every manual process.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Technical Assessment</h4>
                  <p className="text-gray-400">
                    Our engineers evaluate each task from a technical perspective to identify automation opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Custom Solutions</h4>
                  <p className="text-gray-400">
                    We develop tailored automation solutions using the latest technologies and AI.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Implementation & Training</h4>
                  <p className="text-gray-400">
                    We implement the solutions and train your team to maximize efficiency gains.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg"></div>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <blockquote className="text-lg italic text-gray-300 mb-4">
                  "Working with ACBYTES has completely changed the way we operate. They've helped us cut out a lot of the repetitive tasks, 
                  which means our team can now focus on more important, strategic work. We're saving more than 10 hours a day across the board, 
                  and it’s made a huge difference."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">BFC Inc.</p>
                    <p className="text-gray-400 text-sm">A Financial Services Company</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
