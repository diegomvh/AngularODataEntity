import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WorkbookChartLineFormat extends Entity {
  //#region ODataApi Properties
  color?: string;
  //#endregion
}