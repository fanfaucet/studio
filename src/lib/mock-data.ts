import { add, sub } from 'date-fns';
import type { Agent, Log, Alert } from './types';

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
