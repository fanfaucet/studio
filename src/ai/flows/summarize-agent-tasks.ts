'use server';

/**
 * @fileOverview Summarizes the last completed tasks for an agent, highlighting key outcomes.
 *
 * - summarizeAgentTasks - A function that summarizes the last completed tasks for an agent.
 * - SummarizeAgentTasksInput - The input type for the summarizeAgentTasks function.
 * - SummarizeAgentTasksOutput - The return type for the summarizeAgentTasks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAgentTasksInputSchema = z.object({
  agentId: z.string().describe('The ID of the agent to summarize tasks for.'),
  tasks: z.array(z.string()).describe('A list of the last completed tasks for the agent.'),
});
export type SummarizeAgentTasksInput = z.infer<typeof SummarizeAgentTasksInputSchema>;

const SummarizeAgentTasksOutputSchema = z.object({
  summary: z.string().describe('A summary of the last completed tasks, highlighting key outcomes.'),
});
export type SummarizeAgentTasksOutput = z.infer<typeof SummarizeAgentTasksOutputSchema>;

export async function summarizeAgentTasks(input: SummarizeAgentTasksInput): Promise<SummarizeAgentTasksOutput> {
  return summarizeAgentTasksFlow(input);
}

const summarizeAgentTasksPrompt = ai.definePrompt({
  name: 'summarizeAgentTasksPrompt',
  input: {schema: SummarizeAgentTasksInputSchema},
  output: {schema: SummarizeAgentTasksOutputSchema},
  prompt: `You are an AI assistant that summarizes the last completed tasks for an agent. Highlight key outcomes in the summary.

Agent ID: {{{agentId}}}
Last Completed Tasks:
{{#each tasks}}
- {{{this}}}
{{/each}}
`,
});

const summarizeAgentTasksFlow = ai.defineFlow(
  {
    name: 'summarizeAgentTasksFlow',
    inputSchema: SummarizeAgentTasksInputSchema,
    outputSchema: SummarizeAgentTasksOutputSchema,
  },
  async input => {
    const {output} = await summarizeAgentTasksPrompt(input);
    return output!;
  }
);
