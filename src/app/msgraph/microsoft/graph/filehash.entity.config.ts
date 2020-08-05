import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileHash } from './filehash.entity';
//#endregion

export const FileHashConfig = {
  name: "FileHash",
  annotations: [],
  fields: {
    hashType: {type: 'graph.fileHashType'},
    hashValue: {type: 'Edm.String'}
  }
} as EntityConfig<FileHash>;