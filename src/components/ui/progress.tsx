"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const [indicatorPosition, setIndicatorPosition] = React.useState(0);

  React.useEffect(() => {
    const progressValue = value || 0;
    // This creates the back and forth (ping-pong) effect
    const position = Math.sin(progressValue / 100 * Math.PI) * 100;
    setIndicatorPosition(100 - position);
  }, [value]);


  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-transform duration-500 ease-linear"
        style={{ transform: `translateX(-${indicatorPosition}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
