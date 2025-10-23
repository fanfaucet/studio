import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { Agent } from '@/lib/types';
import { ProviderIcon } from '@/app/components/icons';
import { PerformanceChart } from './performance-chart';
import { TaskSummarizer } from './task-summarizer';
import { Circle } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

const statusStyles: { [key in Agent['status']]: string } = {
  active: 'text-green-500 animate-pulse-slow',
  idle: 'text-gray-500',
  error: 'text-destructive',
};

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-headline text-lg">{agent.name}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ProviderIcon provider={agent.provider} className="h-4 w-4" />
            <span>{agent.provider}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
          <Circle className={cn('h-3 w-3 fill-current', statusStyles[agent.status])} />
          <span className="capitalize">{agent.status}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <Separator />
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Recent Tasks</h4>
          <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-4">
            {agent.tasks.slice(0, 2).map((task, i) => (
              <li key={i}>{task}</li>
            ))}
             {agent.tasks.length > 2 && <li>...and {agent.tasks.length - 2} more.</li>}
          </ul>
         <TaskSummarizer agentId={agent.id} tasks={agent.tasks} />
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2">
         <div className="w-full">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Task Rate (Comp./Err.)</span>
                <span>Avg. Time: {agent.performance.averageProcessingTime}ms</span>
            </div>
          <PerformanceChart performance={agent.performance} />
        </div>
      </CardFooter>
    </Card>
  );
}
