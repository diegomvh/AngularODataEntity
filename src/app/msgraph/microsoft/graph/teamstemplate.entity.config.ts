import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsTemplate } from './teamstemplate.entity';
//#endregion

export const TeamsTemplateConfig = {
  name: "TeamsTemplate",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TeamsTemplate>;