import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosStoreAppAssignmentSettings } from './iosstoreappassignmentsettings.entity';
import { IosStoreAppAssignmentSettingsModel } from './iosstoreappassignmentsettings.model';
import { IosStoreAppAssignmentSettingsCollection } from './iosstoreappassignmentsettings.collection';
//#endregion

export const IosStoreAppAssignmentSettingsConfig = {
  name: "iosStoreAppAssignmentSettings",
  base: "microsoft.graph.mobileAppAssignmentSettings",
  model: IosStoreAppAssignmentSettingsModel,
  collection: IosStoreAppAssignmentSettingsCollection,
  annotations: [],
  fields: {
    vpnConfigurationId: {type: 'Edm.String'}
  }
} as EntityConfig<IosStoreAppAssignmentSettings>;