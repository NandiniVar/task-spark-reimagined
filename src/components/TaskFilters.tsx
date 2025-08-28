import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FilterTab {
  id: string;
  label: string;
  count?: number;
  active?: boolean;
}

const filterTabs: FilterTab[] = [
  { id: "all", label: "All Tasks", count: 156, active: true },
  { id: "completed", label: "Completed Tasks", count: 7 },
  { id: "pending", label: "Pending Tasks", count: 60 },
  { id: "overdue", label: "Overdue Tasks", count: 56 },
];

export function TaskFilters() {
  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search tasks, customers, or task IDs..."
            className="pl-10 bg-surface border-border focus:border-primary/50 focus:ring-primary/20"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 bg-surface/50 p-1 rounded-lg border border-border">
        {filterTabs.map((tab) => (
          <Button
            key={tab.id}
            variant={tab.active ? "default" : "ghost"}
            size="sm"
            className={cn(
              "flex-1 gap-2 rounded-md font-medium",
              tab.active 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground hover:bg-surface"
            )}
          >
            <span>{tab.label}</span>
            {tab.count && (
              <Badge 
                className={cn(
                  "ml-1 text-xs px-1.5 py-0.5",
                  tab.active 
                    ? "bg-primary-foreground/20 text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                )}
              >
                {tab.count}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Sort Options */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>Sort by:</span>
          <Button variant="ghost" size="sm" className="h-auto p-0 text-primary font-medium">
            Created Date ↓
          </Button>
        </div>
        <div>
          Showing 156 tasks
        </div>
      </div>
    </div>
  );
}