import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileHash } from './filehash.complex';
import { FileHashModel } from './filehash.model';
import { FileHashCollection } from './filehash.collection';
//#endregion

export const FileHashConfig = {
  name: "fileHash",
  model: FileHashModel,
  collection: FileHashCollection,
  annotations: [],
  fields: {
    hashType: {type: 'graph.fileHashType'},
    hashValue: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<FileHash>;