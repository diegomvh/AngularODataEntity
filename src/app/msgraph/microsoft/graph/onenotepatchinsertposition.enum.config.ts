import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePatchInsertPosition } from './onenotepatchinsertposition.enum';
//#endregion

export const OnenotePatchInsertPositionConfig = {
  name: "onenotePatchInsertPosition",
  members: OnenotePatchInsertPosition
} as EnumConfig<OnenotePatchInsertPosition>;