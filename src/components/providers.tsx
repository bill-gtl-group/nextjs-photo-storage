'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/contexts/AuthContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <AuthProvider>
        <Toaster position="top-center" />
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}
