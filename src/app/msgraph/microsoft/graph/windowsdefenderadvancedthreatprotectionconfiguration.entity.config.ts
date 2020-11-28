import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDefenderAdvancedThreatProtectionConfiguration } from './windowsdefenderadvancedthreatprotectionconfiguration.entity';
import { WindowsDefenderAdvancedThreatProtectionConfigurationModel } from './windowsdefenderadvancedthreatprotectionconfiguration.model';
import { WindowsDefenderAdvancedThreatProtectionConfigurationCollection } from './windowsdefenderadvancedthreatprotectionconfiguration.collection';
//#endregion

export const WindowsDefenderAdvancedThreatProtectionConfigurationConfig = {
  name: "windowsDefenderAdvancedThreatProtectionConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: WindowsDefenderAdvancedThreatProtectionConfigurationModel,
  collection: WindowsDefenderAdvancedThreatProtectionConfigurationCollection,
  annotations: [],
  fields: {
    allowSampleSharing: {type: 'Edm.Boolean', nullable: false},
    enableExpeditedTelemetryReporting: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WindowsDefenderAdvancedThreatProtectionConfiguration>;