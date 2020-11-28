import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Teamwork } from './teamwork.entity';
import { TeamworkModel } from './teamwork.model';
import { TeamworkCollection } from './teamwork.collection';
//#endregion

export const TeamworkConfig = {
  name: "teamwork",
  base: "microsoft.graph.entity",
  model: TeamworkModel,
  collection: TeamworkCollection,
  annotations: [],
  fields: {
    workforceIntegrations: {type: 'graph.workforceIntegration', collection: true, navigation: true}
  }
} as EntityConfig<Teamwork>;