import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Process } from './process.entity';
//#endregion

export const ProcessConfig = {
  name: "process",
  annotations: [],
  fields: {
    accountName: {type: 'Edm.String'},
    commandLine: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    fileHash: {type: 'graph.fileHash'},
    integrityLevel: {type: 'graph.processIntegrityLevel'},
    isElevated: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    parentProcessCreatedDateTime: {type: 'Edm.DateTimeOffset'},
    parentProcessId: {type: 'Edm.Int32'},
    parentProcessName: {type: 'Edm.String'},
    path: {type: 'Edm.String'},
    processId: {type: 'Edm.Int32'}
  }
} as EntityConfig<Process>;