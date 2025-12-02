import { config } from 'dotenv';
config();

import '@/ai/flows/prioritize-leads-by-likelihood-to-convert.ts';
import '@/ai/flows/summarize-lead-conversation.ts';
import '@/ai/flows/generate-personalized-replies.ts';