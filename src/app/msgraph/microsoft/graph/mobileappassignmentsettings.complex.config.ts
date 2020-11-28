import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.complex';
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
//#endregion

export const MobileAppAssignmentSettingsConfig = {
  name: "mobileAppAssignmentSettings",
  model: MobileAppAssignmentSettingsModel,
  collection: MobileAppAssignmentSettingsCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<MobileAppAssignmentSettings>;