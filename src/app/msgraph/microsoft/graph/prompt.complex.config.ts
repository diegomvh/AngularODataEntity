import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Prompt } from './prompt.complex';
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
} as StructuredTypeConfig<Prompt>;