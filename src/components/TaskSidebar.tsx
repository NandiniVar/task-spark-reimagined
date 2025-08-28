import { 
  CheckSquare, 
  Inbox, 
  BarChart3, 
  LayoutDashboard, 
  CreditCard, 
  FileText, 
  Target, 
  Users, 
  Heart, 
  MessageSquare, 
  Ticket,
  Eye,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: CheckSquare, label: "My Task", active: true },
  { icon: Inbox, label: "My Inbox" },
  { icon: BarChart3, label: "Insight360" },
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: CreditCard, label: "Payment" },
  { icon: FileText, label: "Contract" },
  { icon: Target, label: "Opportunity" },
  { icon: Users, label: "Customers" },
  { icon: Heart, label: "Health" },
  { icon: MessageSquare, label: "NPS" },
  { icon: Ticket, label: "Tickets" },
  { icon: Eye, label: "Views" },
];

export function TaskSidebar() {
  return (
    <div className="w-64 bg-surface border-r border-border h-screen flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">DEXKOR</h1>
            <p className="text-xs text-muted-foreground">AccountCare</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "sidebar-item w-full justify-between group",
              item.active && "bg-primary/10 text-primary border-r-2 border-primary"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </div>
            {item.active && (
              <ChevronRight className="h-4 w-4 text-primary" />
            )}
          </button>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground space-y-2">
          <div>Next</div>
          <div>Today's Work</div>
          <div>QC</div>
        </div>
      </div>
    </div>
  );
}