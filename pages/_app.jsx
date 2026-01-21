import '@/styles/globals.css';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAuthPage = router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/forgot-password';

  if (isAuthPage) {
    return (
      <>
        <Head>
          <title>Falcon - Faculty Analytics & Learning Console</title>
          <meta name="description" content="AI-powered analytics dashboard for competitive exam coaching institutes" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Falcon - Faculty Analytics & Learning Console</title>
        <meta name="description" content="AI-powered analytics dashboard for competitive exam coaching institutes" />
      </Head>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-64">
          <TopBar />
          <main className="p-8 pt-24">
            <div className="max-w-7xl mx-auto">
              <Component {...pageProps} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
