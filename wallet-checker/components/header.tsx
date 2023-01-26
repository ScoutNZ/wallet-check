import dynamic from 'next/dynamic';
import { useRecoilState } from "recoil";
import { solBalanceState } from "../helpers/atoms";

const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

export default function Header() {
  const [tokenBalance, setTokenBalance]: any = useRecoilState(solBalanceState);
  return (
    <>
      <WalletMultiButtonDynamic />
      <div>
      <p className="text-white">{tokenBalance} SOL</p>
    </div>
    </>
  );
}
