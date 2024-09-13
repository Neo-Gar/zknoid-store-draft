import type { Metadata } from 'next';
import 'reflect-metadata';
// import { TRPCReactProvider } from '@zknoid/sdk/trpc/react';
import './globals.css';
import { plexMono, museoSlab, plexSans } from './fonts';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NotificationsContainer from '@zknoid/sdk/components/shared/Notification/NotificationsContainer';
import "@zknoid/games/styles.css";
import "@zknoid/sdk/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://app.zknoid.io'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  title: 'ZkNoid gaming platform',
  description:
    'Revolutionizing competitive gaming using zero knowledge technologies',
  openGraph: {
    title: 'ZkNoid gaming platform',
    description:
      'Revolutionizing competitive gaming using zero knowledge technologies',
    url: 'https://app.zknoid.io',
    images: '/meta-preview.png',
    siteName: 'ZkNoid gaming platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${museoSlab.variable} ${plexMono.variable} ${plexSans.variable}`}
      >
        {children}
        <Analytics />
        <SpeedInsights />

        <NotificationsContainer />
      </body>
    </html>
  );
}
