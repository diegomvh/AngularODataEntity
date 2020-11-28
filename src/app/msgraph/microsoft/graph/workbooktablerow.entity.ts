import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
import { JsonModel } from './json.model';
import { EntityModel } from './entity.model';
import { JsonCollection } from './json.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WorkbookTableRow extends Entity {
  //#region ODataApi Properties
  index: number;
  values?: Json;
  //#endregion
}