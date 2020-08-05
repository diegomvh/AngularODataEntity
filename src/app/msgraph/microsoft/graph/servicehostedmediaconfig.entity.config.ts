import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ServiceHostedMediaConfig } from './servicehostedmediaconfig.entity';
//#endregion

export const ServiceHostedMediaConfigConfig = {
  name: "ServiceHostedMediaConfig",
  base: "microsoft.graph.mediaConfig",
  annotations: [],
  fields: {
    preFetchMedia: {type: 'graph.mediaInfo', collection: true}
  }
} as EntityConfig<ServiceHostedMediaConfig>;