import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceComplianceActionItem } from './devicecomplianceactionitem.entity';
//#endregion

export interface DeviceComplianceScheduledActionForRule extends Entity {
  //#region ODataApi Properties
  ruleName?: string;
  scheduledActionConfigurations?: DeviceComplianceActionItem[];
  //#endregion
}