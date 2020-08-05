import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceActionItem } from './devicecomplianceactionitem.entity';
//#endregion

export const DeviceComplianceActionItemConfig = {
  name: "deviceComplianceActionItem",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    gracePeriodHours: {type: 'Edm.Int32', nullable: false},
    actionType: {type: 'graph.deviceComplianceActionType', nullable: false},
    notificationTemplateId: {type: 'Edm.String'},
    notificationMessageCCList: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<DeviceComplianceActionItem>;