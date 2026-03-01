import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

import './index.css';
import { QueryProvider } from './providers/query-client';
import { ThemeProvider } from './providers/theme-provider';

export const metadata: Metadata = {
  title: 'Sports Challenges',
  description: 'Platform to create or generate sports challenges',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <QueryProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
