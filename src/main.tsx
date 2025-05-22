import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './shared/styles/global.css';
import './shared/styles/font.css';
import './shared/styles/reset.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './shared/network/queryClient';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
