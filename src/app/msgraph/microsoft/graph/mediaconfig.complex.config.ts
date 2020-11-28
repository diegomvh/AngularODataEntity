import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaConfig } from './mediaconfig.complex';
import { MediaConfigModel } from './mediaconfig.model';
import { MediaConfigCollection } from './mediaconfig.collection';
//#endregion

export const MediaConfigConfig = {
  name: "mediaConfig",
  model: MediaConfigModel,
  collection: MediaConfigCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<MediaConfig>;