import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskMetricCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
  variant: "pending" | "overdue" | "due-today" | "approaching";
  className?: string;
  onClick?: () => void;
}

export function TaskMetricCard({ title, count, icon: Icon, variant, className, onClick }: TaskMetricCardProps) {
  const variantStyles = {
    pending: "border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10",
    overdue: "border-danger/20 bg-gradient-to-br from-danger/10 to-danger/5 hover:from-danger/15 hover:to-danger/10",
    "due-today": "border-warning/20 bg-gradient-to-br from-warning/10 to-warning/5 hover:from-warning/15 hover:to-warning/10",
    approaching: "border-success/20 bg-gradient-to-br from-success/10 to-success/5 hover:from-success/15 hover:to-success/10"
  };

  const iconStyles = {
    pending: "text-primary",
    overdue: "text-danger",
    "due-today": "text-warning",
    approaching: "text-success"
  };

  return (
    <div 
      className={cn(
        "task-metric-card group cursor-pointer",
        variantStyles[variant],
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          "p-3 rounded-xl bg-background/50 group-hover:scale-110 transition-transform duration-200",
          iconStyles[variant]
        )}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {count}
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-muted-foreground">{title}</h3>
        <div className="w-full bg-background/30 rounded-full h-1.5">
          <div 
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              variant === "pending" && "bg-gradient-primary w-3/4",
              variant === "overdue" && "bg-gradient-danger w-4/5",
              variant === "due-today" && "bg-gradient-warning w-2/3",
              variant === "approaching" && "bg-gradient-success w-1/2"
            )}
          />
        </div>
      </div>
    </div>
  );
}