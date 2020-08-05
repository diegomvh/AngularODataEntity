import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CommsOperation } from './commsoperation.entity';
//#endregion

export const CommsOperationConfig = {
  name: "CommsOperation",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    status: {type: 'graph.operationStatus', nullable: false},
    clientContext: {type: 'Edm.String'},
    resultInfo: {type: 'graph.resultInfo'}
  }
} as EntityConfig<CommsOperation>;