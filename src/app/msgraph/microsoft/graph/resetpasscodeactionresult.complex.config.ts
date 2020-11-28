import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResetPasscodeActionResult } from './resetpasscodeactionresult.complex';
import { ResetPasscodeActionResultModel } from './resetpasscodeactionresult.model';
import { ResetPasscodeActionResultCollection } from './resetpasscodeactionresult.collection';
//#endregion

export const ResetPasscodeActionResultConfig = {
  name: "resetPasscodeActionResult",
  base: "microsoft.graph.deviceActionResult",
  model: ResetPasscodeActionResultModel,
  collection: ResetPasscodeActionResultCollection,
  annotations: [],
  fields: {
    passcode: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ResetPasscodeActionResult>;