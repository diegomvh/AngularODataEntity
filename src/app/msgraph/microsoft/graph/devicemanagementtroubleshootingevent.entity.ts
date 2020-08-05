import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface DeviceManagementTroubleshootingEvent extends Entity {
  //#region ODataApi Properties
  eventDateTime: Date;
  correlationId?: string;
  //#endregion
}