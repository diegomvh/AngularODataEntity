import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceScheduledActionForRule } from './devicecompliancescheduledactionforrule.entity';
//#endregion

export const DeviceComplianceScheduledActionForRuleConfig = {
  name: "DeviceComplianceScheduledActionForRule",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    ruleName: {type: 'Edm.String'},
    scheduledActionConfigurations: {type: 'graph.deviceComplianceActionItem', collection: true, navigation: true}
  }
} as EntityConfig<DeviceComplianceScheduledActionForRule>;