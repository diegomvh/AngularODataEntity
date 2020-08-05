import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Security } from './security.entity';
//#endregion

export const SecurityConfig = {
  name: "security",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    alerts: {type: 'graph.alert', collection: true, navigation: true},
    secureScoreControlProfiles: {type: 'graph.secureScoreControlProfile', collection: true, navigation: true},
    secureScores: {type: 'graph.secureScore', collection: true, navigation: true}
  }
} as EntityConfig<Security>;