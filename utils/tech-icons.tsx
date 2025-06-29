import { Code, Database, Cpu, Globe, Server, Layers, Box, Zap, FileCode, Cloud } from "lucide-react"

export const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase()

  // Programming Languages
  if (techLower.includes("python")) return <Code className="h-4 w-4 text-blue-400" />
  if (techLower.includes("javascript") || techLower.includes("node.js"))
    return <FileCode className="h-4 w-4 text-yellow-400" />
  if (techLower.includes("java")) return <Code className="h-4 w-4 text-red-400" />
  if (techLower.includes("c#")) return <Code className="h-4 w-4 text-purple-400" />

  // Databases
  if (techLower.includes("postgresql") || techLower.includes("mysql") || techLower.includes("sql server"))
    return <Database className="h-4 w-4 text-blue-500" />
  if (techLower.includes("mongodb")) return <Database className="h-4 w-4 text-green-500" />
  if (techLower.includes("redis")) return <Database className="h-4 w-4 text-red-500" />

  // Frontend Frameworks
  if (techLower.includes("react") || techLower.includes("next.js")) return <Globe className="h-4 w-4 text-cyan-400" />
  if (techLower.includes("vue.js")) return <Globe className="h-4 w-4 text-green-400" />
  if (techLower.includes("angular")) return <Globe className="h-4 w-4 text-red-400" />

  // Backend Frameworks
  if (techLower.includes("fastapi") || techLower.includes("flask")) return <Server className="h-4 w-4 text-green-400" />
  if (techLower.includes("express")) return <Server className="h-4 w-4 text-gray-400" />
  if (techLower.includes("spring boot")) return <Server className="h-4 w-4 text-green-500" />
  if (techLower.includes(".net core")) return <Server className="h-4 w-4 text-purple-500" />

  // AI/ML
  if (techLower.includes("tensorflow") || techLower.includes("opencv"))
    return <Cpu className="h-4 w-4 text-orange-400" />
  if (techLower.includes("pandas")) return <Layers className="h-4 w-4 text-blue-300" />

  // Cloud/DevOps
  if (techLower.includes("docker")) return <Box className="h-4 w-4 text-blue-400" />
  if (techLower.includes("azure")) return <Cloud className="h-4 w-4 text-blue-500" />
  if (techLower.includes("kafka")) return <Zap className="h-4 w-4 text-yellow-500" />

  // OCR and other technologies
  if (techLower.includes("ocr")) return <FileCode className="h-4 w-4 text-indigo-400" />

  // Default icon
  return <Code className="h-4 w-4 text-gray-400" />
}
