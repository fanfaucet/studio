'use client';

import { useState } from 'react';
import { summarizeAgentTasks } from '@/ai/flows/summarize-agent-tasks';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles } from 'lucide-react';
import { CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface TaskSummarizerProps {
  agentId: string;
  tasks: string[];
}

export function TaskSummarizer({ agentId, tasks }: TaskSummarizerProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary('');
    try {
      if (tasks.length === 0) {
        setSummary('No tasks to summarize.');
        return;
      }
      const result = await summarizeAgentTasks({ agentId, tasks });
      setSummary(result.summary);
    } catch (error) {
      console.error('Failed to generate summary:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate task summary.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <Button variant="outline" size="sm" onClick={handleSummarize} disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="mr-2 h-4 w-4" />
        )}
        Summarize Tasks
      </Button>
      {summary && (
        <CardDescription className="mt-3 text-sm italic border-l-2 pl-3">
            {summary}
        </CardDescription>
      )}
    </div>
  );
}
