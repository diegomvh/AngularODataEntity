import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosStoreAppAssignmentSettings } from './iosstoreappassignmentsettings.entity';
//#endregion

export const IosStoreAppAssignmentSettingsConfig = {
  name: "IosStoreAppAssignmentSettings",
  base: "microsoft.graph.mobileAppAssignmentSettings",
  annotations: [],
  fields: {
    vpnConfigurationId: {type: 'Edm.String'}
  }
} as EntityConfig<IosStoreAppAssignmentSettings>;