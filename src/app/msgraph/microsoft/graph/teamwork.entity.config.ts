import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Teamwork } from './teamwork.entity';
//#endregion

export const TeamworkConfig = {
  name: "Teamwork",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    workforceIntegrations: {type: 'graph.workforceIntegration', collection: true, navigation: true}
  }
} as EntityConfig<Teamwork>;