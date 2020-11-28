import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosStoreAppAssignmentSettings } from './iosstoreappassignmentsettings.complex';
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
} as StructuredTypeConfig<IosStoreAppAssignmentSettings>;