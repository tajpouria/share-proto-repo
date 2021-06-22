// GENERATED CODE -- DO NOT EDIT!

// package: identitypb
// file: identity.proto

import * as identity_pb from "./identity_pb";
import * as grpc from "grpc";

interface IIdentityServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  new: grpc.MethodDefinition<identity_pb.NewRequest, identity_pb.Identity>;
  get: grpc.MethodDefinition<identity_pb.GetRequest, identity_pb.Identity>;
}

export const IdentityServiceService: IIdentityServiceService;

export interface IIdentityServiceServer extends grpc.UntypedServiceImplementation {
  new: grpc.handleUnaryCall<identity_pb.NewRequest, identity_pb.Identity>;
  get: grpc.handleUnaryCall<identity_pb.GetRequest, identity_pb.Identity>;
}

export class IdentityServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  new(argument: identity_pb.NewRequest, callback: grpc.requestCallback<identity_pb.Identity>): grpc.ClientUnaryCall;
  new(argument: identity_pb.NewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<identity_pb.Identity>): grpc.ClientUnaryCall;
  new(argument: identity_pb.NewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<identity_pb.Identity>): grpc.ClientUnaryCall;
  get(argument: identity_pb.GetRequest, callback: grpc.requestCallback<identity_pb.Identity>): grpc.ClientUnaryCall;
  get(argument: identity_pb.GetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<identity_pb.Identity>): grpc.ClientUnaryCall;
  get(argument: identity_pb.GetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<identity_pb.Identity>): grpc.ClientUnaryCall;
}
