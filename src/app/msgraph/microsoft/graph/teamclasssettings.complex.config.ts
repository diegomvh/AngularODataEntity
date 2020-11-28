import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamClassSettings } from './teamclasssettings.complex';
import { TeamClassSettingsModel } from './teamclasssettings.model';
import { TeamClassSettingsCollection } from './teamclasssettings.collection';
//#endregion

export const TeamClassSettingsConfig = {
  name: "teamClassSettings",
  model: TeamClassSettingsModel,
  collection: TeamClassSettingsCollection,
  annotations: [],
  fields: {
    notifyGuardiansAboutAssignments: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TeamClassSettings>;