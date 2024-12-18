import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import { Sidebar } from '@/components/sidebar';
import { Topbar } from '@/components/topbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import ContextComp from '@/context/ContextComp';
import CasperProvider from '@/context/CasperProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'RWY Protocol Dashboard',
  description: 'RWY Protocol Dashboard - Staking and Portfolio Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${montserrat.variable} ${robotoMono.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ContextComp>
            <CasperProvider>
              <div
                className={`Layout_file min-h-screen my-[5px] mx-[10px]`}
                id="root"
              >
                <Topbar />
                <div className="flex mt-[10px]">
                  <Sidebar />
                  <main
                    style={{
                      background:
                        'linear-gradient(180deg, #FFFFFF 0%, #F7F8F9 10.5%)',
                    }}
                    className="flex-1 ml-[10px] border-[#EFF3F4] rounded-[20px] min-h-[calc(100vh-4rem)]"
                  >
                    {children}
                  </main>
                </div>
              </div>
            </CasperProvider>
          </ContextComp>
          <Toaster theme={'dark'} />
        </ThemeProvider>
      </body>
    </html>
  );
}
