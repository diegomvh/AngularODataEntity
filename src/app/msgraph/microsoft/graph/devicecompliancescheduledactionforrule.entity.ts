import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceComplianceActionItem } from './devicecomplianceactionitem.entity';
import { EntityModel } from './entity.model';
import { DeviceComplianceActionItemModel } from './devicecomplianceactionitem.model';
import { EntityCollection } from './entity.collection';
import { DeviceComplianceActionItemCollection } from './devicecomplianceactionitem.collection';
//#endregion

export interface DeviceComplianceScheduledActionForRule extends Entity {
  //#region ODataApi Properties
  ruleName?: string;
  scheduledActionConfigurations?: DeviceComplianceActionItem[];
  //#endregion
}