import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MicrosoftStoreForBusinessAppAssignmentSettings } from './microsoftstoreforbusinessappassignmentsettings.entity';
//#endregion

export const MicrosoftStoreForBusinessAppAssignmentSettingsConfig = {
  name: "microsoftStoreForBusinessAppAssignmentSettings",
  base: "microsoft.graph.mobileAppAssignmentSettings",
  annotations: [],
  fields: {
    useDeviceContext: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<MicrosoftStoreForBusinessAppAssignmentSettings>;