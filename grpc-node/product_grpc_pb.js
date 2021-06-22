// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var product_pb = require('./product_pb.js');
var github_com_gogo_protobuf_gogoproto_gogo_pb = require('./github.com/gogo/protobuf/gogoproto/gogo_pb.js');

function serialize_productpb_GetRequest(arg) {
  if (!(arg instanceof product_pb.GetRequest)) {
    throw new Error('Expected argument of type productpb.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_productpb_GetRequest(buffer_arg) {
  return product_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_productpb_NewRequest(arg) {
  if (!(arg instanceof product_pb.NewRequest)) {
    throw new Error('Expected argument of type productpb.NewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_productpb_NewRequest(buffer_arg) {
  return product_pb.NewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_productpb_Product(arg) {
  if (!(arg instanceof product_pb.Product)) {
    throw new Error('Expected argument of type productpb.Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_productpb_Product(buffer_arg) {
  return product_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  new: {
    path: '/productpb.ProductService/New',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.NewRequest,
    responseType: product_pb.Product,
    requestSerialize: serialize_productpb_NewRequest,
    requestDeserialize: deserialize_productpb_NewRequest,
    responseSerialize: serialize_productpb_Product,
    responseDeserialize: deserialize_productpb_Product,
  },
  get: {
    path: '/productpb.ProductService/Get',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.GetRequest,
    responseType: product_pb.Product,
    requestSerialize: serialize_productpb_GetRequest,
    requestDeserialize: deserialize_productpb_GetRequest,
    responseSerialize: serialize_productpb_Product,
    responseDeserialize: deserialize_productpb_Product,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
