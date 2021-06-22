// package: identitypb
// file: identity/identitypb/identity.proto

import * as jspb from "google-protobuf";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../github.com/gogo/protobuf/gogoproto/gogo_pb";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Identity extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  clearAttributesList(): void;
  getAttributesList(): Array<string>;
  setAttributesList(value: Array<string>): void;
  addAttributes(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  clearImagesList(): void;
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  addImages(value: string, index?: number): string;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  getUrl(): string;
  setUrl(value: string): void;

  getCreated(): number;
  setCreated(value: number): void;

  getUpdated(): number;
  setUpdated(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identity.AsObject;
  static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identity;
  static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
}

export namespace Identity {
  export type AsObject = {
    id: string,
    name: string,
    active: boolean,
    attributesList: Array<string>,
    description: string,
    imagesList: Array<string>,
    metadataMap: Array<[string, string]>,
    url: string,
    created: number,
    updated: number,
  }
}

export class NewRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  clearAttributesList(): void;
  getAttributesList(): Array<string>;
  setAttributesList(value: Array<string>): void;
  addAttributes(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  clearImagesList(): void;
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  addImages(value: string, index?: number): string;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewRequest): NewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRequest;
  static deserializeBinaryFromReader(message: NewRequest, reader: jspb.BinaryReader): NewRequest;
}

export namespace NewRequest {
  export type AsObject = {
    name: string,
    active: boolean,
    attributesList: Array<string>,
    description: string,
    imagesList: Array<string>,
    metadataMap: Array<[string, string]>,
    url: string,
  }
}

export class GetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    id: string,
  }
}

