import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Security } from './security.entity';
import { SecurityModel } from './security.model';
import { SecurityCollection } from './security.collection';
//#endregion

export const SecurityConfig = {
  name: "security",
  base: "microsoft.graph.entity",
  model: SecurityModel,
  collection: SecurityCollection,
  annotations: [],
  fields: {
    alerts: {type: 'graph.alert', collection: true, navigation: true},
    secureScoreControlProfiles: {type: 'graph.secureScoreControlProfile', collection: true, navigation: true},
    secureScores: {type: 'graph.secureScore', collection: true, navigation: true}
  }
} as EntityConfig<Security>;