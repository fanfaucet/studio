import { Bot, BrainCircuit, Cpu } from 'lucide-react';
import type { AgentProvider } from '@/lib/types';

const GeminiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gem">
        <path d="M6 3h12l4 6-10 13L2 9z"/>
        <path d="M12 22V9"/>
        <path d="m3.5 8.5 17 0"/>
        <path d="M2 9h20"/>
    </svg>
);


export const ProviderIcon = ({ provider, className }: { provider: AgentProvider, className?: string }) => {
  const iconProps = { className };
  switch (provider) {
    case 'ChatGPT':
      return <Bot {...iconProps} />;
    case 'Gemini':
      return <GeminiIcon {...iconProps} />;
    case 'Claude':
    case 'Perplexity':
      return <BrainCircuit {...iconProps} />;
    case 'AnnabanAI':
    case 'SparkAI':
    case 'SparkOS':
    case 'AetherOS':
    default:
      return <Cpu {...iconProps} />;
  }
};
