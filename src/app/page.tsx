import {
  Bell,
  Bot,
  CircleUserRound,
  LayoutDashboard,
  Settings,
  Sheet,
} from 'lucide-react';
import Image from 'next/image';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { agents, alerts, logs } from '@/lib/mock-data';
import { AgentCard } from './components/dashboard/agent-card';
import { AlertsPanel } from './components/dashboard/alerts-panel';
import { LogsTable } from './components/dashboard/logs-table';

export default function Home() {
  const userAvatar = getPlaceholderImage('user-avatar');

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <Bot className="w-8 h-8 text-primary" />
            <h1 className="font-headline text-xl font-semibold">Agent Central</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" isActive>
                <LayoutDashboard />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#">
                <Bell />
                Alerts
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#">
                <Settings />
                Settings
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          {userAvatar && (
            <div className="flex items-center gap-3 p-2">
              <Image
                src={userAvatar.imageUrl}
                alt={userAvatar.description}
                data-ai-hint={userAvatar.imageHint}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Admin User</span>
                <span className="text-xs text-muted-foreground">
                  admin@agentcentral.io
                </span>
              </div>
            </div>
          )}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <main className="p-4 sm:p-6 lg:p-8">
          <Tabs defaultValue="dashboard">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="font-headline text-2xl font-bold tracking-tight">
                        Dashboard
                    </h1>
                    <p className="text-muted-foreground">
                        Monitor and manage your fleet of AI agents.
                    </p>
                </div>
                <TabsList>
                    <TabsTrigger value="dashboard">Overview</TabsTrigger>
                    <TabsTrigger value="logs">Logs</TabsTrigger>
                </TabsList>
            </div>
            
            <TabsContent value="dashboard">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Agents Section */}
                <div className="xl:col-span-2">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {agents.map((agent) => (
                        <AgentCard key={agent.id} agent={agent} />
                    ))}
                   </div>
                </div>

                {/* Alerts Section */}
                <div className="xl:col-span-1">
                  <AlertsPanel alerts={alerts} />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="logs">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Agent Logs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <LogsTable logs={logs} agents={agents} />
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
