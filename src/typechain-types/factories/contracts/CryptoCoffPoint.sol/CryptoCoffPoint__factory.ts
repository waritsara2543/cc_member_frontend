/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  CryptoCoffPoint,
  CryptoCoffPointInterface,
} from "../../../contracts/CryptoCoffPoint.sol/CryptoCoffPoint";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ERC721EnumerableForbiddenBatchMint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "ERC721OutOfBoundsIndex",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "customerAddress",
        type: "address",
      },
    ],
    name: "Customer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "addPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_address",
        type: "bytes32",
      },
    ],
    name: "bytes32ToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "txHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "blockNumber",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "blockHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "source",
            type: "address",
          },
          {
            internalType: "bytes32[]",
            name: "topics",
            type: "bytes32[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Log",
        name: "log",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkLog",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "a",
        type: "string",
      },
      {
        internalType: "string",
        name: "b",
        type: "string",
      },
    ],
    name: "compareStrings",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "counted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getNewUri",
    outputs: [
      {
        internalType: "string",
        name: "newUri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getTokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61024060405260736101a08181526080918291906200256a6101c03981526020016040518060a0016040528060738152602001620025dd6073913981526020016040518060a0016040528060738152602001620024116073913981526020016040518060a00160405280607381526020016200239e6073913981526020016040518060a0016040528060738152602001620024f76073913981526020016040518060a0016040528060738152602001620024846073913981526020016040518060a00160405280607381526020016200232b6073913981526020016040518060a0016040528060738152602001620026506073913981526020016040518060a0016040528060738152602001620022b86073913990526200012590600c9060096200019d565b506000600d553480156200013857600080fd5b5060405180604001604052806005815260200164644e46547360d81b815250604051806040016040528060048152602001631913919560e21b815250816000908162000185919062000319565b50600162000194828262000319565b505050620003e5565b828054828255906000526020600020908101928215620001e8579160200282015b82811115620001e85782518290620001d7908262000319565b5091602001919060010190620001be565b50620001f6929150620001fa565b5090565b80821115620001f65760006200021182826200021b565b50600101620001fa565b50805462000229906200028a565b6000825580601f106200023a575050565b601f0160209004906000526020600020908101906200025a91906200025d565b50565b5b80821115620001f657600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200029f57607f821691505b602082108103620002c057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200031457600081815260208120601f850160051c81016020861015620002ef5750805b601f850160051c820191505b818110156200031057828155600101620002fb565b5050505b505050565b81516001600160401b0381111562000335576200033562000274565b6200034d816200034684546200028a565b84620002c6565b602080601f8311600181146200038557600084156200036c5750858301515b600019600386901b1c1916600185901b17855562000310565b600085815260208120601f198616915b82811015620003b65788860151825594840194600190910190840162000395565b5085821015620003d55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611ec380620003f56000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80634d2e90df116100de578063a22cb46511610097578063c87b56dd11610071578063c87b56dd14610345578063e985e9c514610358578063f937f9101461036b578063fc4d312d1461037457600080fd5b8063a22cb4651461030c578063b88d4fde1461031f578063bed34bba1461033257600080fd5b80634d2e90df146102a75780634f6ccce7146102ba5780635ced058e146102cd5780636352211e146102de57806370a08231146102f157806395d89b411461030457600080fd5b80632f745c59116101305780632f745c591461021a578063349f258b1461022d57806340691db41461024d57806340d097c31461026e57806342842e0e146102815780634585e33b1461029457600080fd5b806301ffc9a71461017857806306fdde03146101a0578063081812fc146101b5578063095ea7b3146101e057806318160ddd146101f557806323b872dd14610207575b600080fd5b61018b610186366004611790565b610387565b60405190151581526020015b60405180910390f35b6101a8610398565b60405161019791906117fd565b6101c86101c3366004611810565b61042a565b6040516001600160a01b039091168152602001610197565b6101f36101ee36600461183e565b610453565b005b6009545b604051908152602001610197565b6101f361021536600461186a565b610462565b6101f961022836600461183e565b6104f2565b61024061023b3660046118ab565b610557565b60405161019791906118c8565b61026061025b3660046119af565b6105f9565b604051610197929190611a1c565b6101f361027c3660046118ab565b61065a565b6101f361028f36600461186a565b610791565b6101f36102a2366004611a37565b6107ac565b6101a86102b5366004611810565b6108a6565b6101f96102c8366004611810565b610a3e565b6101c86102db366004611810565b90565b6101c86102ec366004611810565b610a97565b6101f96102ff3660046118ab565b610aa2565b6101a8610aea565b6101f361031a366004611aa9565b610af9565b6101f361032d366004611ae7565b610b04565b61018b610340366004611b53565b610b1b565b6101a8610353366004611810565b610b74565b61018b610366366004611ba0565b610b7f565b6101f9600d5481565b6101f3610382366004611810565b610bad565b600061039282610bc4565b92915050565b6060600080546103a790611bce565b80601f01602080910402602001604051908101604052809291908181526020018280546103d390611bce565b80156104205780601f106103f557610100808354040283529160200191610420565b820191906000526020600020905b81548152906001019060200180831161040357829003601f168201915b5050505050905090565b600061043582610be9565b506000828152600460205260409020546001600160a01b0316610392565b61045e828233610c22565b5050565b6001600160a01b03821661049157604051633250574960e11b8152600060048201526024015b60405180910390fd5b600061049e838333610c2f565b9050836001600160a01b0316816001600160a01b0316146104ec576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610488565b50505050565b60006104fd83610aa2565b821061052e5760405163295f44f760e21b81526001600160a01b038416600482015260248101839052604401610488565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b6060600061056483610aa2565b905060008167ffffffffffffffff8111156105815761058161190c565b6040519080825280602002602001820160405280156105aa578160200160208202803683370190505b50905060005b828110156105f1576105c285826104f2565b8282815181106105d4576105d4611c08565b6020908102919091010152806105e981611c34565b9150506105b0565b509392505050565b60016060600061062a61060f60c0870187611c4d565b600181811061062057610620611c08565b9050602002013590565b604080516001600160a01b0383166020820152919250016040516020818303038152906040529150509250929050565b600061066582610557565b905080516000146106b85760405162461bcd60e51b815260206004820152601c60248201527f596f7520616c72656164792068617665206120706f696e74204e4654000000006044820152606401610488565b600b80549060019060006106cc8385611c9e565b909155506106dc90508382610c48565b61078c81600c6000815481106106f4576106f4611c08565b90600052602060002001805461070990611bce565b80601f016020809104026020016040519081016040528092919081815260200182805461073590611bce565b80156107825780601f1061075757610100808354040283529160200191610782565b820191906000526020600020905b81548152906001019060200180831161076557829003601f168201915b5050505050610c62565b505050565b61078c83838360405180602001604052806000815250610b04565b6001600d60008282546107bf9190611c9e565b90915550600090506107d3828401846118ab565b6040519091506001600160a01b038216907f3894d0b3ab3a6e809eb80cc842fe6dd3bc4571b6aea1d6b094c2997b782a3c1090600090a2600061081582610557565b905060008151116108685760405162461bcd60e51b815260206004820152601a60248201527f596f7520646f6e27742068617665206120706f696e74204e46540000000000006044820152606401610488565b80511561089d5760008160008151811061088457610884611c08565b6020026020010151905061089781610bad565b506104ec565b6104ec8261065a565b606060006108b383610b74565b905060005b600c54811015610a375761097182600c83815481106108d9576108d9611c08565b9060005260206000200180546108ee90611bce565b80601f016020809104026020016040519081016040528092919081815260200182805461091a90611bce565b80156109675780601f1061093c57610100808354040283529160200191610967565b820191906000526020600020905b81548152906001019060200180831161094a57829003601f168201915b5050505050610b1b565b15610a2557600c818154811061098957610989611c08565b90600052602060002001805461099e90611bce565b80601f01602080910402602001604051908101604052809291908181526020018280546109ca90611bce565b8015610a175780601f106109ec57610100808354040283529160200191610a17565b820191906000526020600020905b8154815290600101906020018083116109fa57829003601f168201915b505050505092505050919050565b80610a2f81611c34565b9150506108b8565b5050919050565b6000610a4960095490565b8210610a725760405163295f44f760e21b81526000600482015260248101839052604401610488565b60098281548110610a8557610a85611c08565b90600052602060002001549050919050565b600061039282610be9565b60006001600160a01b038216610ace576040516322718ad960e21b815260006004820152602401610488565b506001600160a01b031660009081526003602052604090205490565b6060600180546103a790611bce565b61045e338383610cb2565b610b0f848484610462565b6104ec84848484610d51565b600081604051602001610b2e9190611cb1565b6040516020818303038152906040528051906020012083604051602001610b559190611cb1565b6040516020818303038152906040528051906020012014905092915050565b606061039282610e7a565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000610bb8826108a6565b905061045e8282610c62565b60006001600160e01b0319821663780e9d6360e01b1480610392575061039282610f83565b6000818152600260205260408120546001600160a01b03168061039257604051637e27328960e01b815260048101849052602401610488565b61078c8383836001610fa8565b600080610c3d8585856110ae565b90505b949350505050565b61045e82826040518060200160405280600081525061117b565b6000828152600660205260409020610c7a8282611d1b565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b6001600160a01b038216610ce457604051630b61174360e31b81526001600160a01b0383166004820152602401610488565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b156104ec57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610d93903390889087908790600401611ddb565b6020604051808303816000875af1925050508015610dce575060408051601f3d908101601f19168201909252610dcb91810190611e18565b60015b610e37573d808015610dfc576040519150601f19603f3d011682016040523d82523d6000602084013e610e01565b606091505b508051600003610e2f57604051633250574960e11b81526001600160a01b0385166004820152602401610488565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610e7357604051633250574960e11b81526001600160a01b0385166004820152602401610488565b5050505050565b6060610e8582610be9565b5060008281526006602052604081208054610e9f90611bce565b80601f0160208091040260200160405190810160405280929190818152602001828054610ecb90611bce565b8015610f185780601f10610eed57610100808354040283529160200191610f18565b820191906000526020600020905b815481529060010190602001808311610efb57829003601f168201915b505050505090506000610f3660408051602081019091526000815290565b90508051600003610f48575092915050565b815115610f7a578082604051602001610f62929190611e35565b60405160208183030381529060405292505050919050565b610c4084611192565b60006001600160e01b03198216632483248360e11b1480610392575061039282611207565b8080610fbc57506001600160a01b03821615155b1561107e576000610fcc84610be9565b90506001600160a01b03831615801590610ff85750826001600160a01b0316816001600160a01b031614155b801561100b57506110098184610b7f565b155b156110345760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610488565b811561107c5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b6000806110bc858585611257565b90506001600160a01b0381166111195761111484600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b61113c565b846001600160a01b0316816001600160a01b03161461113c5761113c8185611350565b6001600160a01b03851661115857611153846113e1565b610c40565b846001600160a01b0316816001600160a01b031614610c4057610c408585611490565b61118583836114e0565b61078c6000848484610d51565b606061119d82610be9565b5060006111b560408051602081019091526000815290565b905060008151116111d55760405180602001604052806000815250611200565b806111df84611545565b6040516020016111f0929190611e35565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b148061123857506001600160e01b03198216635b5e139f60e01b145b8061039257506301ffc9a760e01b6001600160e01b0319831614610392565b6000828152600260205260408120546001600160a01b0390811690831615611284576112848184866115d8565b6001600160a01b038116156112c2576112a1600085600080610fa8565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b038516156112f1576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b600061135b83610aa2565b6000838152600860205260409020549091508082146113ae576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b6009546000906113f390600190611e64565b6000838152600a60205260408120546009805493945090928490811061141b5761141b611c08565b90600052602060002001549050806009838154811061143c5761143c611c08565b6000918252602080832090910192909255828152600a9091526040808220849055858252812055600980548061147457611474611e77565b6001900381819060005260206000200160009055905550505050565b6000600161149d84610aa2565b6114a79190611e64565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b6001600160a01b03821661150a57604051633250574960e11b815260006004820152602401610488565b600061151883836000610c2f565b90506001600160a01b0381161561078c576040516339e3563760e11b815260006004820152602401610488565b606060006115528361163c565b600101905060008167ffffffffffffffff8111156115725761157261190c565b6040519080825280601f01601f19166020018201604052801561159c576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846115a657509392505050565b6115e3838383611714565b61078c576001600160a01b03831661161157604051637e27328960e01b815260048101829052602401610488565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610488565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061167b5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106116a7576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106116c557662386f26fc10000830492506010015b6305f5e10083106116dd576305f5e100830492506008015b61271083106116f157612710830492506004015b60648310611703576064830492506002015b600a83106103925760010192915050565b60006001600160a01b03831615801590610c405750826001600160a01b0316846001600160a01b0316148061174e575061174e8484610b7f565b80610c405750506000908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b03198116811461178d57600080fd5b50565b6000602082840312156117a257600080fd5b813561120081611777565b60005b838110156117c85781810151838201526020016117b0565b50506000910152565b600081518084526117e98160208601602086016117ad565b601f01601f19169290920160200192915050565b60208152600061120060208301846117d1565b60006020828403121561182257600080fd5b5035919050565b6001600160a01b038116811461178d57600080fd5b6000806040838503121561185157600080fd5b823561185c81611829565b946020939093013593505050565b60008060006060848603121561187f57600080fd5b833561188a81611829565b9250602084013561189a81611829565b929592945050506040919091013590565b6000602082840312156118bd57600080fd5b813561120081611829565b6020808252825182820181905260009190848201906040850190845b81811015611900578351835292840192918401916001016118e4565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261193357600080fd5b813567ffffffffffffffff8082111561194e5761194e61190c565b604051601f8301601f19908116603f011681019082821181831017156119765761197661190c565b8160405283815286602085880101111561198f57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156119c257600080fd5b823567ffffffffffffffff808211156119da57600080fd5b9084019061010082870312156119ef57600080fd5b90925060208401359080821115611a0557600080fd5b50611a1285828601611922565b9150509250929050565b8215158152604060208201526000610c4060408301846117d1565b60008060208385031215611a4a57600080fd5b823567ffffffffffffffff80821115611a6257600080fd5b818501915085601f830112611a7657600080fd5b813581811115611a8557600080fd5b866020828501011115611a9757600080fd5b60209290920196919550909350505050565b60008060408385031215611abc57600080fd5b8235611ac781611829565b915060208301358015158114611adc57600080fd5b809150509250929050565b60008060008060808587031215611afd57600080fd5b8435611b0881611829565b93506020850135611b1881611829565b925060408501359150606085013567ffffffffffffffff811115611b3b57600080fd5b611b4787828801611922565b91505092959194509250565b60008060408385031215611b6657600080fd5b823567ffffffffffffffff80821115611b7e57600080fd5b611b8a86838701611922565b93506020850135915080821115611a0557600080fd5b60008060408385031215611bb357600080fd5b8235611bbe81611829565b91506020830135611adc81611829565b600181811c90821680611be257607f821691505b602082108103611c0257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611c4657611c46611c1e565b5060010190565b6000808335601e19843603018112611c6457600080fd5b83018035915067ffffffffffffffff821115611c7f57600080fd5b6020019150600581901b3603821315611c9757600080fd5b9250929050565b8082018082111561039257610392611c1e565b60008251611cc38184602087016117ad565b9190910192915050565b601f82111561078c57600081815260208120601f850160051c81016020861015611cf45750805b601f850160051c820191505b81811015611d1357828155600101611d00565b505050505050565b815167ffffffffffffffff811115611d3557611d3561190c565b611d4981611d438454611bce565b84611ccd565b602080601f831160018114611d7e5760008415611d665750858301515b600019600386901b1c1916600185901b178555611d13565b600085815260208120601f198616915b82811015611dad57888601518255948401946001909101908401611d8e565b5085821015611dcb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611e0e908301846117d1565b9695505050505050565b600060208284031215611e2a57600080fd5b815161120081611777565b60008351611e478184602088016117ad565b835190830190611e5b8183602088016117ad565b01949350505050565b8181038181111561039257610392611c1e565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220edfd279e6126c7d6b8e5f547ba461e1e0e26836f93fe4dc4314bc86d8c4e9b7664736f6c6343000814003368747470733a2f2f6c696d652d69736f6c617465642d6368696e6368696c6c612d3732382e6d7970696e6174612e636c6f75642f697066732f516d5a5a4b437743774558727a6850733772375a634876355636724758415170644367576777466e56363750544a2f39706f696e742e6a736f6e68747470733a2f2f6c696d652d69736f6c617465642d6368696e6368696c6c612d3732382e6d7970696e6174612e636c6f75642f697066732f516d5a5a4b437743774558727a6850733772375a634876355636724758415170644367576777466e56363750544a2f37706f696e742e6a736f6e68747470733a2f2f6c696d652d69736f6c617465642d6368696e6368696c6c612d3732382e6d7970696e6174612e636c6f75642f697066732f516d5a5a4b437743774558727a6850733772375a634876355636724758415170644367576777466e56363750544a2f34706f696e742e6a736f6e68747470733a2f2f6c696d652d69736f6c617465642d6368696e6368696c6c612d3732382e6d7970696e6174612e636c6f75642f697066732f516d5a5a4b437743774558727a6850733772375a634876355636724758415170644367576777466e56363750544a2f33706f696e742e6a736f6e68747470733a2f2f6c696d652d69736f6c617465642d6368696e6368696c6c612d3732382e6d7970696e6174612e636c6f75642f697066732f516d5a5a4b437743774558727a6850733772375a634876355636724758415170644367576777466e56363750544a2f36706f696e742e6a736f6e68747470733a2f2f6c696d652d69736f6c617465642d6368696e6368696c6c612d3732382e6d7970696e6174612e636c6f75642f697066732f516d5a5a4b437743774558727a6850733772375a634876355636724758415170644367576777466e56363750544a2f35706f696e742e6a736f6e68747470733a2f2f6c696d652d69736f6c617465642d6368696e6368696c6c612d3732382e6d7970696e6174612e636c6f75642f697066732f516d5a5a4b437743774558727a6850733772375a634876355636724758415170644367576777466e56363750544a2f31706f696e742e6a736f6e68747470733a2f2f6c696d652d69736f6c617465642d6368696e6368696c6c612d3732382e6d7970696e6174612e636c6f75642f697066732f516d5a5a4b437743774558727a6850733772375a634876355636724758415170644367576777466e56363750544a2f32706f696e742e6a736f6e68747470733a2f2f6c696d652d69736f6c617465642d6368696e6368696c6c612d3732382e6d7970696e6174612e636c6f75642f697066732f516d5a5a4b437743774558727a6850733772375a634876355636724758415170644367576777466e56363750544a2f38706f696e742e6a736f6e";

type CryptoCoffPointConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CryptoCoffPointConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CryptoCoffPoint__factory extends ContractFactory {
  constructor(...args: CryptoCoffPointConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CryptoCoffPoint & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CryptoCoffPoint__factory {
    return super.connect(runner) as CryptoCoffPoint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CryptoCoffPointInterface {
    return new Interface(_abi) as CryptoCoffPointInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CryptoCoffPoint {
    return new Contract(address, _abi, runner) as unknown as CryptoCoffPoint;
  }
}
