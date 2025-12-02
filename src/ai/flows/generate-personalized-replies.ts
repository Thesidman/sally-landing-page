'use server';

/**
 * @fileOverview An AI agent that generates personalized replies to leads based on conversation history and sales context.
 *
 * - generatePersonalizedReply - A function that handles the generation of personalized replies.
 * - GeneratePersonalizedReplyInput - The input type for the generatePersonalizedReply function.
 * - GeneratePersonalizedReplyOutput - The return type for the generatePersonalizedReply function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedReplyInputSchema = z.object({
  conversationHistory: z
    .string()
    .describe('The complete history of the conversation with the lead.'),
  salesContext: z.string().describe('The relevant sales context and goals.'),
  leadDetails: z.string().describe('Details about the lead, such as their name and company.'),
});

export type GeneratePersonalizedReplyInput = z.infer<
  typeof GeneratePersonalizedReplyInputSchema
>;

const GeneratePersonalizedReplyOutputSchema = z.object({
  reply: z
    .string()
    .describe('The personalized reply generated for the lead.'),
});

export type GeneratePersonalizedReplyOutput = z.infer<
  typeof GeneratePersonalizedReplyOutputSchema
>;

export async function generatePersonalizedReply(
  input: GeneratePersonalizedReplyInput
): Promise<GeneratePersonalizedReplyOutput> {
  return generatePersonalizedReplyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedReplyPrompt',
  input: {schema: GeneratePersonalizedReplyInputSchema},
  output: {schema: GeneratePersonalizedReplyOutputSchema},
  prompt: `You are an AI sales assistant named SALLY, designed to generate personalized replies to leads in order to improve reply rates and lead engagement.

  Consider the following conversation history:
  {{conversationHistory}}

  Taking into account the following sales context:
  {{salesContext}}

  And the following details about the lead:
  {{leadDetails}}

  Generate a personalized and engaging reply that encourages the lead to continue the conversation and move closer to a demo or a deal.
  The reply should be concise and relevant to the lead's interests and needs. Focus on clarity over marketing fluff.`,
});

const generatePersonalizedReplyFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedReplyFlow',
    inputSchema: GeneratePersonalizedReplyInputSchema,
    outputSchema: GeneratePersonalizedReplyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
