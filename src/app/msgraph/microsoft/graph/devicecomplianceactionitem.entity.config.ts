import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceActionItem } from './devicecomplianceactionitem.entity';
import { DeviceComplianceActionItemModel } from './devicecomplianceactionitem.model';
import { DeviceComplianceActionItemCollection } from './devicecomplianceactionitem.collection';
//#endregion

export const DeviceComplianceActionItemConfig = {
  name: "deviceComplianceActionItem",
  base: "microsoft.graph.entity",
  model: DeviceComplianceActionItemModel,
  collection: DeviceComplianceActionItemCollection,
  annotations: [],
  fields: {
    actionType: {type: 'graph.deviceComplianceActionType', nullable: false},
    gracePeriodHours: {type: 'Edm.Int32', nullable: false},
    notificationMessageCCList: {type: 'Edm.String', collection: true},
    notificationTemplateId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceComplianceActionItem>;