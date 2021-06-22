// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var identity_identitypb_identity_pb = require('../../identity/identitypb/identity_pb.js');
var github_com_gogo_protobuf_gogoproto_gogo_pb = require('../../github.com/gogo/protobuf/gogoproto/gogo_pb.js');

function serialize_identitypb_GetRequest(arg) {
  if (!(arg instanceof identity_identitypb_identity_pb.GetRequest)) {
    throw new Error('Expected argument of type identitypb.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_identitypb_GetRequest(buffer_arg) {
  return identity_identitypb_identity_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_identitypb_Identity(arg) {
  if (!(arg instanceof identity_identitypb_identity_pb.Identity)) {
    throw new Error('Expected argument of type identitypb.Identity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_identitypb_Identity(buffer_arg) {
  return identity_identitypb_identity_pb.Identity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_identitypb_NewRequest(arg) {
  if (!(arg instanceof identity_identitypb_identity_pb.NewRequest)) {
    throw new Error('Expected argument of type identitypb.NewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_identitypb_NewRequest(buffer_arg) {
  return identity_identitypb_identity_pb.NewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var IdentityServiceService = exports.IdentityServiceService = {
  new: {
    path: '/identitypb.IdentityService/New',
    requestStream: false,
    responseStream: false,
    requestType: identity_identitypb_identity_pb.NewRequest,
    responseType: identity_identitypb_identity_pb.Identity,
    requestSerialize: serialize_identitypb_NewRequest,
    requestDeserialize: deserialize_identitypb_NewRequest,
    responseSerialize: serialize_identitypb_Identity,
    responseDeserialize: deserialize_identitypb_Identity,
  },
  get: {
    path: '/identitypb.IdentityService/Get',
    requestStream: false,
    responseStream: false,
    requestType: identity_identitypb_identity_pb.GetRequest,
    responseType: identity_identitypb_identity_pb.Identity,
    requestSerialize: serialize_identitypb_GetRequest,
    requestDeserialize: deserialize_identitypb_GetRequest,
    responseSerialize: serialize_identitypb_Identity,
    responseDeserialize: deserialize_identitypb_Identity,
  },
};

exports.IdentityServiceClient = grpc.makeGenericClientConstructor(IdentityServiceService);
