import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileEncryptionInfo } from './fileencryptioninfo.complex';
import { FileEncryptionInfoModel } from './fileencryptioninfo.model';
import { FileEncryptionInfoCollection } from './fileencryptioninfo.collection';
//#endregion

export const FileEncryptionInfoConfig = {
  name: "fileEncryptionInfo",
  model: FileEncryptionInfoModel,
  collection: FileEncryptionInfoCollection,
  annotations: [],
  fields: {
    encryptionKey: {type: 'Edm.Binary'},
    fileDigest: {type: 'Edm.Binary'},
    fileDigestAlgorithm: {type: 'Edm.String'},
    initializationVector: {type: 'Edm.Binary'},
    mac: {type: 'Edm.Binary'},
    macKey: {type: 'Edm.Binary'},
    profileIdentifier: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<FileEncryptionInfo>;