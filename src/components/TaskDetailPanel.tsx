import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Maximize2, User, Calendar, Flag, AlertTriangle, Eye, Edit, Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskDetailPanelProps {
  open: boolean;
  onClose: () => void;
  task?: {
    id: string;
    customerName: string;
    customerCode: string;
    taskId: string;
    title: string;
    status: string;
    priority: string;
    owner: string;
    createdDate: string;
  } | null;
}

export function TaskDetailPanel({ open, onClose, task }: TaskDetailPanelProps) {
  const [activeTab, setActiveTab] = useState("description");

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div className={cn(
        "fixed right-0 top-0 h-full w-96 bg-surface border-l border-border shadow-2xl z-50 flex flex-col",
        "animate-slide-in-right"
      )}>
        {/* Header */}
        <div className="bg-gradient-primary text-primary-foreground p-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-primary-foreground/20" />
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-primary-foreground/10" />
          </div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce-in">
                  <span className="text-lg font-bold">A</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">AVF - TS-6465</h2>
                  <p className="text-primary-foreground/80 text-sm">Test task</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary-foreground hover:bg-primary-foreground/20 rounded-lg"
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary-foreground hover:bg-primary-foreground/20 rounded-lg" 
                  onClick={onClose}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-primary-foreground/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-primary-foreground/70 mb-1">
                  <Calendar className="h-3 w-3" />
                  <span>Created</span>
                </div>
                <div className="font-semibold">25 Jul 2023</div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-primary-foreground/70 mb-1">
                  <AlertTriangle className="h-3 w-3" />
                  <span>Status</span>
                </div>
                <Badge className="bg-danger/20 text-danger-foreground border-danger/30 text-xs">
                  Cancelled
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {/* Status Cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all duration-200 group">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <Flag className="h-4 w-4 group-hover:text-primary transition-colors" />
                Priority
              </div>
              <Badge className="bg-warning/10 text-warning border-warning/20">Medium</Badge>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all duration-200 group">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <User className="h-4 w-4 group-hover:text-primary transition-colors" />
                Owner
              </div>
              <div className="font-semibold text-foreground">AVF</div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-surface-alt border border-border rounded-xl p-1 grid grid-cols-4 mb-6">
              <TabsTrigger 
                value="description" 
                className="rounded-lg text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Description
              </TabsTrigger>
              <TabsTrigger 
                value="notes" 
                className="rounded-lg text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Notes
              </TabsTrigger>
              <TabsTrigger 
                value="events" 
                className="rounded-lg text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Events
              </TabsTrigger>
              <TabsTrigger 
                value="tickets" 
                className="rounded-lg text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Tickets
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This is a test task for testing purposes.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground">No notes available for this task.</p>
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground">No events recorded for this task.</p>
              </div>
            </TabsContent>

            <TabsContent value="tickets" className="space-y-4">
              <div className="space-y-3">
                <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all duration-200 group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        Addsuite - UAT feedbacks
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">#CX291329</p>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className="bg-pending/10 text-pending border-pending/20 text-xs">In progress</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Priority:</span>
                      <Badge className="bg-warning/10 text-warning border-warning/20 text-xs">Medium</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Created:</span>
                      <span>24/07/2023, 17:43:17</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">CC:</span>
                      <span className="text-primary text-xs">testengdev@test.com</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all duration-200 group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        Test ticket
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">#CX291329</p>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className="bg-approaching/10 text-approaching border-approaching/20 text-xs">Upcoming</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Priority:</span>
                      <Badge className="bg-warning/10 text-warning border-warning/20 text-xs">Medium</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Created:</span>
                      <span>24/07/2023, 16:30:17</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">CC:</span>
                      <span className="text-primary text-xs">testengdev@test.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  Link Ticket
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Create Ticket
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-border p-6 bg-surface/50">
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1 hover:border-danger/50 hover:text-danger transition-all duration-200"
              onClick={onClose}
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button 
              variant="success" 
              className="flex-1 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Complete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}