import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDefenderAdvancedThreatProtectionConfiguration } from './windowsdefenderadvancedthreatprotectionconfiguration.entity';
//#endregion

export const WindowsDefenderAdvancedThreatProtectionConfigurationConfig = {
  name: "WindowsDefenderAdvancedThreatProtectionConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    allowSampleSharing: {type: 'Edm.Boolean', nullable: false},
    enableExpeditedTelemetryReporting: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WindowsDefenderAdvancedThreatProtectionConfiguration>;