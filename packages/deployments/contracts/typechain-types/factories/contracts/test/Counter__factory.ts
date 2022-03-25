/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Counter,
  CounterInterface,
} from "../../../contracts/test/Counter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "attack",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
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
    inputs: [],
    name: "executor",
    outputs: [
      {
        internalType: "contract IExecutor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "incrementAndSend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "setExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "setShouldRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shouldRevert",
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
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b506000805460ff19169055610b188061002f6000396000f3fe60806040526004361061007b5760003560e01c8063c34c08e51161004e578063c34c08e5146101d7578063d09de08a1461020f578063d2eee78a14610224578063d3072d82146102375761007b565b806306661abd1461013b5780631c3c0ea8146101645780636813d787146101a15780639e5faafc146101cf575b60025467016345785d8a00006001600160a01b0390911631106101395760025460405163a81a368d60e01b8152612b67600482015230602482015260006044820181905267016345785d8a0000606483015260a0608483015260a48201526001600160a01b039091169063a81a368d9060c4016000604051808303816000875af115801561010d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261013591908101906108ea565b5050505b005b34801561014757600080fd5b5061015160015481565b6040519081526020015b60405180910390f35b34801561017057600080fd5b5061013961017f3660046109dc565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b3480156101ad57600080fd5b506101396101bc3660046109f7565b6000805460ff1916911515919091179055565b610139610261565b3480156101e357600080fd5b506002546101f7906001600160a01b031681565b6040516001600160a01b03909116815260200161015b565b34801561021b57600080fd5b50610139610318565b610139610232366004610a14565b610389565b34801561024357600080fd5b506000546102519060ff1681565b604051901515815260200161015b565b67016345785d8a000034101561027657600080fd5b60025460405163a81a368d60e01b8152612b67600482015230602482015260006044820181905267016345785d8a0000606483015260a0608483015260a48201526001600160a01b039091169063a81a368d9060c4016000604051808303816000875af11580156102eb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261031391908101906108ea565b505050565b60005460ff16156103705760405162461bcd60e51b815260206004820152601f60248201527f696e6372656d656e743a2073686f756c6452657665727420697320747275650060448201526064015b60405180910390fd5b60018060008282546103829190610a50565b9091555050565b6001600160a01b0383166103f7578034146103f25760405162461bcd60e51b8152602060048201526024808201527f696e6372656d656e74416e6453656e643a20494e56414c49445f4554485f414d60448201526313d5539560e21b6064820152608401610367565b610451565b34156104455760405162461bcd60e51b815260206004820152601e60248201527f696e6372656d656e74416e6453656e643a204554485f574954485f45524300006044820152606401610367565b61045183333084610464565b610459610318565b6103138383836104d5565b6040516001600160a01b03808516602483015283166044820152606481018290526104cf9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526104f9565b50505050565b6001600160a01b038316156104ef576103138383836105cb565b61031382826105fb565b600061054e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166107149092919063ffffffff16565b805190915015610313578080602001905181019061056c9190610a76565b6103135760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610367565b6040516001600160a01b03831660248201526044810182905261031390849063a9059cbb60e01b90606401610498565b8047101561064b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610367565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610698576040519150601f19603f3d011682016040523d82523d6000602084013e61069d565b606091505b50509050806103135760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610367565b6060610723848460008561072d565b90505b9392505050565b60608247101561078e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610367565b6001600160a01b0385163b6107e55760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610367565b600080866001600160a01b031685876040516108019190610a93565b60006040518083038185875af1925050503d806000811461083e576040519150601f19603f3d011682016040523d82523d6000602084013e610843565b606091505b509150915061085382828661085e565b979650505050505050565b6060831561086d575081610726565b82511561087d5782518084602001fd5b8160405162461bcd60e51b81526004016103679190610aaf565b80151581146108a557600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b838110156108d95781810151838201526020016108c1565b838111156104cf5750506000910152565b6000806000606084860312156108ff57600080fd5b835161090a81610897565b602085015190935061091b81610897565b604085015190925067ffffffffffffffff8082111561093957600080fd5b818601915086601f83011261094d57600080fd5b81518181111561095f5761095f6108a8565b604051601f8201601f19908116603f01168101908382118183101715610987576109876108a8565b816040528281528960208487010111156109a057600080fd5b6109b18360208301602088016108be565b80955050505050509250925092565b80356001600160a01b03811681146109d757600080fd5b919050565b6000602082840312156109ee57600080fd5b610726826109c0565b600060208284031215610a0957600080fd5b813561072681610897565b600080600060608486031215610a2957600080fd5b610a32846109c0565b9250610a40602085016109c0565b9150604084013590509250925092565b60008219821115610a7157634e487b7160e01b600052601160045260246000fd5b500190565b600060208284031215610a8857600080fd5b815161072681610897565b60008251610aa58184602087016108be565b9190910192915050565b6020815260008251806020840152610ace8160408501602087016108be565b601f01601f1916919091016040019291505056fea26469706673582212202d62ab9fe37ebfa9aa9c4d333b1d0c1d464b04486350eabf4b7eb09094f2cb1a64736f6c634300080b0033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Counter> {
    return super.deploy(overrides || {}) as Promise<Counter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  override connect(signer: Signer): Counter__factory {
    return super.connect(signer) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new utils.Interface(_abi) as CounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}