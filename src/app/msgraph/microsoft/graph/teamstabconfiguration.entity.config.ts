import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsTabConfiguration } from './teamstabconfiguration.entity';
//#endregion

export const TeamsTabConfigurationConfig = {
  name: "TeamsTabConfiguration",
  open: true,
  annotations: [],
  fields: {
    entityId: {type: 'Edm.String'},
    contentUrl: {type: 'Edm.String'},
    removeUrl: {type: 'Edm.String'},
    websiteUrl: {type: 'Edm.String'}
  }
} as EntityConfig<TeamsTabConfiguration>;