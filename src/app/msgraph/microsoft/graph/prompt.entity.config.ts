import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Prompt } from './prompt.entity';
import { PromptModel } from './prompt.model';
import { PromptCollection } from './prompt.collection';
//#endregion

export const PromptConfig = {
  name: "prompt",
  model: PromptModel,
  collection: PromptCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<Prompt>;