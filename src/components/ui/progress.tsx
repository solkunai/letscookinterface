"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const [indicatorWidth, setIndicatorWidth] = React.useState(0);

  React.useEffect(() => {
    const progressValue = value || 0;
    // Creates a back-and-forth triangular wave from 0 to 100 and back to 0
    const triangularWave = Math.abs((progressValue % 200) - 100);
    setIndicatorWidth(triangularWave);
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
        className="h-full w-full flex-1 bg-primary transition-all duration-200 ease-linear"
        style={{ width: `${indicatorWidth}%` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
