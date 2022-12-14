/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface AssetSideInterface extends utils.Interface {
  functions: {
    "acceptLoan(bytes32,bytes32)": FunctionFragment;
    "askForLoan(address,uint256,address,bytes32,string,uint256)": FunctionFragment;
    "computeContractId(address,address,uint256)": FunctionFragment;
    "getContract1(bytes32)": FunctionFragment;
    "getContract2(bytes32)": FunctionFragment;
    "giveLoan(bytes32,bytes32,string)": FunctionFragment;
    "loanDefault(bytes32,bytes32)": FunctionFragment;
    "noTakersForLoan(bytes32)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "releaseCollatoral(bytes32,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptLoan"
      | "askForLoan"
      | "computeContractId"
      | "getContract1"
      | "getContract2"
      | "giveLoan"
      | "loanDefault"
      | "noTakersForLoan"
      | "onERC721Received"
      | "releaseCollatoral"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptLoan",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "askForLoan",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeContractId",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getContract1",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getContract2",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "giveLoan",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "loanDefault",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "noTakersForLoan",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseCollatoral",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "acceptLoan", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "askForLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "computeContractId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContract1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContract2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "giveLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "loanDefault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "noTakersForLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseCollatoral",
    data: BytesLike
  ): Result;

  events: {
    "LoanGiven(address,address,uint256,bytes32)": EventFragment;
    "LoanRequest(address,address,uint256,bytes32)": EventFragment;
    "Received()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LoanGiven"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LoanRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
}

export interface LoanGivenEventObject {
  bobsWallet: string;
  asset: string;
  status: BigNumber;
  contractId: string;
}
export type LoanGivenEvent = TypedEvent<
  [string, string, BigNumber, string],
  LoanGivenEventObject
>;

export type LoanGivenEventFilter = TypedEventFilter<LoanGivenEvent>;

export interface LoanRequestEventObject {
  alexWallet: string;
  asset: string;
  status: BigNumber;
  contractId: string;
}
export type LoanRequestEvent = TypedEvent<
  [string, string, BigNumber, string],
  LoanRequestEventObject
>;

export type LoanRequestEventFilter = TypedEventFilter<LoanRequestEvent>;

export interface ReceivedEventObject {}
export type ReceivedEvent = TypedEvent<[], ReceivedEventObject>;

export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;

export interface AssetSide extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssetSideInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptLoan(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage1: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    askForLoan(
      _asset: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _assetOwner: PromiseOrValue<string>,
      _secret1Hash: PromiseOrValue<BytesLike>,
      _secret1Encrypted: PromiseOrValue<string>,
      _lockedTill: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    computeContractId(
      _alexWallet: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getContract1(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number
      ] & {
        secret1encrypted: string;
        secret2encrypted: string;
        assetContract: string;
        tokenId: BigNumber;
        loanAmount: BigNumber;
        loanInterest: BigNumber;
        lenderDeposit: BigNumber;
        bobsWalet: string;
        alexWallet: string;
        status: number;
      }
    >;

    getContract2(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        secret1Hash: string;
        secret2Hash: string;
        preimage1: string;
        preimage2: string;
        reqTill: BigNumber;
        acceptTill: BigNumber;
        lockedTill: BigNumber;
        releaseTill: BigNumber;
      }
    >;

    giveLoan(
      _contractId: PromiseOrValue<BytesLike>,
      _secret2Hash: PromiseOrValue<BytesLike>,
      _secret2Encrypted: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    loanDefault(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    noTakersForLoan(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    releaseCollatoral(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptLoan(
    _contractId: PromiseOrValue<BytesLike>,
    _preImage1: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  askForLoan(
    _asset: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _assetOwner: PromiseOrValue<string>,
    _secret1Hash: PromiseOrValue<BytesLike>,
    _secret1Encrypted: PromiseOrValue<string>,
    _lockedTill: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  computeContractId(
    _alexWallet: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getContract1(
    _contractId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      number
    ] & {
      secret1encrypted: string;
      secret2encrypted: string;
      assetContract: string;
      tokenId: BigNumber;
      loanAmount: BigNumber;
      loanInterest: BigNumber;
      lenderDeposit: BigNumber;
      bobsWalet: string;
      alexWallet: string;
      status: number;
    }
  >;

  getContract2(
    _contractId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      secret1Hash: string;
      secret2Hash: string;
      preimage1: string;
      preimage2: string;
      reqTill: BigNumber;
      acceptTill: BigNumber;
      lockedTill: BigNumber;
      releaseTill: BigNumber;
    }
  >;

  giveLoan(
    _contractId: PromiseOrValue<BytesLike>,
    _secret2Hash: PromiseOrValue<BytesLike>,
    _secret2Encrypted: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  loanDefault(
    _contractId: PromiseOrValue<BytesLike>,
    _preImage2: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  noTakersForLoan(
    _contractId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    _operator: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  releaseCollatoral(
    _contractId: PromiseOrValue<BytesLike>,
    _preImage2: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptLoan(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    askForLoan(
      _asset: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _assetOwner: PromiseOrValue<string>,
      _secret1Hash: PromiseOrValue<BytesLike>,
      _secret1Encrypted: PromiseOrValue<string>,
      _lockedTill: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    computeContractId(
      _alexWallet: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getContract1(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number
      ] & {
        secret1encrypted: string;
        secret2encrypted: string;
        assetContract: string;
        tokenId: BigNumber;
        loanAmount: BigNumber;
        loanInterest: BigNumber;
        lenderDeposit: BigNumber;
        bobsWalet: string;
        alexWallet: string;
        status: number;
      }
    >;

    getContract2(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        secret1Hash: string;
        secret2Hash: string;
        preimage1: string;
        preimage2: string;
        reqTill: BigNumber;
        acceptTill: BigNumber;
        lockedTill: BigNumber;
        releaseTill: BigNumber;
      }
    >;

    giveLoan(
      _contractId: PromiseOrValue<BytesLike>,
      _secret2Hash: PromiseOrValue<BytesLike>,
      _secret2Encrypted: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    loanDefault(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    noTakersForLoan(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC721Received(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    releaseCollatoral(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LoanGiven(address,address,uint256,bytes32)"(
      bobsWallet?: PromiseOrValue<string> | null,
      asset?: PromiseOrValue<string> | null,
      status?: PromiseOrValue<BigNumberish> | null,
      contractId?: null
    ): LoanGivenEventFilter;
    LoanGiven(
      bobsWallet?: PromiseOrValue<string> | null,
      asset?: PromiseOrValue<string> | null,
      status?: PromiseOrValue<BigNumberish> | null,
      contractId?: null
    ): LoanGivenEventFilter;

    "LoanRequest(address,address,uint256,bytes32)"(
      alexWallet?: PromiseOrValue<string> | null,
      asset?: PromiseOrValue<string> | null,
      status?: PromiseOrValue<BigNumberish> | null,
      contractId?: null
    ): LoanRequestEventFilter;
    LoanRequest(
      alexWallet?: PromiseOrValue<string> | null,
      asset?: PromiseOrValue<string> | null,
      status?: PromiseOrValue<BigNumberish> | null,
      contractId?: null
    ): LoanRequestEventFilter;

    "Received()"(): ReceivedEventFilter;
    Received(): ReceivedEventFilter;
  };

  estimateGas: {
    acceptLoan(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage1: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    askForLoan(
      _asset: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _assetOwner: PromiseOrValue<string>,
      _secret1Hash: PromiseOrValue<BytesLike>,
      _secret1Encrypted: PromiseOrValue<string>,
      _lockedTill: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    computeContractId(
      _alexWallet: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContract1(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContract2(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    giveLoan(
      _contractId: PromiseOrValue<BytesLike>,
      _secret2Hash: PromiseOrValue<BytesLike>,
      _secret2Encrypted: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    loanDefault(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    noTakersForLoan(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    releaseCollatoral(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptLoan(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage1: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    askForLoan(
      _asset: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _assetOwner: PromiseOrValue<string>,
      _secret1Hash: PromiseOrValue<BytesLike>,
      _secret1Encrypted: PromiseOrValue<string>,
      _lockedTill: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    computeContractId(
      _alexWallet: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContract1(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContract2(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    giveLoan(
      _contractId: PromiseOrValue<BytesLike>,
      _secret2Hash: PromiseOrValue<BytesLike>,
      _secret2Encrypted: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    loanDefault(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    noTakersForLoan(
      _contractId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    releaseCollatoral(
      _contractId: PromiseOrValue<BytesLike>,
      _preImage2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
