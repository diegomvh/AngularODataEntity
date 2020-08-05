import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface OutlookItem extends Entity {
  //#region ODataApi Properties
  createdDateTime?: Date;
  lastModifiedDateTime?: Date;
  changeKey?: string;
  categories?: string[];
  //#endregion
}