export type AgentStatus = 'active' | 'idle' | 'error';

export type AgentProvider = 'AnnabanAI' | 'SparkAI' | 'SparkOS' | 'AetherOS' | 'Gemini' | 'Claude' | 'Perplexity' | 'ChatGPT';

export interface Agent {
  id: string;
  name: string;
  provider: AgentProvider;
  status: AgentStatus;
  performance: {
    taskCompletionRate: number; // 0-100
    errorRate: number; // 0-100
    averageProcessingTime: number; // in ms
  };
  tasks: string[];
}

export type LogLevel = 'INFO' | 'WARN' | 'ERROR';

export interface Log {
  id: string;
  timestamp: string;
  agentId: string;
  agentName: string;
  provider: AgentProvider;
  level: LogLevel;
  message: string;
}

export interface Alert {
  id: string;
  timestamp: string;
  agentId: string;
  agentName: string;
  message: string;
}
