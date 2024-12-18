'use client';

import { Button } from '@/components/ui/button';
import { showError } from '@/hooks/useToastMessages';
import { useClickRef } from '@make-software/csprclick-ui';
import useWalletLogin from '@/hooks/useWalletLogin';
import { useState } from 'react';
import { useAuthStore } from '@/lib/store/use-store';
import { formatWallet } from '@/lib/utils';

export function Topbar() {
  const [walletLoading, setWalletLoading] = useState(false);
  const { user, token, setToken } = useAuthStore();
  const clickRef = useClickRef();

  // Initialize wallet login hook
  useWalletLogin();

  const handleWalletConnect = async () => {
    if (walletLoading) return;

    try {
      setWalletLoading(true);
      console.log('Starting wallet connection...');

      // Reset message signed flag to trigger new signature request
      localStorage.setItem('messagedSigned', 'false');

      // Initiate sign in
      await clickRef.signIn();
      console.log('Sign in initiated');
    } catch (error) {
      console.error('Wallet connection error:', error);
      showError('Failed to connect wallet');
    } finally {
      setWalletLoading(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      console.log('Starting disconnect process...');

      await clickRef.signOut();
      console.log('Signed out');

      // Clear all authentication data
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('messagedSigned');

      // Clear the cookie
      document.cookie =
        'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      // Reset auth store state
      setToken('');

      // Force reload to clear any cached states
      window.location.reload();
    } catch (error) {
      console.error('Disconnect error:', error);
      showError('Failed to disconnect wallet');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        width: '99%',
        zIndex: 9,
      }}
      className="h-16 border-b bg-[#FFFFFF] px-[30px] py-[10px] rounded-[20px] border border-[#EFF3F4]"
    >
      <div className="w-full h-full flex items-center justify-between">
        <img src={'/logo.svg'} alt="logoo" />
        <div className="flex items-center space-x-2">
          <Button
            onClick={token ? handleDisconnect : handleWalletConnect}
            disabled={walletLoading}
            variant="outline"
            size="sm"
            className="bg-[#EBECED] px-[7px] py-[12px] font-mono"
          >
            <span>
              {walletLoading
                ? 'CONNECTING...'
                : token
                  ? (formatWallet(user?.data?.wallet_address) ?? 'DISCONNECT')
                  : 'CONNECT WALLET'}
            </span>
          </Button>
          <img src={'/wallet.svg'} alt="wallet" />
        </div>
      </div>
    </div>
  );
}
