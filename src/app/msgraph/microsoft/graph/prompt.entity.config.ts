import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Prompt } from './prompt.entity';
//#endregion

export const PromptConfig = {
  name: "prompt",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<Prompt>;