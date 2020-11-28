import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceComplianceActionType } from './devicecomplianceactiontype.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceComplianceActionItem extends Entity {
  //#region ODataApi Properties
  actionType: DeviceComplianceActionType;
  gracePeriodHours: number;
  notificationMessageCCList?: string[];
  notificationTemplateId?: string;
  //#endregion
}