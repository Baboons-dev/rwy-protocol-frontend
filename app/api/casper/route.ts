import { NextResponse } from 'next/server';

const API_URL = 'https://node.testnet.cspr.cloud/rpc';
const API_TOKEN = '55f79117-fc4d-4d60-9956-65423f39a06a';

async function makeRPCRequest(method: string, params: any[] = []) {
  console.log(`\n[RPC Request] ${method}`);
  console.log('Parameters:', JSON.stringify(params, null, 2));

  const body = JSON.stringify({
    id: Date.now(),
    jsonrpc: '2.0',
    method,
    params: params.length === 0 ? null : params,
  });

  console.log('Request body:', body);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: API_TOKEN,
      },
      body,
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`[HTTP Error] Status: ${response.status}`);
      console.error('Response text:', text);
      throw new Error(`HTTP error! status: ${response.status}, body: ${text}`);
    }

    const text = await response.text();
    console.log(`[Raw Response] ${method}:`, text);

    try {
      const data = JSON.parse(text);
      console.log(
        `[Parsed Response] ${method}:`,
        JSON.stringify(data, null, 2),
      );

      if (data.error) {
        throw new Error(data.error.message || 'RPC Error');
      }

      return data.result;
    } catch (parseError) {
      console.error('[Parse Error]', parseError);
      throw new Error(`Failed to parse response: ${text}`);
    }
  } catch (error) {
    console.error(`[RPC Error] ${method}:`, error);
    throw error;
  }
}

export async function GET(request: Request) {
  // Temporarily return a mock balance until we fix the account identifier issue
  return NextResponse.json({ balance: 0 });

  /* Commented out until we fix the account identifier issue
  const { searchParams } = new URL(request.url);
  const publicKey = searchParams.get('publicKey');

  if (!publicKey) {
    return NextResponse.json({ error: 'Public key is required' }, { status: 400 });
  }

  console.log('\n[Balance Request]');
  console.log('Public Key:', publicKey);

  try {
    // Get state root hash
    const stateRootHash = await makeRPCRequest('chain_get_state_root_hash', []);
    console.log('State Root Hash:', stateRootHash);

    // Convert public key
    const clPublicKey = CLPublicKey.fromHex(publicKey);
    console.log('CL Public Key:', {
      hex: clPublicKey.toHex(),
      accountHash: clPublicKey.toAccountHash(),
      accountHashStr: clPublicKey.toAccountHashStr(),
    });

    // Get account info
    const accountInfoParams = [{
      state_root_hash: stateRootHash.state_root_hash,
      account_identifier: {
        PublicKey: clPublicKey.toHex()
      }
    }];
    console.log('Account Info Params:', JSON.stringify(accountInfoParams, null, 2));

    const accountInfo = await makeRPCRequest('state_get_account_info', accountInfoParams);
    console.log('Account Info:', accountInfo);

    // Get balance
    const balanceData = await makeRPCRequest('query_balance', [{
      purse_uref: accountInfo.account.main_purse,
      state_root_hash: stateRootHash.state_root_hash
    }]);
    console.log('Balance Data:', balanceData);

    const balanceInCSPR = Number(balanceData.balance) / 1_000_000_000;
    console.log('Balance in CSPR:', balanceInCSPR);

    return NextResponse.json({ balance: balanceInCSPR });
  } catch (error) {
    console.error('[Balance Error]', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to get balance' },
      { status: 500 }
    );
  }
  */
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { signedDeploy } = body;

    if (!signedDeploy) {
      return NextResponse.json(
        { error: 'Signed deploy is required' },
        { status: 400 },
      );
    }

    console.log('\n[Deploy Request]');
    console.log(
      'Received signed deploy:',
      JSON.stringify(signedDeploy, null, 2),
    );

    // Convert signature
    const signature = Object.values(signedDeploy.approvals[0].signature)
      .map((byte) => (byte as number).toString(16).padStart(2, '0'))
      .join('');
    console.log('Converted signature:', signature);

    // Format deploy
    const deploy = {
      ...signedDeploy.deploy,
      approvals: [
        {
          signer: signedDeploy.approvals[0].signer,
          signature,
        },
      ],
    };

    console.log('Formatted deploy:', JSON.stringify(deploy, null, 2));

    // Send deploy
    const result = await makeRPCRequest('account_put_deploy', [deploy]);
    console.log('Deploy result:', result);

    return NextResponse.json({ deployHash: result.deploy_hash });
  } catch (error) {
    console.error('[Deploy Error]', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to send deploy',
      },
      { status: 500 },
    );
  }
}
