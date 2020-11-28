import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface TelecomExpenseManagementPartner extends Entity {
  //#region ODataApi Properties
  appAuthorized: boolean;
  displayName?: string;
  enabled: boolean;
  lastConnectionDateTime: Date;
  url?: string;
  //#endregion
}