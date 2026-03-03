import { PropsWithChildren } from 'react';

import { Paper } from '@mantine/core';

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Paper radius="md" p="lg" withBorder>
      {children}
    </Paper>
  );
};
