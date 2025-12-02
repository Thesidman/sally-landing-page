'use server';

/**
 * @fileOverview A flow that summarizes past conversations with a lead for sales agents.
 *
 * - summarizeLeadConversation - A function that takes conversation history as input and returns a summarized context.
 * - SummarizeLeadConversationInput - The input type for the summarizeLeadConversation function.
 * - SummarizeLeadConversationOutput - The return type for the summarizeLeadConversation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeLeadConversationInputSchema = z.object({
  conversationHistory: z
    .string()
    .describe('The full conversation history with the lead.'),
});

export type SummarizeLeadConversationInput = z.infer<
  typeof SummarizeLeadConversationInputSchema
>;

const SummarizeLeadConversationOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the conversation, highlighting key topics, action items, and the leads current status.'
    ),
});

export type SummarizeLeadConversationOutput = z.infer<
  typeof SummarizeLeadConversationOutputSchema
>;

export async function summarizeLeadConversation(
  input: SummarizeLeadConversationInput
): Promise<SummarizeLeadConversationOutput> {
  return summarizeLeadConversationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeLeadConversationPrompt',
  input: {schema: SummarizeLeadConversationInputSchema},
  output: {schema: SummarizeLeadConversationOutputSchema},
  prompt: `You are an AI assistant helping sales agents quickly understand the context of their past conversations with leads.
  Your goal is to summarize the provided conversation history, extracting key topics, action items, and the lead\'s current status.
  The summary should be concise and informative, allowing the sales agent to quickly grasp the essence of the interaction.

  Conversation History:
  {{conversationHistory}}`,
});

const summarizeLeadConversationFlow = ai.defineFlow(
  {
    name: 'summarizeLeadConversationFlow',
    inputSchema: SummarizeLeadConversationInputSchema,
    outputSchema: SummarizeLeadConversationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
