
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
const sourceSerif4 = Source_Serif_4({ subsets: ['latin'], variable: '--font-source-serif-4', weight: ['400', '600', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Astra',
  description: 'Your AI Legal Assistant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} ${sourceSerif4.variable} font-sans`}>
        {children}
        <p>We have this conversational AI from Eleven Labs which is using Gemini 2.5 Flash and can speak in English, Hindi, Tamil, German, French, and Swedish as per your input.</p>
        <elevenlabs-convai agent-id="agent_2101k920sx33f68bwtwww65fktn0"></elevenlabs-convai>
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
        <Toaster />
      </body>
    </html>
  );
}
