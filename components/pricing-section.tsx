import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Building, Building2, Factory } from "lucide-react"

const plans = [
  {
    name: "Startup",
    icon: Building,
    price: "$5,000",
    period: "one-time analysis",
    description: "Perfect for small teams looking to automate basic workflows",
    features: [
      "1-week back-office analysis",
      "Basic automation recommendations",
      "Simple workflow automation",
      "Email support",
      "Implementation guide",
    ],
    popular: false,
  },
  {
    name: "Growth",
    icon: Building2,
    price: "$15,000",
    period: "comprehensive package",
    description: "Ideal for growing companies with complex operations",
    features: [
      "2-week deep analysis",
      "Custom automation solutions",
      "AI-powered workflow optimization",
      "Priority support",
      "3 months implementation support",
      "Staff training included",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Factory,
    price: "Custom",
    period: "tailored solution",
    description: "Full-scale automation for large organizations",
    features: [
      "4-week comprehensive analysis",
      "Enterprise-grade automation",
      "Multi-department integration",
      "6 months ongoing support",
      "Advanced AI implementations",
      "Custom integrations",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Choose Your <span className="gradient-text">Automation Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer tailored solutions for businesses of all sizes. Every plan includes our proven methodology of
            analyzing your operations and implementing custom automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-lg shadow-primary/20" : "border-gray-800"} bg-gray-900/50 backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="mx-auto p-3 rounded-full bg-primary/20 w-fit mb-4">
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-gray-400 mr-2">From</span>
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/ {plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <a href="/contact" className="w-full">
                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90 text-black" : "bg-gray-800 hover:bg-gray-700 text-white"}`}
                >
                  Get Started
                </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
