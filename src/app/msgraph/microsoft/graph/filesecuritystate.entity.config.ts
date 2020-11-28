import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileSecurityState } from './filesecuritystate.entity';
import { FileSecurityStateModel } from './filesecuritystate.model';
import { FileSecurityStateCollection } from './filesecuritystate.collection';
//#endregion

export const FileSecurityStateConfig = {
  name: "fileSecurityState",
  model: FileSecurityStateModel,
  collection: FileSecurityStateCollection,
  annotations: [],
  fields: {
    fileHash: {type: 'graph.fileHash'},
    name: {type: 'Edm.String'},
    path: {type: 'Edm.String'},
    riskScore: {type: 'Edm.String'}
  }
} as EntityConfig<FileSecurityState>;