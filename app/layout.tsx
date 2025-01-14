import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import { Sidebar } from '@/components/sidebar';
import { Topbar } from '@/components/topbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import ContextComp from '@/context/ContextComp';
import CasperProvider from '@/context/CasperProvider';
import { MobileMenu } from '@/components/MobileMenu';

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
          <div
            className="Layout_file min-h-screen overflow-hidden my-[5px]"
            id="root"
          >
            <ContextComp>
              <CasperProvider>
                <Topbar />
              </CasperProvider>
            </ContextComp>
            <div className="flex mt-[10px] pt-[4rem]">
              <div className="bg-white">
                <Sidebar />
              </div>
              <main
                style={{
                  background:
                    'linear-gradient(180deg, #FFFFFF 0%, #F7F8F9 10.5%)',
                }}
                className="px-[5px] pt-[5px] pb-[10px] lg:px-[60px] lg:py-[20px] border-0 pb-12 lg:pb-0 lg:border lg:border-[#EFF3F4] min-h-[calc(97vh-4rem)] rounded-[20px] lg:mx-[10px] flex-1 lg:ml-[275px] overflow-y-auto"
              >
                <ContextComp>
                  <CasperProvider>{children}</CasperProvider>
                </ContextComp>
              </main>
              <div className="block lg:hidden fixed bottom-0 w-full bg-[#FFFFFF]">
                <MobileMenu />
              </div>
            </div>
          </div>
          <Toaster theme={'dark'} />
        </ThemeProvider>
      </body>
    </html>
  );
}
