/*
  DAY 2 - MORNING (09:00-12:00)
  PHASE 4: UI components - Main layout wrapper
  Developer 2 uploads this file
  Layout with header, footer, and page outlet
*/
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Footer } from './Footer';
import { Header } from './Header';

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
