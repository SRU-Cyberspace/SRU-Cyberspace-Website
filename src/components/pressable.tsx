"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

type PressableProps = {
  children: ReactNode
  className?: string
} & Omit<ComponentProps<typeof motion.div>, "children">

export function Pressable({ children, className, ...props }: PressableProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn("inline-flex", className)}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
