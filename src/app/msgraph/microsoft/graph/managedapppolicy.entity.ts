import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface ManagedAppPolicy extends Entity {
  //#region ODataApi Properties
  displayName: string;
  description?: string;
  createdDateTime: Date;
  lastModifiedDateTime: Date;
  version?: string;
  //#endregion
}