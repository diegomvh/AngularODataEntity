import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ServiceHostedMediaConfig } from './servicehostedmediaconfig.entity';
import { ServiceHostedMediaConfigModel } from './servicehostedmediaconfig.model';
import { ServiceHostedMediaConfigCollection } from './servicehostedmediaconfig.collection';
//#endregion

export const ServiceHostedMediaConfigConfig = {
  name: "serviceHostedMediaConfig",
  base: "microsoft.graph.mediaConfig",
  model: ServiceHostedMediaConfigModel,
  collection: ServiceHostedMediaConfigCollection,
  annotations: [],
  fields: {
    preFetchMedia: {type: 'graph.mediaInfo', collection: true}
  }
} as EntityConfig<ServiceHostedMediaConfig>;