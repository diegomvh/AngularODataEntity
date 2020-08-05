import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface TelecomExpenseManagementPartner extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  url?: string;
  appAuthorized: boolean;
  enabled: boolean;
  lastConnectionDateTime: Date;
  //#endregion
}