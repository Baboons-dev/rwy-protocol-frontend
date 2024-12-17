'use client';

import { useEffect, useState } from 'react';
import { useClickRef } from '@make-software/csprclick-ui';
import { getSignatureMessage, loginWithWallet } from '@/api/apiCalls/user';
import { useAuthStore } from '@/lib/store/use-store';
import { useRouter } from 'next/navigation';

const useWalletLogin = (redirectPath?: string) => {
  const clickRef = useClickRef();
  const { setToken } = useAuthStore();
  const router = useRouter();
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (!isBrowser) return;

    clickRef?.on(
      'csprclick:signed_in',
      async (evt: { account: { public_key: string } }) => {
        try {
          localStorage.setItem('wallet_address', evt.account.public_key);
          console.log('Wallet address stored:', evt.account.public_key);

          if (localStorage.getItem('messagedSigned') === 'false') {
            const loginMessage = await getSignatureMessage(
              evt.account.public_key,
            );
            const signed = await clickRef.signMessage(
              loginMessage.message,
              evt.account.public_key,
            );

            const response = await loginWithWallet({
              publicKey: evt.account.public_key,
              message: loginMessage.message,
              signedMessage: signed?.signatureHex || '',
            });

            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            document.cookie = `token=${response.data.access_token}; path=/`;
            setToken(response.data.access_token);

            router.push('/');
          }
        } catch (e) {
          localStorage.removeItem('token');
          localStorage.removeItem('refresh_token');
          document.cookie = ``;
          setToken('');
          clickRef.signOut();
          router.push('/');
        } finally {
          localStorage.setItem('messagedSigned', 'true');
        }
      },
    );
  }, [clickRef, setToken, router, redirectPath, isBrowser]);
};

export default useWalletLogin;
