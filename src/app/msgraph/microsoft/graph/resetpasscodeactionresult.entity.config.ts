﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResetPasscodeActionResult } from './resetpasscodeactionresult.entity';
//#endregion

export const ResetPasscodeActionResultConfig = {
  name: "ResetPasscodeActionResult",
  base: "microsoft.graph.deviceActionResult",
  annotations: [],
  fields: {
    passcode: {type: 'Edm.String'}
  }
} as EntityConfig<ResetPasscodeActionResult>;