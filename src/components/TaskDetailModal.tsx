import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Maximize2, User, Calendar, Flag, AlertTriangle, Eye, Edit } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskDetailModalProps {
  open: boolean;
  onClose: () => void;
}

export function TaskDetailModal({ open, onClose }: TaskDetailModalProps) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-surface border-border">
        {/* Header */}
        <DialogHeader className="bg-gradient-primary text-primary-foreground p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">A</span>
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-primary-foreground">
                  AVF - TS-6465
                </DialogTitle>
                <p className="text-primary-foreground/80 text-sm mt-1">Test task</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Maximize2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Task Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <Calendar className="h-4 w-4" />
                Created Date
              </div>
              <div className="font-semibold">25 Jul 2023</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <AlertTriangle className="h-4 w-4" />
                Status
              </div>
              <Badge className="bg-danger/10 text-danger border-danger/20">Cancelled</Badge>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <Flag className="h-4 w-4" />
                Priority
              </div>
              <Badge className="bg-warning/10 text-warning border-warning/20">Medium</Badge>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <User className="h-4 w-4" />
                Owner
              </div>
              <div className="font-semibold">AVF</div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-surface border border-border rounded-lg p-1">
              <TabsTrigger value="description" className="flex-1">Description</TabsTrigger>
              <TabsTrigger value="notes" className="flex-1">Notes</TabsTrigger>
              <TabsTrigger value="events" className="flex-1">Events</TabsTrigger>
              <TabsTrigger value="tickets" className="flex-1">Tickets</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground">This is a test task for testing purposes.</p>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="mt-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground">No notes available for this task.</p>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground">No events recorded for this task.</p>
              </div>
            </TabsContent>

            <TabsContent value="tickets" className="mt-6 space-y-4">
              <div className="space-y-3">
                <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Addsuite - UAT feedbacks</h4>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                        Manage
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className="ml-2 bg-pending/10 text-pending border-pending/20">In progress</Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Priority:</span>
                      <Badge className="ml-2 bg-warning/10 text-warning border-warning/20">Medium</Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Created at:</span>
                      <span className="ml-2">24/07/2023, 17:43:17</span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="text-muted-foreground">CC:</span>
                    <span className="ml-2">testengdev@test.com</span>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Test ticket</h4>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                        Manage
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className="ml-2 bg-approaching/10 text-approaching border-approaching/20">Upcoming</Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Priority:</span>
                      <Badge className="ml-2 bg-warning/10 text-warning border-warning/20">Medium</Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Created at:</span>
                      <span className="ml-2">24/07/2023, 16:30:17</span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="text-muted-foreground">CC:</span>
                    <span className="ml-2">testengdev@test.com</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                  Link Ticket
                </Button>
                <Button variant="outline" size="sm" className="ml-2">
                  Create Ticket
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="success">
              Complete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}