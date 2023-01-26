import createConnection from "components/connection";
import Layout from "components/layout";
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRecoilState } from "recoil";
import { solBalanceState } from "helpers/atoms";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const NewIndex = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  const connection = createConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useRecoilState(solBalanceState);
  useEffect(() => {
    createConnection();
  }, []);

  useEffect(() => {
    const getBalance = async () => {
      if (!publicKey) {
        setBalance(0);
      } else {
        try {
          const solbal = await connection.getBalance(publicKey);
          setBalance(+solbal / LAMPORTS_PER_SOL);
          console.log(balance);
        } catch (error) {
          setBalance(0);
          console.log(error);
        }
      }
    };

    if (publicKey) {
      getBalance();
    } else {
      setBalance(0);
    }
  }, [publicKey]);
  console.log(balance);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default NewIndex;
