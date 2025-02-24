import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"  // 後で作成します

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-8 px-3",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }