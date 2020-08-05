import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileSecurityState } from './filesecuritystate.entity';
//#endregion

export const FileSecurityStateConfig = {
  name: "FileSecurityState",
  annotations: [],
  fields: {
    fileHash: {type: 'graph.fileHash'},
    name: {type: 'Edm.String'},
    path: {type: 'Edm.String'},
    riskScore: {type: 'Edm.String'}
  }
} as EntityConfig<FileSecurityState>;