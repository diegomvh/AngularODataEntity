import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.entity';
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
} as EntityConfig<MobileAppAssignmentSettings>;