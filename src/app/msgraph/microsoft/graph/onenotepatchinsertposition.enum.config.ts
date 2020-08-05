import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePatchInsertPosition } from './onenotepatchinsertposition.enum';
//#endregion

export const OnenotePatchInsertPositionConfig = {
  name: "OnenotePatchInsertPosition",
  members: OnenotePatchInsertPosition
} as EnumConfig<OnenotePatchInsertPosition>;