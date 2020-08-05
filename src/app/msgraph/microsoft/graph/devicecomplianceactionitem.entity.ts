import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceComplianceActionType } from './devicecomplianceactiontype.enum';
//#endregion

export interface DeviceComplianceActionItem extends Entity {
  //#region ODataApi Properties
  gracePeriodHours: number;
  actionType: DeviceComplianceActionType;
  notificationTemplateId?: string;
  notificationMessageCCList?: string[];
  //#endregion
}