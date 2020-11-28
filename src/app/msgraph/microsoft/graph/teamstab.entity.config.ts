import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsTab } from './teamstab.entity';
import { TeamsTabModel } from './teamstab.model';
import { TeamsTabCollection } from './teamstab.collection';
//#endregion

export const TeamsTabConfig = {
  name: "teamsTab",
  base: "microsoft.graph.entity",
  model: TeamsTabModel,
  collection: TeamsTabCollection,
  annotations: [],
  fields: {
    configuration: {type: 'graph.teamsTabConfiguration'},
    displayName: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'},
    teamsApp: {type: 'graph.teamsApp', navigation: true}
  }
} as EntityConfig<TeamsTab>;