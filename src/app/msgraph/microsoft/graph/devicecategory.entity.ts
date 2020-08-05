import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface DeviceCategory extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  description?: string;
  //#endregion
}