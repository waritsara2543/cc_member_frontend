/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface AdminInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addAdmin"
      | "admins"
      | "changeRootAdmin"
      | "isAdmin"
      | "removeAdmin"
      | "rootAdmin"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "RootAdminChanged"): EventFragment;

  encodeFunctionData(
    functionFragment: "addAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "admins", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "changeRootAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "rootAdmin", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeRootAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rootAdmin", data: BytesLike): Result;
}

export namespace RootAdminChangedEvent {
  export type InputTuple = [oldRoot: AddressLike, newRoot: AddressLike];
  export type OutputTuple = [oldRoot: string, newRoot: string];
  export interface OutputObject {
    oldRoot: string;
    newRoot: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Admin extends BaseContract {
  connect(runner?: ContractRunner | null): Admin;
  waitForDeployment(): Promise<this>;

  interface: AdminInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  admins: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  changeRootAdmin: TypedContractMethod<
    [_newRootAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  isAdmin: TypedContractMethod<[_admin: AddressLike], [boolean], "view">;

  removeAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  rootAdmin: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "admins"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "changeRootAdmin"
  ): TypedContractMethod<[_newRootAdmin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rootAdmin"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "RootAdminChanged"
  ): TypedContractEvent<
    RootAdminChangedEvent.InputTuple,
    RootAdminChangedEvent.OutputTuple,
    RootAdminChangedEvent.OutputObject
  >;

  filters: {
    "RootAdminChanged(address,address)": TypedContractEvent<
      RootAdminChangedEvent.InputTuple,
      RootAdminChangedEvent.OutputTuple,
      RootAdminChangedEvent.OutputObject
    >;
    RootAdminChanged: TypedContractEvent<
      RootAdminChangedEvent.InputTuple,
      RootAdminChangedEvent.OutputTuple,
      RootAdminChangedEvent.OutputObject
    >;
  };
}
