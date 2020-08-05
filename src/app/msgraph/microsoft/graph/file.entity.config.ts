import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { File } from './file.entity';
//#endregion

export const FileConfig = {
  name: "file",
  annotations: [],
  fields: {
    hashes: {type: 'graph.hashes'},
    mimeType: {type: 'Edm.String'},
    processingMetadata: {type: 'Edm.Boolean'}
  }
} as EntityConfig<File>;