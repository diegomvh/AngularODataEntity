import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RemoteLockActionResult } from './remotelockactionresult.entity';
//#endregion

export const RemoteLockActionResultConfig = {
  name: "RemoteLockActionResult",
  base: "microsoft.graph.deviceActionResult",
  annotations: [],
  fields: {
    unlockPin: {type: 'Edm.String'}
  }
} as EntityConfig<RemoteLockActionResult>;