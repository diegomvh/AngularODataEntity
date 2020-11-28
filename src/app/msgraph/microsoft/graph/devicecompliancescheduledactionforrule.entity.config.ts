import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceScheduledActionForRule } from './devicecompliancescheduledactionforrule.entity';
import { DeviceComplianceScheduledActionForRuleModel } from './devicecompliancescheduledactionforrule.model';
import { DeviceComplianceScheduledActionForRuleCollection } from './devicecompliancescheduledactionforrule.collection';
//#endregion

export const DeviceComplianceScheduledActionForRuleConfig = {
  name: "deviceComplianceScheduledActionForRule",
  base: "microsoft.graph.entity",
  model: DeviceComplianceScheduledActionForRuleModel,
  collection: DeviceComplianceScheduledActionForRuleCollection,
  annotations: [],
  fields: {
    ruleName: {type: 'Edm.String'},
    scheduledActionConfigurations: {type: 'graph.deviceComplianceActionItem', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DeviceComplianceScheduledActionForRule>;