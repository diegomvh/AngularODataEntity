import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlayPromptOperation } from './playpromptoperation.entity';
//#endregion

export const PlayPromptOperationConfig = {
  name: "playPromptOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<PlayPromptOperation>;