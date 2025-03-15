"use client"

import type React from "react"

import { Search, Gamepad2, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface ActionButtonProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
  className?: string
}

function ActionButton({ icon, label, onClick, className }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-1 flex-col items-center justify-center py-3 px-2 bg-tech-darker-blue rounded-lg text-white",
        "transition-all hover:bg-tech-darker-blue/80",
        className,
      )}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  )
}

export function ActionButtons() {
  return (
    <div className="grid grid-cols-3 gap-3 my-4">
      <ActionButton icon={<Search className="h-5 w-5" />} label="Search" />
      <ActionButton icon={<Gamepad2 className="h-5 w-5" />} label="Games" />
      <ActionButton icon={<Users className="h-5 w-5" />} label="Providers" />
    </div>
  )
}

