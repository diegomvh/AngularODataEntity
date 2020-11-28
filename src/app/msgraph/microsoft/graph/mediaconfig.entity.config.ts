import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaConfig } from './mediaconfig.entity';
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
} as EntityConfig<MediaConfig>;