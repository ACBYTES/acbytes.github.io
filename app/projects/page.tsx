"use client"

import React, { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Database, Cpu, Workflow, Settings, Bot, Book, LayoutDashboard } from "lucide-react"
import { getTechIcon } from "@/utils/tech-icons"
import { ProjectDetailModal } from "@/components/project-detail-modal"
import { projectsData, type Project } from "@/utils/project-data"

const iconMap = {
  FileText,
  Database,
  Cpu,
  Workflow,
  Settings,
  Bot,
  Book,
  LayoutDashboard
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold">
              Our <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore how we've helped companies across various industries automate their workflows and achieve
              remarkable efficiency gains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => { const IconComponent = iconMap[project.icon as keyof typeof iconMap] || iconMap.Cpu
               return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {project.savings}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    <span className="font-semibold text-primary">{project.company}</span> • {project.category}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-400">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-gray-800 text-gray-300 flex items-center gap-1.5"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                    <Button
                      onClick={() => handleViewDetails(project)}
                      variant="outline"
                      className="w-full border-primary/50 text-primary hover:bg-primary/10"
                    >
                      View Technical Details
                      <FileText className="ml-2 h-4 w-4" />
                    </Button>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </div>

      <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
