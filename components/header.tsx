import { GraduationCap } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Study Buddy AI</span>
          </div>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  )
}

