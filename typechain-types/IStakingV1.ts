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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type ClaimStruct = {
  amount: BigNumberish;
  credits: BigNumberish;
  expiry: BigNumberish;
};

export type ClaimStructOutput = [BigNumber, BigNumber, BigNumber] & {
  amount: BigNumber;
  credits: BigNumber;
  expiry: BigNumber;
};

export interface IStakingV1Interface extends utils.Interface {
  functions: {
    "REWARD_TOKEN()": FunctionFragment;
    "STAKING_TOKEN()": FunctionFragment;
    "canBatchTransactions()": FunctionFragment;
    "claimWithdraw(address)": FunctionFragment;
    "coolDownInfo(address)": FunctionFragment;
    "instantUnstake(bool)": FunctionFragment;
    "sendWithdrawalRequests()": FunctionFragment;
    "stake(uint256,address)": FunctionFragment;
    "unstake(uint256,bool)": FunctionFragment;
    "warmUpInfo(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "REWARD_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STAKING_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "canBatchTransactions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimWithdraw",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "coolDownInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "instantUnstake",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sendWithdrawalRequests",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "warmUpInfo", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "REWARD_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STAKING_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canBatchTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coolDownInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "instantUnstake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendWithdrawalRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "warmUpInfo", data: BytesLike): Result;

  events: {};
}

export interface IStakingV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStakingV1Interface;

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
    REWARD_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    STAKING_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    canBatchTransactions(overrides?: CallOverrides): Promise<[boolean]>;

    claimWithdraw(
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    coolDownInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[ClaimStructOutput]>;

    instantUnstake(
      _trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendWithdrawalRequests(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      amount_: BigNumberish,
      trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    warmUpInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[ClaimStructOutput]>;
  };

  REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;

  STAKING_TOKEN(overrides?: CallOverrides): Promise<string>;

  canBatchTransactions(overrides?: CallOverrides): Promise<boolean>;

  claimWithdraw(
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  coolDownInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<ClaimStructOutput>;

  instantUnstake(
    _trigger: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendWithdrawalRequests(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    _amount: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    amount_: BigNumberish,
    trigger: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  warmUpInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<ClaimStructOutput>;

  callStatic: {
    REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;

    STAKING_TOKEN(overrides?: CallOverrides): Promise<string>;

    canBatchTransactions(overrides?: CallOverrides): Promise<boolean>;

    claimWithdraw(_recipient: string, overrides?: CallOverrides): Promise<void>;

    coolDownInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<ClaimStructOutput>;

    instantUnstake(_trigger: boolean, overrides?: CallOverrides): Promise<void>;

    sendWithdrawalRequests(overrides?: CallOverrides): Promise<void>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unstake(
      amount_: BigNumberish,
      trigger: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    warmUpInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<ClaimStructOutput>;
  };

  filters: {};

  estimateGas: {
    REWARD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    STAKING_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    canBatchTransactions(overrides?: CallOverrides): Promise<BigNumber>;

    claimWithdraw(
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    coolDownInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    instantUnstake(
      _trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendWithdrawalRequests(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      amount_: BigNumberish,
      trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    warmUpInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    REWARD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STAKING_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canBatchTransactions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimWithdraw(
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    coolDownInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    instantUnstake(
      _trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendWithdrawalRequests(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      amount_: BigNumberish,
      trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    warmUpInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
