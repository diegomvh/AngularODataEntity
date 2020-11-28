import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsTabConfiguration } from './teamstabconfiguration.complex';
import { TeamsTabConfigurationModel } from './teamstabconfiguration.model';
import { TeamsTabConfigurationCollection } from './teamstabconfiguration.collection';
//#endregion

export const TeamsTabConfigurationConfig = {
  name: "teamsTabConfiguration",
  open: true,
  model: TeamsTabConfigurationModel,
  collection: TeamsTabConfigurationCollection,
  annotations: [],
  fields: {
    contentUrl: {type: 'Edm.String'},
    entityId: {type: 'Edm.String'},
    removeUrl: {type: 'Edm.String'},
    websiteUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TeamsTabConfiguration>;