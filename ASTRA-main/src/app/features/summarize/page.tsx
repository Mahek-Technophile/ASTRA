
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { summarizeTerms } from '@/ai/flows/summarize-terms';

export default function SummarizeTermsPage() {
  const [terms, setTerms] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    setIsLoading(true);
    try {
      const result = await summarizeTerms(terms);
      setSummary(result);
    } catch (error) {
      console.error("Error summarizing terms:", error);
      setSummary("Failed to summarize the terms and conditions. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Summarise Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Paste the terms and conditions of a website below to get a simple summary of what data they will be leveraging.
          </p>
          <Textarea
            placeholder="Paste terms and conditions here..."
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            rows={15}
            className="mb-4"
          />
          <Button onClick={handleSummarize} disabled={isLoading || !terms.trim()}>
            {isLoading ? 'Summarizing...' : 'Summarize'}
          </Button>
          {summary && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Summary:</h3>
              <p>{summary}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
