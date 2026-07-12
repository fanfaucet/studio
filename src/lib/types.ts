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


export type KpisModuleResult = 'Completed' | 'Failed';

export interface KpisAumModule {
  name: string;
  metric: string;
  protocolAlignment: string;
  result: KpisModuleResult;
  impactScore: number;
}

export interface KpisAumFeed {
  title: string;
  description: string;
  status: string;
  combinedEntityValuationUsd: number;
  sovereignAdjustedAumUsd: number;
  sovereignAdjustedAumBtc: number;
  kpisScore: number;
  consensusWeight: number;
  calLatencyMs: number;
  calThresholdMs: number;
  deterministicSeed: string;
  oracleHash: string;
  docketId: string;
  ledgerNotice: string;
  modules: KpisAumModule[];
}
