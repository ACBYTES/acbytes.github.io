import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NetworkAnimation } from "./network-animation"
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden network-bg">
      <NetworkAnimation />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <img src="/ACBYTES/ACBYTES250250.png" width="125px" className="block mx-auto mt-16"></img>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Automate up to <span className="gradient-text">100%</span> of Your
              <br />
              Workload, Using AI & Custom Software
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              We analyze your back-office operations and create custom automation solutions that save your team over 10
              hours per day
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4">
              Start Your Automation Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4">
                Start Your Automation Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {/* <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4"
            >
              View Case Studies
            </Button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/20">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">5+ Hours</h3>
              <p className="text-gray-400">Saved per employee daily</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/20">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">70%</h3>
              <p className="text-gray-400">Average workload reduction</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/20">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Any Industry</h3>
              <p className="text-gray-400">Can be automated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
