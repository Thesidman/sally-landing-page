'use server';

/**
 * @fileOverview A flow to prioritize leads based on their likelihood to convert.
 *
 * - prioritizeLeadsByLikelihoodToConvert - A function that prioritizes leads based on their likelihood to convert.
 * - PrioritizeLeadsInput - The input type for the prioritizeLeadsByLikelihoodToConvert function.
 * - PrioritizeLeadsOutput - The return type for the prioritizeLeadsByLikelihoodToConvert function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LeadSchema = z.object({
  leadName: z.string().describe('The name of the lead.'),
  conversationHistory: z.string().describe('The recent conversation history with the lead.'),
  leadDetails: z.string().describe('Additional details about the lead, like their role, company, etc.'),
});

const PrioritizeLeadsInputSchema = z.object({
  leads: z.array(LeadSchema).describe('An array of leads to prioritize.'),
});
export type PrioritizeLeadsInput = z.infer<typeof PrioritizeLeadsInputSchema>;

const PrioritizedLeadSchema = LeadSchema.extend({
  likelihoodToConvert: z
    .number()
    .describe('The likelihood of the lead converting, on a scale of 0 to 1.'),
  reasoning: z.string().describe('The reasoning behind the likelihood score.'),
});

const PrioritizeLeadsOutputSchema = z.object({
  prioritizedLeads: z.array(PrioritizedLeadSchema).describe('The leads, prioritized by likelihood to convert.'),
});
export type PrioritizeLeadsOutput = z.infer<typeof PrioritizeLeadsOutputSchema>;

export async function prioritizeLeadsByLikelihoodToConvert(
  input: PrioritizeLeadsInput
): Promise<PrioritizeLeadsOutput> {
  return prioritizeLeadsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizeLeadsPrompt',
  input: {schema: PrioritizeLeadsInputSchema},
  output: {schema: PrioritizeLeadsOutputSchema},
  prompt: `You are an AI assistant helping a sales team prioritize leads based on their likelihood to convert into customers.

You will receive a list of leads, each with their name, recent conversation history, and details. For each lead, you must evaluate their likelihood to convert on a scale of 0 to 1 (where 0 is not likely at all, and 1 is extremely likely).

Provide a brief reasoning for each score.

Here are the leads:

{{#each leads}}
Lead Name: {{this.leadName}}
Conversation History: {{this.conversationHistory}}
Lead Details: {{this.leadDetails}}
{{/each}}`,
});

const prioritizeLeadsFlow = ai.defineFlow(
  {
    name: 'prioritizeLeadsFlow',
    inputSchema: PrioritizeLeadsInputSchema,
    outputSchema: PrioritizeLeadsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
