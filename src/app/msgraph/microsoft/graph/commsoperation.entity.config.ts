import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CommsOperation } from './commsoperation.entity';
import { CommsOperationModel } from './commsoperation.model';
import { CommsOperationCollection } from './commsoperation.collection';
//#endregion

export const CommsOperationConfig = {
  name: "commsOperation",
  base: "microsoft.graph.entity",
  open: true,
  model: CommsOperationModel,
  collection: CommsOperationCollection,
  annotations: [],
  fields: {
    clientContext: {type: 'Edm.String'},
    resultInfo: {type: 'graph.resultInfo'},
    status: {type: 'graph.operationStatus', nullable: false}
  }
} as EntityConfig<CommsOperation>;