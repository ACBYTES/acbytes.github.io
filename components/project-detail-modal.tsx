"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Code2, CheckCircle } from "lucide-react"
import type { Project } from "@/utils/project-data"

interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState(0)

  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gray-900 border-gray-800 text-white">
        <DialogHeader className="border-b border-gray-800 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-primary">{project.title}</DialogTitle>
              <p className="text-gray-400 mt-1">
                <span className="font-semibold text-primary">{project.company}</span> • {project.category}
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300">
                {tech}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        <div className="flex flex-col lg:flex-row gap-6 h-full">
          {/* Navigation Tabs */}
          <div className="lg:w-1/3 project-tdd-div">
            <h3 className="text-lg font-semibold mb-4 text-primary">Technical Deep Dive</h3>
            <div className="space-y-2">
              {project.details.map((detail, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    activeTab === index
                      ? "bg-primary/20 border-l-4 border-primary text-primary"
                      : "bg-gray-800/50 hover:bg-gray-800 text-gray-300"
                  }`}
                >
                  <div className="font-medium text-sm">{detail.topic}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 project-ti-div">
            <ScrollArea className="h-[60vh] pr-4">
              {project.details[activeTab] && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-3">{project.details[activeTab].topic}</h2>
                    <p className="text-gray-300 leading-relaxed">{project.details[activeTab].description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Technical Implementation Points
                    </h3>
                    <div className="space-y-3">
                      {project.details[activeTab].technicalPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <p className="text-gray-300 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.details[activeTab].codeExample && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Code2 className="h-5 w-5 text-primary mr-2" />
                        Code Example
                      </h3>
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-300">
                          <code>{project.details[activeTab].codeExample}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 mt-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              <span className="text-primary font-semibold">{project.savings}</span>
            </div>
            <Button onClick={onClose} className="bg-primary hover:bg-primary/90 text-black">
              Close Details
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
