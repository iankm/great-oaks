import { zoraAuction } from '../abis/ZoraAuction';

const connectToContract = (web3: any, abi: any, contract: string) => {
  try {
    return new web3.eth.Contract(abi, contract);
  } catch (e: any) {
    console.error(e);
  }
};

export const createAuction = (web3: any) => {
  let contract = connectToContract(
    web3,
    zoraAuction,
    '0x53172d999a299198a935f9E424f9f8544e3d4292'
  );

  const ONE_MONTH_IN_MS = 60 * 60 * 24 * 30;
  const tokenContract = '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d';
  const tokenId = '11569600475311907757754736652680119189587';
  const duration = ONE_MONTH_IN_MS;
  const reservePrice = web3.utils.toWei('2', 'ether');
  const sellerFundsRecipient = '0x6d5041313720ac6A1548c2D14C382C3E1c7BB5Cf';
  const startTime = 0;
  const bidCurrency = '0x0000000000000000000000000000000000000000';

  try {
    console.log('creating auction...');
    contract.methods
      .createAuction(
        tokenContract,
        tokenId,
        duration,
        reservePrice,
        sellerFundsRecipient,
        startTime,
        bidCurrency
      )
      .send({ from: '0x6d5041313720ac6A1548c2D14C382C3E1c7BB5Cf' })
      .then((res: any) => console.log(res));
  } catch (e: any) {
    console.error(e);
  }
};
