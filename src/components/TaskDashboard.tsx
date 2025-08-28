import { useState } from "react";
import { TaskSidebar } from "./TaskSidebar";
import { TaskMetricCard } from "./TaskMetricCard";
import { TaskFilters } from "./TaskFilters";
import { TaskTable } from "./TaskTable";
import { TaskDetailPanel } from "./TaskDetailPanel";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  AlertTriangle, 
  Calendar, 
  TrendingUp, 
  Plus,
  Bell,
  Settings,
  Search,
  User
} from "lucide-react";

export function TaskDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <TaskSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-surface border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Task Management
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage and track all your tasks efficiently
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6 space-y-8">
          {/* Metrics Cards */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TaskMetricCard
                title="Pending Tasks"
                count={60}
                icon={Clock}
                variant="pending"
                className="cursor-pointer hover:shadow-xl"
                onClick={() => setIsModalOpen(true)}
              />
              <TaskMetricCard
                title="Overdue Tasks"
                count={56}
                icon={AlertTriangle}
                variant="overdue"
                className="cursor-pointer hover:shadow-xl"
              />
              <TaskMetricCard
                title="Due For Today"
                count={12}
                icon={Calendar}
                variant="due-today"
                className="cursor-pointer hover:shadow-xl"
                onClick={() => setIsModalOpen(true)}
              />
              <TaskMetricCard
                title="Approaching Breach Tasks"
                count={8}
                icon={TrendingUp}
                variant="approaching"
                className="cursor-pointer hover:shadow-xl"
              />
            </div>
          </section>

          {/* Quick Actions */}
          <section className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">All Tasks</h2>
              <p className="text-sm text-muted-foreground">
                View and manage all your tasks in one place
              </p>
            </div>
            <Button variant="premium" className="shadow-lg">
              <Plus className="h-4 w-4" />
              Create Task
            </Button>
          </section>

          {/* Filters */}
          <TaskFilters />

          {/* Task Table */}
          <TaskTable onTaskClick={() => setIsModalOpen(true)} />
        </main>
      </div>

      {/* Task Detail Panel */}
      <TaskDetailPanel 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}