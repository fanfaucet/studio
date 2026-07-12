import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { KpisAumFeed } from '@/lib/types';
import { CheckCircle2, CircleDollarSign, Link2, ShieldCheck, XCircle } from 'lucide-react';

interface KpisAumFeedProps {
  feed: KpisAumFeed;
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 2,
  style: 'currency',
  currency: 'USD',
});

function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

function formatBtc(value: number) {
  return `${new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value)} BTC`;
}

export function KpisAumFeed({ feed }: KpisAumFeedProps) {
  return (
    <div className="space-y-6">
      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <CardTitle className="font-headline text-xl">{feed.title}</CardTitle>
              <CardDescription>{feed.description}</CardDescription>
            </div>
            <Badge variant="secondary" className="w-fit">
              {feed.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CircleDollarSign className="h-4 w-4" /> User-provided entity value
              </div>
              <p className="mt-2 text-2xl font-bold">{formatCurrency(feed.combinedEntityValuationUsd)}</p>
              <p className="text-xs text-muted-foreground">Model input, not independently verified.</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4" /> Sovereign adjusted AUM
              </div>
              <p className="mt-2 text-2xl font-bold">{formatCurrency(feed.sovereignAdjustedAumUsd)}</p>
              <p className="text-xs text-muted-foreground">{formatBtc(feed.sovereignAdjustedAumBtc)} equivalent.</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="text-sm text-muted-foreground">KPIS score</div>
              <p className="mt-2 text-2xl font-bold">{feed.kpisScore.toFixed(1)}</p>
              <Progress value={feed.kpisScore} className="mt-3 h-2" />
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link2 className="h-4 w-4" /> CAL threshold
              </div>
              <p className="mt-2 text-2xl font-bold">{feed.calLatencyMs}ms</p>
              <p className="text-xs text-muted-foreground">Target: {feed.calThresholdMs}ms before live convergence.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-lg">OracleOS ledger modules</CardTitle>
          <CardDescription>{feed.ledgerNotice}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Module</TableHead>
                <TableHead>Metric</TableHead>
                <TableHead>Protocol alignment</TableHead>
                <TableHead>Result</TableHead>
                <TableHead className="text-right">Impact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feed.modules.map((module) => (
                <TableRow key={module.name}>
                  <TableCell className="font-medium">{module.name}</TableCell>
                  <TableCell>{module.metric}</TableCell>
                  <TableCell>{module.protocolAlignment}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {module.result === 'Completed' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-destructive" />
                      )}
                      <span>{module.result}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{module.impactScore}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
            Seed: <span className="font-mono">{feed.deterministicSeed}</span> · Chain:{' '}
            <span className="font-mono">{feed.oracleHash}</span> · Docket monitor: {feed.docketId}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
