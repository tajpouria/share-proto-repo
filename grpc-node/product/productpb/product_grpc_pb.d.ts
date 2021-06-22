// GENERATED CODE -- DO NOT EDIT!

// package: productpb
// file: product/productpb/product.proto

import * as product_productpb_product_pb from "../../product/productpb/product_pb";
import * as grpc from "grpc";

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  new: grpc.MethodDefinition<product_productpb_product_pb.NewRequest, product_productpb_product_pb.Product>;
  get: grpc.MethodDefinition<product_productpb_product_pb.GetRequest, product_productpb_product_pb.Product>;
}

export const ProductServiceService: IProductServiceService;

export interface IProductServiceServer extends grpc.UntypedServiceImplementation {
  new: grpc.handleUnaryCall<product_productpb_product_pb.NewRequest, product_productpb_product_pb.Product>;
  get: grpc.handleUnaryCall<product_productpb_product_pb.GetRequest, product_productpb_product_pb.Product>;
}

export class ProductServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  new(argument: product_productpb_product_pb.NewRequest, callback: grpc.requestCallback<product_productpb_product_pb.Product>): grpc.ClientUnaryCall;
  new(argument: product_productpb_product_pb.NewRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<product_productpb_product_pb.Product>): grpc.ClientUnaryCall;
  new(argument: product_productpb_product_pb.NewRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<product_productpb_product_pb.Product>): grpc.ClientUnaryCall;
  get(argument: product_productpb_product_pb.GetRequest, callback: grpc.requestCallback<product_productpb_product_pb.Product>): grpc.ClientUnaryCall;
  get(argument: product_productpb_product_pb.GetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<product_productpb_product_pb.Product>): grpc.ClientUnaryCall;
  get(argument: product_productpb_product_pb.GetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<product_productpb_product_pb.Product>): grpc.ClientUnaryCall;
}
