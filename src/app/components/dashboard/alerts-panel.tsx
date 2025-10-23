import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertTriangle } from 'lucide-react';
import type { Alert } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';

interface AlertsPanelProps {
  alerts: Alert[];
}

export function AlertsPanel({ alerts }: AlertsPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-lg">Recent Alerts</CardTitle>
        <CardDescription>Critical events from your agents.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-4">
                <div className="bg-destructive/10 p-2 rounded-full">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">
                    {alert.agentName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {alert.message}
                  </p>
                   <p className="text-xs text-muted-foreground mt-1">
                    {formatDistanceToNow(new Date(alert.timestamp), { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))}
             {alerts.length === 0 && (
                <div className="text-center text-muted-foreground py-12">
                    <p>No alerts. All systems normal.</p>
                </div>
             )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
