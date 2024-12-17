'use client';

import { useState, useCallback } from 'react';
import { useClickRef } from '@make-software/csprclick-ui';
import { CLPublicKey, DeployUtil } from 'casper-js-sdk';
import { CasperClient } from 'casper-js-sdk';

export function useWallet() {
  const clickRef = useClickRef();
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getBalance = useCallback(async () => {
    if (!clickRef) {
      setError('Click UI not initialized');
      return null;
    }

    try {
      setLoading(true);
      setError(null);

      const publicKey = localStorage.getItem('wallet_address');
      if (!publicKey) {
        throw new Error(
          'No wallet address found. Please connect your wallet first.',
        );
      }

      const response = await fetch(`/api/casper?publicKey=${publicKey}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get balance');
      }

      setBalance(data.balance);
      return data.balance;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to get wallet balance';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, [clickRef]);

  const sendTransfer = useCallback(
    async (amount: number, depositAddress: string) => {
      console.log('Starting transfer with params:', { amount, depositAddress });

      if (!clickRef) {
        throw new Error('Click UI not initialized');
      }

      try {
        // Get the active public key for signing
        const activeKey = await clickRef.getActivePublicKey();
        if (!activeKey) {
          throw new Error('No active public key found');
        }
        console.log('Active public key (sender):', activeKey);

        // Create deploy parameters with active key
        const deployParams = new DeployUtil.DeployParams(
          CLPublicKey.fromHex(activeKey),
          'casper-test',
        );

        // Convert amount to motes (1 CSPR = 10^9 motes)
        console.log('Converting amount to motes:', amount);
        const amountInCSPR = Number(amount);
        console.log('Amount in CSPR:', amountInCSPR);
        const amountMotes = BigInt(Math.floor(amountInCSPR * 1e9)).toString();
        console.log('Amount in motes (string):', amountMotes);

        // Create transfer deploy with recipient address
        console.log('Creating transfer to deposit address:', depositAddress);
        const transferId = Math.floor(Math.random() * 1000000);

        const session = DeployUtil.ExecutableDeployItem.newTransfer(
          amountMotes,
          CLPublicKey.fromHex(depositAddress),
          undefined,
          transferId,
        );

        // Standard payment amount (0.1 CSPR = 100000000 motes)
        const payment = DeployUtil.standardPayment(100000000);

        // Create deploy
        const deploy = DeployUtil.makeDeploy(deployParams, session, payment);

        // Convert deploy to JSON string for signing
        console.log('Signing transfer from', activeKey, 'to', depositAddress);
        const deployJson = DeployUtil.deployToJson(deploy);
        console.log('Deploy JSON:', deployJson);

        try {
          console.log('Initiating signing process...');

          // Sign using clickRef
          const signResult = await clickRef.sign(
            JSON.stringify(deployJson.deploy),
            activeKey,
          );
          console.log('Sign result:', signResult);

          if (!signResult || !signResult.signature) {
            throw new Error('Failed to sign deploy - no signature returned');
          }

          // Create the signed deploy
          console.log('Creating signed deploy...');
          const signedDeployJson = {
            deploy: deployJson.deploy,
            approvals: [
              {
                signer: activeKey,
                signature: signResult.signature,
              },
            ],
          };
          console.log('Signed deploy JSON:', signedDeployJson);

          // Send deploy through our API endpoint
          console.log('Sending deploy through API...');
          const response = await fetch('/api/casper', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              signedDeploy: signedDeployJson,
            }),
          });

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to send deploy');
          }

          const { deployHash } = await response.json();
          console.log('Deploy hash:', deployHash);

          // Refresh balance after transfer
          console.log('Transfer successful, refreshing balance...');
          await getBalance();

          return deployHash;
        } catch (err: unknown) {
          console.error('Error during signing process:', err);
          throw new Error(
            err instanceof Error
              ? err.message
              : 'An unknown error occurred during the signing process',
          );
        }
      } catch (error) {
        console.error('Transfer error:', error);
        throw error;
      }
    },
    [clickRef, getBalance],
  );

  return {
    balance,
    loading,
    error,
    getBalance,
    sendTransfer,
  };
}
