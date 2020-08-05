import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePatchActionType } from './onenotepatchactiontype.enum';
//#endregion

export const OnenotePatchActionTypeConfig = {
  name: "onenotePatchActionType",
  members: OnenotePatchActionType
} as EnumConfig<OnenotePatchActionType>;