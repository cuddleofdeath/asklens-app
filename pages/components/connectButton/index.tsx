import {
  ConnectButton,
  Theme,
  darkTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

export default function ConnectBtn() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className='btn'
                    onClick={openConnectModal}
                    type='button'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '1rem',
                      borderRadius: '0.5rem',
                      borderStyle: 'none',
                      width: '10rem',
                      height: '2.5rem',
                    }}
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    className='btn'
                    onClick={openChainModal}
                    type='button'
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'green',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                      borderRadius: '1.5rem',
                      borderStyle: 'none',
                    }}
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '1rem',
                      borderRadius: '0.5rem',
                      borderStyle: 'none',
                      width: '10rem',
                      height: '2.5rem',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                    type='button'
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: 'transparent',
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button
                    className='btn'
                    onClick={openAccountModal}
                    type='button'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '1rem',
                      borderRadius: '0.5rem',
                      borderStyle: 'none',
                      width: '10rem',
                      height: '2.5rem',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
