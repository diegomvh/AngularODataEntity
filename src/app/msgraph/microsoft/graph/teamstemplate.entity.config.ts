import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsTemplate } from './teamstemplate.entity';
import { TeamsTemplateModel } from './teamstemplate.model';
import { TeamsTemplateCollection } from './teamstemplate.collection';
//#endregion

export const TeamsTemplateConfig = {
  name: "teamsTemplate",
  base: "microsoft.graph.entity",
  model: TeamsTemplateModel,
  collection: TeamsTemplateCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TeamsTemplate>;