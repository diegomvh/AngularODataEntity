import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { CategoryColor } from './categorycolor.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface OutlookCategory extends Entity {
  //#region ODataApi Properties
  color?: CategoryColor;
  displayName?: string;
  //#endregion
}