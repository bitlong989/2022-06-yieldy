/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type BatchStruct = { stakingContract: string; canBatch: boolean };

export type BatchStructOutput = [string, boolean] & {
  stakingContract: string;
  canBatch: boolean;
};

export interface BatchRequestsInterface extends utils.Interface {
  functions: {
    "addAddress(address)": FunctionFragment;
    "canBatchContractByIndex(uint256)": FunctionFragment;
    "canBatchContracts()": FunctionFragment;
    "contracts(uint256)": FunctionFragment;
    "getAddressByIndex(uint256)": FunctionFragment;
    "getAddresses()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeAddress(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sendWithdrawalRequests()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addAddress", values: [string]): string;
  encodeFunctionData(
    functionFragment: "canBatchContractByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "canBatchContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contracts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddressByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendWithdrawalRequests",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canBatchContractByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canBatchContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "contracts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAddressByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendWithdrawalRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface BatchRequests extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BatchRequestsInterface;

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
    addAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canBatchContractByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;

    canBatchContracts(
      overrides?: CallOverrides
    ): Promise<[BatchStructOutput[]]>;

    contracts(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    getAddressByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAddresses(overrides?: CallOverrides): Promise<[string[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendWithdrawalRequests(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAddress(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canBatchContractByIndex(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, boolean]>;

  canBatchContracts(overrides?: CallOverrides): Promise<BatchStructOutput[]>;

  contracts(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getAddressByIndex(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getAddresses(overrides?: CallOverrides): Promise<string[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeAddress(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendWithdrawalRequests(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAddress(_address: string, overrides?: CallOverrides): Promise<void>;

    canBatchContractByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;

    canBatchContracts(overrides?: CallOverrides): Promise<BatchStructOutput[]>;

    contracts(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getAddressByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getAddresses(overrides?: CallOverrides): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeAddress(_address: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sendWithdrawalRequests(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canBatchContractByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canBatchContracts(overrides?: CallOverrides): Promise<BigNumber>;

    contracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddressByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendWithdrawalRequests(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canBatchContractByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canBatchContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddressByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendWithdrawalRequests(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
