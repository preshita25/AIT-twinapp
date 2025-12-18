import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const progressVariants = cva(
  "relative h-3 w-full overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        default: "bg-muted",
        primary: "bg-primary/20",
        accent: "bg-accent/20",
        secondary: "bg-secondary/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const indicatorVariants = cva(
  "h-full w-full flex-1 transition-all duration-500 ease-out rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary",
        primary: "gradient-hero",
        accent: "gradient-accent",
        secondary: "gradient-secondary",
        gold: "gradient-gold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  indicatorVariant?: VariantProps<typeof indicatorVariants>["variant"];
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, indicatorVariant = "default", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressVariants({ variant }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(indicatorVariants({ variant: indicatorVariant }))}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
