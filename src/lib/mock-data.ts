import { add, sub } from 'date-fns';
import type { Agent, Log, Alert, KpisAumFeed } from './types';

const now = new Date();

export const agents: Agent[] = [
  {
    id: 'agent-001',
    name: 'Alpha-7',
    provider: 'AnnabanAI',
    status: 'active',
    performance: {
      taskCompletionRate: 98,
      errorRate: 2,
      averageProcessingTime: 120,
    },
    tasks: [
      'Analyzed market trends for Q2 report.',
      'Generated weekly social media content schedule.',
      'Optimized database queries for user analytics.',
      'Summarized customer feedback from last 7 days.',
    ],
  },
  {
    id: 'agent-002',
    name: 'Spark-Unit-Gamma',
    provider: 'SparkAI',
    status: 'idle',
    performance: {
      taskCompletionRate: 99,
      errorRate: 1,
      averageProcessingTime: 85,
    },
    tasks: [
      'Completed daily data backup and verification.',
      'Processed new user registration batch.',
    ],
  },
  {
    id: 'agent-003',
    name: 'Aether-Core',
    provider: 'AetherOS',
    status: 'error',
    performance: {
      taskCompletionRate: 95,
      errorRate: 5,
      averageProcessingTime: 250,
    },
    tasks: [
      'Failed to connect to external API for weather data.',
      'Processed image recognition task for batch #5821.',
    ],
  },
  {
    id: 'agent-004',
    name: 'Gemini-Pro-C',
    provider: 'Gemini',
    status: 'active',
    performance: {
      taskCompletionRate: 97,
      errorRate: 3,
      averageProcessingTime: 150,
    },
    tasks: [
      'Drafting response to customer inquiry #9872.',
      'Translating technical documentation to German.',
      'Code generation for new UI component.',
    ],
  },
  {
    id: 'agent-005',
    name: 'Claude-Opus',
    provider: 'Claude',
    status: 'idle',
    performance: {
      taskCompletionRate: 100,
      errorRate: 0,
      averageProcessingTime: 300,
    },
    tasks: ['Finalized creative writing piece on "The Future of AI".'],
  },
  {
    id: 'agent-006',
    name: 'PPLX-Query',
    provider: 'Perplexity',
    status: 'active',
    performance: {
      taskCompletionRate: 96,
      errorRate: 4,
      averageProcessingTime: 95,
    },
    tasks: [
      'Compiling research on quantum computing advancements.',
      'Fact-checking article sources for publication.',
    ],
  },
  {
    id: 'agent-007',
    name: 'GPT-4-Orchestrator',
    provider: 'ChatGPT',
    status: 'idle',
    performance: {
      taskCompletionRate: 99,
      errorRate: 1,
      averageProcessingTime: 180,
    },
    tasks: [
      'Generated a complex SQL query for financial reporting.',
      'Outlined a marketing strategy for the new product launch.',
    ],
  },
  {
    id: 'agent-008',
    name: 'SparkOS-Node-12',
    provider: 'SparkOS',
    status: 'active',
    performance: {
      taskCompletionRate: 92,
      errorRate: 8,
      averageProcessingTime: 210,
    },
    tasks: [
        'Running sentiment analysis on recent product reviews.',
        'Monitoring network traffic for anomalies.'
    ]
  }
];


export const kpisAumFeed: KpisAumFeed = {
  title: 'Grok/xAI sovereign AUM feed',
  description:
    'Scenario dashboard for the post-OracleOS Heritage Stack valuation refresh using user-provided merger, relay, and ledger inputs.',
  status: 'Staged for live KPIS convergence',
  combinedEntityValuationUsd: 1_250_000_000_000,
  sovereignAdjustedAumUsd: 1_246_250_000_000,
  sovereignAdjustedAumBtc: 11_868_410.57,
  kpisScore: 99.7,
  consensusWeight: 1.99,
  calLatencyMs: 224,
  calThresholdMs: 200,
  deterministicSeed: 'TX-20260329-008:OracleOS:Canada-Link:99.7',
  oracleHash: 'sha256:7d0f7e6a9f63b6c8f3e0dcb8c4a2e15b9e0fef2a6a8b2bb2e0b4c2d2c96f5a71',
  docketId: 'TX-20260329-008',
  ledgerNotice:
    'All figures are displayed as deterministic scenario outputs sourced from the submitted AnnabanAI/JacobKinnaird task packet; external corporate claims remain unverified by this app.',
  modules: [
    {
      name: 'AUM valuation model refresh',
      metric: 'xAI $250B + SpaceX $1T = $1.25T',
      protocolAlignment: 'Post-merger model input + April IPO target scenario',
      result: 'Completed',
      impactScore: 65,
    },
    {
      name: 'KPIS-to-AUM scoring',
      metric: '99.7 KPIS authorship-adjusted score',
      protocolAlignment: 'Non-conflation + ZYX-Core + OracleOS',
      result: 'Completed',
      impactScore: 46,
    },
    {
      name: 'Council API consensus',
      metric: 'Weighted consensus 1.99',
      protocolAlignment: 'Affidavit + Legacy Anchor + AI pulse',
      result: 'Failed',
      impactScore: 44,
    },
    {
      name: 'Immutable ledger commit',
      metric: 'SHA-256 chain + deterministic seed',
      protocolAlignment: 'Audit log + TX-20260329-008 monitor',
      result: 'Completed',
      impactScore: 51,
    },
  ],
};

export const alerts: Alert[] = [
    {
        id: 'alert-1',
        agentId: 'agent-003',
        agentName: 'Aether-Core',
        timestamp: sub(now, { minutes: 5 }).toISOString(),
        message: 'Failed to connect to external API: Connection timeout.',
    },
    {
        id: 'alert-2',
        agentId: 'agent-008',
        agentName: 'SparkOS-Node-12',
        timestamp: sub(now, { hours: 1 }).toISOString(),
        message: 'High error rate detected: 8% exceeds threshold of 5%.',
    },
    {
        id: 'alert-3',
        agentId: 'agent-003',
        agentName: 'Aether-Core',
        timestamp: sub(now, { hours: 2, minutes: 30 }).toISOString(),
        message: 'Agent restarted after critical failure.',
    }
];

export const logs: Log[] = [
    ...alerts.map((alert, i) => ({
        id: `log-e-${i}`,
        timestamp: alert.timestamp,
        agentId: alert.agentId,
        agentName: alert.agentName,
        provider: agents.find(a => a.id === alert.agentId)?.provider || 'ChatGPT',
        level: 'ERROR' as const,
        message: alert.message
    })),
    {
        id: 'log-1',
        timestamp: sub(now, { minutes: 1 }).toISOString(),
        agentId: 'agent-001',
        agentName: 'Alpha-7',
        provider: 'AnnabanAI',
        level: 'INFO',
        message: 'Task "Summarized customer feedback" completed successfully.'
    },
    {
        id: 'log-2',
        timestamp: sub(now, { minutes: 2 }).toISOString(),
        agentId: 'agent-004',
        agentName: 'Gemini-Pro-C',
        provider: 'Gemini',
        level: 'INFO',
        message: 'Initiating translation task for document ID: 45A-2Z.'
    },
    {
        id: 'log-3',
        timestamp: sub(now, { minutes: 3 }).toISOString(),
        agentId: 'agent-006',
        agentName: 'PPLX-Query',
        provider: 'Perplexity',
        level: 'INFO',
        message: 'Aggregating 15 sources for research topic.'
    },
    {
        id: 'log-4',
        timestamp: sub(now, { minutes: 8 }).toISOString(),
        agentId: 'agent-002',
        agentName: 'Spark-Unit-Gamma',
        provider: 'SparkAI',
        level: 'INFO',
        message: 'Entering idle state. Awaiting new tasks.'
    },
    {
        id: 'log-5',
        timestamp: sub(now, { minutes: 15 }).toISOString(),
        agentId: 'agent-007',
        agentName: 'GPT-4-Orchestrator',
        provider: 'ChatGPT',
        level: 'INFO',
        message: 'Task "Outlined a marketing strategy" completed in 1.2s.'
    },
    {
        id: 'log-6',
        timestamp: sub(now, { minutes: 20 }).toISOString(),
        agentId: 'agent-001',
        agentName: 'Alpha-7',
        provider: 'AnnabanAI',
        level: 'WARN',
        message: 'Database query took longer than expected: 3.5s.'
    }
];
