import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RemoteLockActionResult } from './remotelockactionresult.entity';
import { RemoteLockActionResultModel } from './remotelockactionresult.model';
import { RemoteLockActionResultCollection } from './remotelockactionresult.collection';
//#endregion

export const RemoteLockActionResultConfig = {
  name: "remoteLockActionResult",
  base: "microsoft.graph.deviceActionResult",
  model: RemoteLockActionResultModel,
  collection: RemoteLockActionResultCollection,
  annotations: [],
  fields: {
    unlockPin: {type: 'Edm.String'}
  }
} as EntityConfig<RemoteLockActionResult>;