/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Pool } from "./Pool";

export class PoolFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _lpToken: string,
    _startingBlock: BigNumberish,
    _blocks: BigNumberish[],
    _farmingSupplies: BigNumberish[],
    overrides?: Overrides
  ): Promise<Pool> {
    return super.deploy(
      _lpToken,
      _startingBlock,
      _blocks,
      _farmingSupplies,
      overrides || {}
    ) as Promise<Pool>;
  }
  getDeployTransaction(
    _lpToken: string,
    _startingBlock: BigNumberish,
    _blocks: BigNumberish[],
    _farmingSupplies: BigNumberish[],
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lpToken,
      _startingBlock,
      _blocks,
      _farmingSupplies,
      overrides || {}
    );
  }
  attach(address: string): Pool {
    return super.attach(address) as Pool;
  }
  connect(signer: Signer): PoolFactory {
    return super.connect(signer) as PoolFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Pool {
    return new Contract(address, _abi, signerOrProvider) as Pool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_startingBlock",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "_blocks",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_farmingSupplies",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "EmergencyWithdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "startingBlock",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "blocks",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "farmingSupply",
        type: "uint256"
      }
    ],
    name: "NewPeriod",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "accDuckPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "contract PoolController",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "duck",
    outputs: [
      {
        internalType: "contract DuckToken",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastRewardBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "periods",
    outputs: [
      {
        internalType: "uint256",
        name: "startingBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "blocks",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "farmingSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokensPerBlock",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "revenues",
    outputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startingBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "blocks",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "farmingSupply",
        type: "uint256"
      }
    ],
    name: "addPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      }
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address"
      }
    ],
    name: "getUserPendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentPeriodIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "calculateDuckTokensForMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "addRevenue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address"
      }
    ],
    name: "getUserLastRevenue",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200232f3803806200232f833981810160405260808110156200003757600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200006357600080fd5b9083019060208201858111156200007957600080fd5b82518660208202830111640100000000821117156200009757600080fd5b82525081516020918201928201910280838360005b83811015620000c6578181015183820152602001620000ac565b5050505090500160405260200180516040519392919084640100000000821115620000f057600080fd5b9083019060208201858111156200010657600080fd5b82518660208202830111640100000000821117156200012457600080fd5b82525081516020918201928201910280838360005b838110156200015357818101518382015260200162000139565b505050509050016040525050506000825111620001a4576040805162461bcd60e51b815260206004820152600a602482015269656d706c79206461746160b01b604482015290519081900360640190fd5b8051825114620001ea576040805162461bcd60e51b815260206004820152600c60248201526b696e76616c6964206461746160a01b604482015290519081900360640190fd5b600180546001600160a01b031916331790819055604080516335489a8760e21b815290516001600160a01b03929092169163d5226a1c91600480820192602092909190829003018186803b1580156200024257600080fd5b505afa15801562000257573d6000803e3d6000fd5b505050506040513d60208110156200026e57600080fd5b5051600380546001600160a01b03199081166001600160a01b0393841617909155600480549091169186169190911790558151620002de9084908490600090620002b457fe5b602002602001015183600081518110620002ca57fe5b6020026020010151620003b060201b60201c565b60006200032960016200031585600081518110620002f857fe5b602002602001015187620005f760201b620014631790919060201c565b620005f760201b620014631790919060201c565b905060015b83518110156200039e576200035f828583815181106200034a57fe5b6020026020010151858481518110620002ca57fe5b620003936001620003158684815181106200037657fe5b602002602001015185620005f760201b620014631790919060201c565b91506001016200032e565b50505060029190915550620007729050565b6001546001600160a01b0316331462000401576040805162461bcd60e51b815260206004820152600e60248201526d37b7363ca1b7b73a3937b63632b960911b604482015290519081900360640190fd5b60005415620004c5576000805462000471919060001981019081106200042357fe5b9060005260206000209060040201600101546000600160008054905003815481106200044b57fe5b906000526020600020906004020160000154620005f760201b620014631790919060201c565b8311620004c5576040805162461bcd60e51b815260206004820152601c60248201527f74776f20706572696f647320696e207468652073616d652074696d6500000000604482015290519081900360640190fd5b6000620004e183836200065960201b620011fc1790919060201c565b9050620004ed6200074a565b50604080516080810182528581526020808201868152828401868152606084018681526000805460018101825590805285517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56360049092029182015592517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56484015590517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e565830155517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56690910155825185815292519192869288927f2c1ba73d1c003cfaa21fc5841652471b22221e83b5b01a9f7dc54de46e8ed643928290030190a35050505050565b60008282018381101562000652576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60006200065283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620006a360201b60201c565b60008183620007335760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620006f7578181015183820152602001620006dd565b50505050905090810190601f168015620007255780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816200074057fe5b0495945050505050565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b611bad80620007826000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063b4f5a21a116100a2578063d95894d811610071578063d95894d8146102cd578063da62fc2814610312578063e3161ddd1461031a578063ea4a110414610322578063f77c47911461036557610116565b8063b4f5a21a1461027a578063b6b55f2514610282578063c67106291461029f578063d5226a1c146102c557610116565b80635312ea8e116100e95780635312ea8e146101ce5780635fcbd285146101eb578063614ad28a1461020f5780639f33164914610258578063a9f8d1811461027257610116565b8063031297f21461011b5780631959a002146101495780632e1a7d4d146101885780633be64ed7146101a5575b600080fd5b6101476004803603604081101561013157600080fd5b506001600160a01b03813516906020013561036d565b005b61016f6004803603602081101561015f57600080fd5b50356001600160a01b031661050b565b6040805192835260208301919091528051918290030190f35b6101476004803603602081101561019e57600080fd5b5035610524565b610147600480360360608110156101bb57600080fd5b5080359060208101359060400135610679565b610147600480360360208110156101e457600080fd5b50356108a5565b6101f361091a565b604080516001600160a01b039092168252519081900360200190f35b6102356004803603602081101561022557600080fd5b50356001600160a01b0316610929565b604080516001600160a01b03909316835260208301919091528051918290030190f35b610260610a18565b60408051918252519081900360200190f35b610260610b9e565b610260610ba4565b6101476004803603602081101561029857600080fd5b5035610c24565b610260600480360360208110156102b557600080fd5b50356001600160a01b0316610d6d565b6101f3610e90565b6102ea600480360360208110156102e357600080fd5b5035610e9f565b604080516001600160a01b039094168452602084019290925282820152519081900360600190f35b610260610ed9565b610147610edf565b61033f6004803603602081101561033857600080fd5b5035611154565b604080519485526020850193909352838301919091526060830152519081900360800190f35b6101f361118b565b6001546001600160a01b031633146103bd576040805162461bcd60e51b815260206004820152600e60248201526d37b7363ca1b7b73a3937b63632b960911b604482015290519081900360640190fd5b6103c5611ada565b604080516060810182526001600160a01b0380861682526004805484516370a0823160e01b815230928101929092529351929360208086019491909316926370a082319260248082019391829003018186803b15801561042457600080fd5b505afa158015610438573d6000803e3d6000fd5b505050506040513d602081101561044e57600080fd5b505181526020908101939093526007805460018101825560009190915281517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688600390920291820180546001600160a01b0319166001600160a01b03909216919091179055928101517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c689840155604001517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68a909201919091555050565b6006602052600090815260409020805460019091015482565b336000908152600660205260409020805482111561057e576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b610586610edf565b60006105cd82600101546105c1670de0b6b3a76400006105b5600554876000015461119a90919063ffffffff16565b9063ffffffff6111fc16565b9063ffffffff61123e16565b905080156105df576105df3382611280565b821561061757600454610602906001600160a01b0316338563ffffffff61141116565b8154610614908463ffffffff61123e16565b82555b600554825461063991670de0b6b3a7640000916105b59163ffffffff61119a16565b600183015560408051848152905133917f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364919081900360200190a2505050565b6001546001600160a01b031633146106c9576040805162461bcd60e51b815260206004820152600e60248201526d37b7363ca1b7b73a3937b63632b960911b604482015290519081900360640190fd5b6000541561077f576000805461072c919060001981019081106106e857fe5b90600052602060002090600402016001015460006001600080549050038154811061070f57fe5b60009182526020909120600490910201549063ffffffff61146316565b831161077f576040805162461bcd60e51b815260206004820152601c60248201527f74776f20706572696f647320696e207468652073616d652074696d6500000000604482015290519081900360640190fd5b6000610791828463ffffffff6111fc16565b905061079b611b04565b50604080516080810182528581526020808201868152828401868152606084018681526000805460018101825590805285517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56360049092029182015592517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56484015590517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e565830155517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56690910155825185815292519192869288927f2c1ba73d1c003cfaa21fc5841652471b22221e83b5b01a9f7dc54de46e8ed643928290030190a35050505050565b336000818152600660205260409020805460045491926108d4926001600160a01b03169163ffffffff61141116565b80546040805191825251839133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a3600080825560019091015550565b6004546001600160a01b031681565b6001600160a01b03811660009081526006602052604081208190815b600754811015610a10576001600160a01b038516600090815260086020908152604080832084845290915290205460ff16610a085760006109d36007838154811061098c57fe5b9060005260206000209060030201600101546105b58560000154600786815481106109b357fe5b90600052602060002090600302016002015461119a90919063ffffffff16565b9050600782815481106109e257fe5b60009182526020909120600390910201546001600160a01b031694509250610a13915050565b600101610945565b50505b915091565b60008080805b600054811015610b955760008181548110610a3557fe5b906000526020600020906004020160000154431015610a5357610b95565b6000610a8460008381548110610a6557fe5b9060005260206000209060040201600101546000848154811061070f57fe5b90508043118015610a96575060025481115b15610aeb57610ade60008381548110610aab57fe5b906000526020600020906004020160030154610ad26002548461123e90919063ffffffff16565b9063ffffffff61119a16565b8401935060019250610b8c565b8215610b4a57610b4160008381548110610b0157fe5b906000526020600020906004020160030154610ad260008581548110610b2357fe5b6000918252602090912060049091020154439063ffffffff61123e16565b84019350610b86565b610b8160008381548110610b5a57fe5b906000526020600020906004020160030154610ad26002544361123e90919063ffffffff16565b840193505b50610b95565b50600101610a1e565b50909150505b90565b60025481565b6000805b600054811015610c205760008181548110610bbf57fe5b90600052602060002090600402016000015443118015610c0c5750610c0960008281548110610bea57fe5b9060005260206000209060040201600101546000838154811061070f57fe5b43105b15610c18579050610b9b565b600101610ba8565b5090565b60008111610c79576040805162461bcd60e51b815260206004820152601d60248201527f616d6f756e74206d757374206265206d6f7265207468616e207a65726f000000604482015290519081900360640190fd5b336000908152600660205260409020610c90610edf565b805415610cda576000610cc682600101546105c1670de0b6b3a76400006105b5600554876000015461119a90919063ffffffff16565b90508015610cd857610cd83382611280565b505b8054610cec908363ffffffff61146316565b8155600454610d0c906001600160a01b031633308563ffffffff6114bd16565b6005548154610d2e91670de0b6b3a7640000916105b59163ffffffff61119a16565b600182015560408051838152905133917fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c919081900360200190a25050565b6001600160a01b038116600090815260066020526040812081610d8e610a18565b60048054604080516370a0823160e01b81523093810193909352519293506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610de057600080fd5b505afa158015610df4573d6000803e3d6000fd5b505050506040513d6020811015610e0a57600080fd5b5051905080610e1f5760009350505050610e8b565b6000610e57610e48836105b5606481605d610ad28a670de0b6b3a764000063ffffffff61119a16565b6005549063ffffffff61146316565b9050610e8484600101546105c1670de0b6b3a76400006105b585896000015461119a90919063ffffffff16565b9450505050505b919050565b6003546001600160a01b031681565b60078181548110610eac57fe5b60009182526020909120600390910201805460018201546002909201546001600160a01b03909116925083565b60055481565b6002544311610eed57611152565b610ef63361151d565b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015610f4557600080fd5b505afa158015610f59573d6000803e3d6000fd5b505050506040513d6020811015610f6f57600080fd5b5051905080610f82575043600255611152565b6000610f8c610a18565b9050801561114b5760015460408051631d68877b60e11b815290516001600160a01b03909216916340c10f19918391633ad10ef691600480820192602092909190829003018186803b158015610fe157600080fd5b505afa158015610ff5573d6000803e3d6000fd5b505050506040513d602081101561100b57600080fd5b505161102360646105b586600763ffffffff61119a16565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561107257600080fd5b505af1158015611086573d6000803e3d6000fd5b50506001546001600160a01b031691506340c10f199050306110b460646105b586605d63ffffffff61119a16565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561110357600080fd5b505af1158015611117573d6000803e3d6000fd5b50505050611147610e48836105b560646105b5605d610ad2670de0b6b3a76400008961119a90919063ffffffff16565b6005555b5050436002555b565b6000818154811061116157fe5b60009182526020909120600490910201805460018201546002830154600390930154919350919084565b6001546001600160a01b031681565b6000826111a9575060006111f6565b828202828482816111b657fe5b04146111f35760405162461bcd60e51b8152600401808060200182810382526021815260200180611b2d6021913960400191505060405180910390fd5b90505b92915050565b60006111f383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506115ea565b60006111f383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061168c565b600354604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156112cb57600080fd5b505afa1580156112df573d6000803e3d6000fd5b505050506040513d60208110156112f557600080fd5b5051905080821115611389576003546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018590529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561135757600080fd5b505af115801561136b573d6000803e3d6000fd5b505050506040513d602081101561138157600080fd5b5061140c9050565b6003546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018690529151919092169163a9059cbb9160448083019260209291908290030181600087803b1580156113df57600080fd5b505af11580156113f3573d6000803e3d6000fd5b505050506040513d602081101561140957600080fd5b50505b505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261140c9084906116e6565b6000828201838110156111f3576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526115179085906116e6565b50505050565b6001600160a01b0381166000908152600660205260408120905b60075481101561140c576001600160a01b038316600090815260086020908152604080832084845290915290205460ff166115e2576001600160a01b03831660009081526008602090815260408083208484529091528120805460ff19166001179055600780546115ad91908490811061098c57fe5b90506115e0600783815481106115bf57fe5b60009182526020909120600390910201546001600160a01b03168583611797565b505b600101611537565b600081836116765760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561163b578181015183820152602001611623565b50505050905090810190601f1680156116685780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161168257fe5b0495945050505050565b600081848411156116de5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561163b578181015183820152602001611623565b505050900390565b606061173b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119509092919063ffffffff16565b80519091501561140c5780806020019051602081101561175a57600080fd5b505161140c5760405162461bcd60e51b815260040180806020018281038252602a815260200180611b4e602a913960400191505060405180910390fd5b604080516370a0823160e01b815230600482015290516000916001600160a01b038616916370a0823191602480820192602092909190829003018186803b1580156117e157600080fd5b505afa1580156117f5573d6000803e3d6000fd5b505050506040513d602081101561180b57600080fd5b5051905080158061181a575081155b15611825575061140c565b8181106118be57836001600160a01b031663a9059cbb84846040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561188c57600080fd5b505af11580156118a0573d6000803e3d6000fd5b505050506040513d60208110156118b657600080fd5b506115179050565b836001600160a01b031663a9059cbb84836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561191e57600080fd5b505af1158015611932573d6000803e3d6000fd5b505050506040513d602081101561194857600080fd5b505050505050565b606061195f8484600085611967565b949350505050565b606061197285611ad4565b6119c3576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611a025780518252601f1990920191602091820191016119e3565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611a64576040519150601f19603f3d011682016040523d82523d6000602084013e611a69565b606091505b50915091508115611a7d57915061195f9050565b805115611a8d5780518082602001fd5b60405162461bcd60e51b815260206004820181815286516024840152865187939192839260440191908501908083836000831561163b578181015183820152602001611623565b3b151590565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b604051806080016040528060008152602001600081526020016000815260200160008152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212205f27a876b8192a96794959b0b3a847b662866899a58404898d860d046ffbc3a764736f6c63430006040033";