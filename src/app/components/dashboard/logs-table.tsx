'use client';

import { useMemo, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import type { Agent, Log } from '@/lib/types';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { ProviderIcon } from '../icons';

interface LogsTableProps {
  logs: Log[];
  agents: Agent[];
}

const logLevelStyles: { [key in Log['level']]: string } = {
  INFO: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  WARN: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  ERROR: 'bg-red-500/20 text-red-300 border-red-500/30',
};

export function LogsTable({ logs, agents }: LogsTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAgentId, setSelectedAgentId] = useState('all');

  const filteredLogs = useMemo(() => {
    return logs
      .filter((log) => {
        if (selectedAgentId === 'all') return true;
        return log.agentId === selectedAgentId;
      })
      .filter((log) => {
        return log.message.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [logs, searchTerm, selectedAgentId]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search logs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
        />
        <Select value={selectedAgentId} onValueChange={setSelectedAgentId}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by agent" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Agents</SelectItem>
            {agents.map((agent) => (
              <SelectItem key={agent.id} value={agent.id}>
                {agent.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Timestamp</TableHead>
              <TableHead className="w-[150px]">Agent</TableHead>
              <TableHead className="w-[100px]">Level</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="text-muted-foreground">
                  {format(new Date(log.timestamp), 'PPpp')}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <ProviderIcon provider={log.provider} className="h-4 w-4" />
                    <span>{log.agentName}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn('font-mono', logLevelStyles[log.level])}>
                    {log.level}
                  </Badge>
                </TableCell>
                <TableCell>{log.message}</TableCell>
              </TableRow>
            ))}
             {filteredLogs.length === 0 && (
                <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                        No logs found.
                    </TableCell>
                </TableRow>
             )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
