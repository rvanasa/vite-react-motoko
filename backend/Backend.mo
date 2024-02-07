import EvmRpc "canister:evm_rpc";

import Debug "mo:base/Debug";
import Cycles "mo:base/ExperimentalCycles";

actor {

  // Select RPC providers
  let source : EvmRpc.RpcSource = #EthMainnet(?[#BlockPi, #Cloudflare]);

  /// Retrieve the latest block on the Ethereum blockchain.
  public func getLatestEthereumBlock() : async EvmRpc.Block {

    // Call `eth_getBlockByNumber` RPC method (unused cycles will be refunded)
    Cycles.add(1000000000);
    let result = await EvmRpc.eth_getBlockByNumber(source, null, #Latest);

    switch result {
      // Consistent, successful results
      case (#Consistent(#Ok block)) {
        block;
      };
      // Consistent error message
      case (#Consistent(#Err error)) {
        Debug.trap("Error: " # debug_show error);
      };
      // Inconsistent results between RPC providers
      case (#Inconsistent(results)) {
        Debug.trap("Inconsistent results");
      };
    };
  };
};
