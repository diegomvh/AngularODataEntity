import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
import { JsonModel } from './json.model';
import { EntityModel } from './entity.model';
import { JsonCollection } from './json.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WorkbookFunctionResult extends Entity {
  //#region ODataApi Properties
  error?: string;
  value?: Json;
  //#endregion
}