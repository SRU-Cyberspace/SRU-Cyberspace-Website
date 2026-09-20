"use client"

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type SyntheticEvent,
} from "react"
import { createPortal } from "react-dom"
import { X } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "motion/react"

interface ExpandableScreenContextValue {
  isExpanded: boolean
  expand: () => void
  collapse: () => void
  layoutId: string
  triggerRadius: string
  contentRadius: string
  animationDuration: number
}

const ExpandableScreenContext =
  createContext<ExpandableScreenContextValue | null>(null)

function useExpandableScreen() {
  const context = useContext(ExpandableScreenContext)
  if (!context) {
    throw new Error(
      "useExpandableScreen must be used within an ExpandableScreen"
    )
  }
  return context
}

interface ExpandableScreenProps {
  children: ReactNode
  defaultExpanded?: boolean
  onExpandChange?: (expanded: boolean) => void
  layoutId?: string
  triggerRadius?: string
  contentRadius?: string
  animationDuration?: number
  lockScroll?: boolean
}

export function ExpandableScreen({
  children,
  defaultExpanded = false,
  onExpandChange,
  layoutId = "expandable-card",
  triggerRadius = "100px",
  contentRadius = "24px",
  animationDuration = 0.3,
  lockScroll = true,
}: ExpandableScreenProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const reopenGuardUntil = useRef(0)

  const expand = () => {
    if (Date.now() < reopenGuardUntil.current) return
    setIsExpanded(true)
    onExpandChange?.(true)
  }

  const collapse = () => {
    reopenGuardUntil.current = Date.now() + 400
    setIsExpanded(false)
    onExpandChange?.(false)
  }

  useEffect(() => {
    if (!lockScroll) return
    document.body.style.overflow = isExpanded ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isExpanded, lockScroll])

  useEffect(() => {
    if (!isExpanded) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") collapse()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isExpanded])

  return (
    <ExpandableScreenContext.Provider
      value={{
        isExpanded,
        expand,
        collapse,
        layoutId,
        triggerRadius,
        contentRadius,
        animationDuration,
      }}
    >
      {children}
    </ExpandableScreenContext.Provider>
  )
}

interface ExpandableScreenTriggerProps {
  children: ReactNode
  className?: string
}

export function ExpandableScreenTrigger({
  children,
  className = "",
}: ExpandableScreenTriggerProps) {
  const { isExpanded, expand, layoutId, triggerRadius } = useExpandableScreen()

  return (
    <AnimatePresence initial={false}>
      {!isExpanded && (
        <motion.div className={`relative inline-block ${className}`}>
          <motion.div
            style={{ borderRadius: triggerRadius }}
            layout
            layoutId={layoutId}
            className="absolute inset-0 transform-gpu will-change-transform"
          />
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            layout={false}
            onClick={(event) => {
              event.stopPropagation()
              expand()
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                expand()
              }
            }}
            role="button"
            tabIndex={0}
            className="relative cursor-pointer"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface ExpandableScreenContentProps {
  children: ReactNode
  className?: string
  showCloseButton?: boolean
  closeButtonClassName?: string
}

export function ExpandableScreenContent({
  children,
  className = "",
  showCloseButton = true,
  closeButtonClassName = "",
}: ExpandableScreenContentProps) {
  const { isExpanded, collapse, layoutId, contentRadius, animationDuration } =
    useExpandableScreen()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const close = (event: SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()
    collapse()
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence initial={false}>
      {isExpanded ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3"
          onClick={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <motion.div
            layoutId={layoutId}
            transition={{
              duration: animationDuration,
              ease: [0.23, 1, 0.32, 1],
            }}
            style={{ borderRadius: contentRadius }}
            layout
            className={`relative flex h-full w-full overflow-y-auto transform-gpu will-change-transform ${className}`}
            onClick={(event) => event.stopPropagation()}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.15,
                duration: 0.35,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative z-20 w-full"
            >
              {children}
            </motion.div>

            {showCloseButton ? (
              <motion.button
                type="button"
                onPointerDown={close}
                onClick={close}
                className={`absolute right-4 top-4 z-30 flex size-10 items-center justify-center rounded-full transition-colors sm:right-6 sm:top-6 ${
                  closeButtonClassName ||
                  "bg-transparent text-brand-foreground hover:bg-brand-foreground/10"
                }`}
                aria-label="Close"
              >
                <X className="size-5" weight="bold" />
              </motion.button>
            ) : null}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body
  )
}

interface ExpandableScreenBackgroundProps {
  trigger?: ReactNode
  content?: ReactNode
  className?: string
}

export function ExpandableScreenBackground({
  trigger,
  content,
  className = "",
}: ExpandableScreenBackgroundProps) {
  const { isExpanded } = useExpandableScreen()

  if (isExpanded && content) {
    return <div className={className}>{content}</div>
  }

  if (!isExpanded && trigger) {
    return <div className={className}>{trigger}</div>
  }

  return null
}

export { useExpandableScreen }
