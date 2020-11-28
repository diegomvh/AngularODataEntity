import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlayPromptOperation } from './playpromptoperation.entity';
import { PlayPromptOperationModel } from './playpromptoperation.model';
import { PlayPromptOperationCollection } from './playpromptoperation.collection';
//#endregion

export const PlayPromptOperationConfig = {
  name: "playPromptOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  model: PlayPromptOperationModel,
  collection: PlayPromptOperationCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<PlayPromptOperation>;