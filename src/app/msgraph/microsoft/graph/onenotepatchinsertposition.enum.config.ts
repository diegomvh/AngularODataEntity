import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePatchInsertPosition } from './onenotepatchinsertposition.enum';
//#endregion

export const OnenotePatchInsertPositionConfig = {
  name: "onenotePatchInsertPosition",
  members: OnenotePatchInsertPosition
} as EnumTypeConfig<OnenotePatchInsertPosition>;