import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface GroupLifecyclePolicy extends Entity {
  //#region ODataApi Properties
  groupLifetimeInDays?: number;
  managedGroupTypes?: string;
  alternateNotificationEmails?: string;
  //#endregion
}