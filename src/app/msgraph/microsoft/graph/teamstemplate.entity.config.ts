import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsTemplate } from './teamstemplate.entity';
//#endregion

export const TeamsTemplateConfig = {
  name: "teamsTemplate",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TeamsTemplate>;