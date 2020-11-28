import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface OutlookItem extends Entity {
  //#region ODataApi Properties
  categories?: string[];
  changeKey?: string;
  createdDateTime?: Date;
  lastModifiedDateTime?: Date;
  //#endregion
}