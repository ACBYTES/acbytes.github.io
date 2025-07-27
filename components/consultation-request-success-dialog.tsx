"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles, Mail, Clock, X } from "lucide-react"
import { useEffect, useState } from "react"
import { DialogTitle } from "@radix-ui/react-dialog"

interface AnimatedSuccessDialogProps {
    open: boolean
    setOpen: (open: boolean) => void
}

export function AnimatedSuccessDialog({ open, setOpen }: AnimatedSuccessDialogProps) {
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => setShowContent(true), 200)
            return () => clearTimeout(timer)
        } else {
            setShowContent(false)
        }
    }, [open])

    if (!open)
        return null;

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle></DialogTitle>
            <DialogContent className="max-w-lg bg-gray-900 border-gray-800 text-white p-0 overflow-hidden">
                {/* Animated Background */}
                <div className="relative min-h-[400px]">
                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute w-2 h-2 bg-primary/30 rounded-full animate-float ${showContent ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{
                                    left: `${20 + i * 15}%`,
                                    top: `${10 + (i % 3) * 20}%`,
                                    animationDelay: `${i * 0.5}s`,
                                    animationDuration: `${3 + i * 0.5}s`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>

                    {/* Close Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setOpen(false)}
                        className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </Button>

                    {/* Main Content */}
                    <div
                        className={`relative p-8 pt-12 text-center space-y-6 transition-all duration-500 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        {/* Success Icon with Animation */}
                        <div className="relative mx-auto w-20 h-20">
                            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                            <div className="relative w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <CheckCircle className="w-10 h-10 text-primary" />
                            </div>
                        </div>

                        {/* Title with Gradient */}
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold">
                                <span className="gradient-text">Success!</span>
                            </h2>
                            <p className="text-lg text-gray-300">Your automation journey begins now</p>
                            <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                                We've received your consultation request and we'll start reviewing it shortly.
                            </p>
                        </div>

                        {/* Timeline Card */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 space-y-4 border border-gray-700/50">
                            <div className="flex items-center justify-center space-x-2 text-primary">
                                <Clock className="w-5 h-5" />
                                <span className="font-semibold">Your Timeline</span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-sm">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold text-xs">
                                        1
                                    </div>
                                    <div className="text-left">
                                        <div className="font-medium text-white">Review & Analysis</div>
                                        <div className="text-gray-400">Within 2-4 hours</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 text-sm">
                                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                                        2
                                    </div>
                                    <div className="text-left">
                                        <div className="font-medium text-white">Consultation Call</div>
                                        <div className="text-gray-400">Next 1-2 business days</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 text-sm">
                                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                                        3
                                    </div>
                                    <div className="text-left">
                                        <div className="font-medium text-white">Custom Proposal</div>
                                        <div className="text-gray-400">Within 1 week</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Confirmation */}
                        {/* <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 bg-gray-800/30 rounded-lg p-3">
              <Mail className="w-4 h-4 text-primary" />
              <span>Confirmation email sent to your inbox</span>
            </div> */}

                        {/* Action Buttons */}
                        {/* <div className="space-y-3 pt-2">
              <Button
                onClick={() => setOpen(false)}
                className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3"
              >
                Continue Exploring Our Solutions
              </Button>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setOpen(false)
                    // Navigate to projects
                  }}
                  className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setOpen(false)
                    // Navigate to contact
                  }}
                  className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  Contact Us
                </Button>
              </div>
            </div> */}

                        {/* Footer */}
                        <div className="text-xs text-gray-500 pt-4 border-t border-gray-800">
                            <p>
                                Questions? Reach us at{" "}
                                <a href="mailto:admin@acbytes.com" className="text-primary hover:underline">
                                    admin@acbytes.com
                                </a>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
