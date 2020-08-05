import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsTab } from './teamstab.entity';
//#endregion

export const TeamsTabConfig = {
  name: "TeamsTab",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'},
    configuration: {type: 'graph.teamsTabConfiguration'},
    teamsApp: {type: 'graph.teamsApp', navigation: true}
  }
} as EntityConfig<TeamsTab>;