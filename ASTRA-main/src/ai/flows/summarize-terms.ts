
import { aif } from '@/ai/genkit';
import { z } from 'zod';

export const summarizeTerms = aif(
    {
        name: 'Summarise Terms and Conditions',
        inputSchema: z.string(),
        outputSchema: z.string(),
    },
    async (terms) => {
        const prompt = `Summarize the following terms and conditions, focusing on what data the website will be leveraging:

        ${terms}`;

        const llmResponse = await generate({ prompt });

        return llmResponse.text();
    }
);
