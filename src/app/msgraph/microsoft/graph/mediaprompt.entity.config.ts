import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaPrompt } from './mediaprompt.entity';
//#endregion

export const MediaPromptConfig = {
  name: "mediaPrompt",
  base: "microsoft.graph.prompt",
  annotations: [],
  fields: {
    mediaInfo: {type: 'graph.mediaInfo', nullable: false}
  }
} as EntityConfig<MediaPrompt>;