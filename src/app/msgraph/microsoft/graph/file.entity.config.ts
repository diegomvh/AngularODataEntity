import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { File } from './file.entity';
import { FileModel } from './file.model';
import { FileCollection } from './file.collection';
//#endregion

export const FileConfig = {
  name: "file",
  model: FileModel,
  collection: FileCollection,
  annotations: [],
  fields: {
    hashes: {type: 'graph.hashes'},
    mimeType: {type: 'Edm.String'},
    processingMetadata: {type: 'Edm.Boolean'}
  }
} as EntityConfig<File>;