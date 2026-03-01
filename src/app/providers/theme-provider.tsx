import { PropsWithChildren } from 'react';

import { MantineProvider } from '@mantine/core';

import { lightTheme } from '@/shared';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <MantineProvider theme={lightTheme}>{children}</MantineProvider>;
};
