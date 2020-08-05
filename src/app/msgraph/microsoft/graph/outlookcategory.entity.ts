import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { CategoryColor } from './categorycolor.enum';
//#endregion

export interface OutlookCategory extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  color?: CategoryColor;
  //#endregion
}