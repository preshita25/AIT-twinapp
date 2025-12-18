import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-border",
        accent: "border-transparent bg-accent text-accent-foreground",
        bronze: "border-transparent bg-level-bronze text-primary-foreground",
        silver: "border-transparent bg-level-silver text-foreground",
        gold: "border-transparent gradient-gold text-foreground shadow-soft",
        platinum: "border-transparent bg-level-platinum text-primary-foreground",
        diamond: "border-transparent bg-level-diamond text-primary-foreground",
        success: "border-transparent bg-accent/20 text-accent",
        warning: "border-transparent bg-primary/20 text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
