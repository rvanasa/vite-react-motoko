import EvmRpc "canister:evm_rpc";

import Debug "mo:base/Debug";
import Cycles "mo:base/ExperimentalCycles";

actor {
  /// Retrieve the latest block on the Ethereum blockchain.
  public func getLatestEthereumBlock() : async EvmRpc.Block {
    // Unused cycles will be refunded
    Cycles.add(1000000000);
    let result = await EvmRpc.eth_getBlockByNumber(#EthMainnet(?[#Cloudflare]), null, #Latest);
    switch result {
      case (#Consistent(#Ok block)) {
        block;
      };
      case (#Consistent(#Err error)) {
        Debug.trap("Error: " # debug_show error);
      };
      case (#Inconsistent(results)) {
        Debug.trap("Inconsistent results");
      };
    };
  };
};
