import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppHostedMediaConfig } from './apphostedmediaconfig.entity';
import { AppHostedMediaConfigModel } from './apphostedmediaconfig.model';
import { AppHostedMediaConfigCollection } from './apphostedmediaconfig.collection';
//#endregion

export const AppHostedMediaConfigConfig = {
  name: "appHostedMediaConfig",
  base: "microsoft.graph.mediaConfig",
  model: AppHostedMediaConfigModel,
  collection: AppHostedMediaConfigCollection,
  annotations: [],
  fields: {
    blob: {type: 'Edm.String'}
  }
} as EntityConfig<AppHostedMediaConfig>;