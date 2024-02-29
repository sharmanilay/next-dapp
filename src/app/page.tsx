'use client';
import CeloWallet from '@/components/CeloWallet';
import CeloBalance from '@/components/CeloBalance';

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-8">Celo Dapp</h1>
      <CeloWallet />
      <CeloBalance />
    </main>
  );
}
