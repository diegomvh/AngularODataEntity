import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosVppAppAssignmentSettings } from './iosvppappassignmentsettings.entity';
//#endregion

export const IosVppAppAssignmentSettingsConfig = {
  name: "IosVppAppAssignmentSettings",
  base: "microsoft.graph.mobileAppAssignmentSettings",
  annotations: [],
  fields: {
    useDeviceLicensing: {type: 'Edm.Boolean', nullable: false},
    vpnConfigurationId: {type: 'Edm.String'}
  }
} as EntityConfig<IosVppAppAssignmentSettings>;