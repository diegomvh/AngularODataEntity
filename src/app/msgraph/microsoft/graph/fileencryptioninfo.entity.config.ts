import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileEncryptionInfo } from './fileencryptioninfo.entity';
//#endregion

export const FileEncryptionInfoConfig = {
  name: "fileEncryptionInfo",
  annotations: [],
  fields: {
    encryptionKey: {type: 'Edm.Binary'},
    initializationVector: {type: 'Edm.Binary'},
    mac: {type: 'Edm.Binary'},
    macKey: {type: 'Edm.Binary'},
    profileIdentifier: {type: 'Edm.String'},
    fileDigest: {type: 'Edm.Binary'},
    fileDigestAlgorithm: {type: 'Edm.String'}
  }
} as EntityConfig<FileEncryptionInfo>;