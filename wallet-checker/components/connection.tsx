import { Connection, PublicKey } from "@solana/web3.js";

export default function createConnection(
    url = "https://methodical-alien-diamond.solana-mainnet.quiknode.pro/915c906e06afd5bad621a099696d66253b38028a/"
  ) {
    return new Connection(url, {
      commitment: "confirmed",
      confirmTransactionInitialTimeout: 60000,
    });
  }
//   const connection = createConnection();