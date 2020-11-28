import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaPrompt } from './mediaprompt.entity';
import { MediaPromptModel } from './mediaprompt.model';
import { MediaPromptCollection } from './mediaprompt.collection';
//#endregion

export const MediaPromptConfig = {
  name: "mediaPrompt",
  base: "microsoft.graph.prompt",
  model: MediaPromptModel,
  collection: MediaPromptCollection,
  annotations: [],
  fields: {
    mediaInfo: {type: 'graph.mediaInfo', nullable: false}
  }
} as EntityConfig<MediaPrompt>;