import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileHash } from './filehash.entity';
//#endregion

export const FileHashConfig = {
  name: "fileHash",
  annotations: [],
  fields: {
    hashType: {type: 'graph.fileHashType'},
    hashValue: {type: 'Edm.String'}
  }
} as EntityConfig<FileHash>;