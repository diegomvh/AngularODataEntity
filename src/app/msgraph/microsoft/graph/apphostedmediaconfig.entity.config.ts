import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppHostedMediaConfig } from './apphostedmediaconfig.entity';
//#endregion

export const AppHostedMediaConfigConfig = {
  name: "appHostedMediaConfig",
  base: "microsoft.graph.mediaConfig",
  annotations: [],
  fields: {
    blob: {type: 'Edm.String'}
  }
} as EntityConfig<AppHostedMediaConfig>;