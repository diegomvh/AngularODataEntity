import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosVppAppAssignmentSettings } from './iosvppappassignmentsettings.entity';
import { IosVppAppAssignmentSettingsModel } from './iosvppappassignmentsettings.model';
import { IosVppAppAssignmentSettingsCollection } from './iosvppappassignmentsettings.collection';
//#endregion

export const IosVppAppAssignmentSettingsConfig = {
  name: "iosVppAppAssignmentSettings",
  base: "microsoft.graph.mobileAppAssignmentSettings",
  model: IosVppAppAssignmentSettingsModel,
  collection: IosVppAppAssignmentSettingsCollection,
  annotations: [],
  fields: {
    useDeviceLicensing: {type: 'Edm.Boolean', nullable: false},
    vpnConfigurationId: {type: 'Edm.String'}
  }
} as EntityConfig<IosVppAppAssignmentSettings>;