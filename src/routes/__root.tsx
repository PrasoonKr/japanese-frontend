import React from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { MantineProvider, Box } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClientProvider } from '@tanstack/react-query';
import { theme } from '../theme';
import { queryClient } from '../lib/queryClient';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => (
    <Box py={80} ta="center">
      <Header />
      <Box my={60}>
        <h2 style={{ color: '#202C38' }}>Page Not Found (404)</h2>
        <p style={{ color: '#616B77' }}>The page you are looking for does not exist or has moved.</p>
        <a href="/" style={{ color: '#B74736', fontWeight: 600, textDecoration: 'none' }}>
          ← Return to Homepage
        </a>
      </Box>
      <Footer />
    </Box>
  ),
});

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications position="top-right" zIndex={1000} />
        <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8F2EB' }}>
          <Header />
          <Box component="main" style={{ flex: 1 }}>
            <Outlet />
          </Box>
          <Footer />
        </Box>
      </MantineProvider>
    </QueryClientProvider>
  );
}
