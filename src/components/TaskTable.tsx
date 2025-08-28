import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  customerName: string;
  customerCode: string;
  taskId: string;
  title: string;
  status: "Pending" | "Complete" | "Cancelled";
  priority: "Medium" | "High" | "Low";
  owner: string;
  createdDate: string;
}

const mockTasks: Task[] = [
  {
    id: "1",
    customerName: "AVF",
    customerCode: "YBN-264",
    taskId: "TS-6465",
    title: "Test task",
    status: "Cancelled",
    priority: "Medium",
    owner: "AVF",
    createdDate: "25 Jul 2023"
  },
  {
    id: "2",
    customerName: "AVF",
    customerCode: "YBN-264",
    taskId: "TS-6468",
    title: "Test task for account data",
    status: "Complete",
    priority: "Medium",
    owner: "AVF",
    createdDate: "25 Jul 2023"
  },
  {
    id: "3",
    customerName: "AVF",
    customerCode: "YBN-264",
    taskId: "TS-6472",
    title: "Hello",
    status: "Complete",
    priority: "Medium",
    owner: "AVF",
    createdDate: "25 Jul 2023"
  },
  {
    id: "4",
    customerName: "AVF",
    customerCode: "YBN-264",
    taskId: "TS-6476",
    title: "GhanaTraining",
    status: "Pending",
    priority: "Medium",
    owner: "AVF",
    createdDate: "25 Jul 2023"
  },
  {
    id: "5",
    customerName: "AVF",
    customerCode: "YBN-264",
    taskId: "TS-6489",
    title: "as user",
    status: "Pending",
    priority: "Medium",
    owner: "AVF",
    createdDate: "25 Jul 2023"
  },
  {
    id: "6",
    customerName: "testinnovs",
    customerCode: "testinnovs",
    taskId: "TS-6502",
    title: "Grace Health Alert Innovation Action Required",
    status: "Pending",
    priority: "Medium",
    owner: "testinnovs",
    createdDate: "25 Jul 2023"
  }
];

function getStatusBadge(status: Task["status"]) {
  const variants = {
    Pending: "bg-pending/10 text-pending border-pending/20",
    Complete: "bg-completed/10 text-completed border-completed/20",
    Cancelled: "bg-danger/10 text-danger border-danger/20"
  };
  
  return (
    <Badge className={cn("task-status-badge", variants[status])}>
      {status}
    </Badge>
  );
}

function getPriorityBadge(priority: Task["priority"]) {
  const variants = {
    High: "bg-danger/10 text-danger border-danger/20",
    Medium: "bg-warning/10 text-warning border-warning/20",
    Low: "bg-success/10 text-success border-success/20"
  };
  
  return (
    <Badge className={cn("task-status-badge", variants[priority])}>
      {priority}
    </Badge>
  );
}

export function TaskTable() {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-surface/50 border-b border-border">
            <tr>
              <th className="w-12 p-4">
                <Checkbox />
              </th>
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Customer Name</th>
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Customer Code</th>
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Task ID</th>
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Title</th>
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Status</th>
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Priority</th>
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Owner</th>
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Created Date</th>
            </tr>
          </thead>
          <tbody>
            {mockTasks.map((task) => (
              <tr key={task.id} className="data-table-row">
                <td className="p-4">
                  <Checkbox />
                </td>
                <td className="p-4 font-medium">{task.customerName}</td>
                <td className="p-4 text-muted-foreground">{task.customerCode}</td>
                <td className="p-4 text-primary font-medium">{task.taskId}</td>
                <td className="p-4">{task.title}</td>
                <td className="p-4">{getStatusBadge(task.status)}</td>
                <td className="p-4">{getPriorityBadge(task.priority)}</td>
                <td className="p-4 text-muted-foreground">{task.owner}</td>
                <td className="p-4 text-muted-foreground text-sm">{task.createdDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}