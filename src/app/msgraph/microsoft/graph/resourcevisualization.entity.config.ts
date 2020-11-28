import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceVisualization } from './resourcevisualization.entity';
import { ResourceVisualizationModel } from './resourcevisualization.model';
import { ResourceVisualizationCollection } from './resourcevisualization.collection';
//#endregion

export const ResourceVisualizationConfig = {
  name: "resourceVisualization",
  model: ResourceVisualizationModel,
  collection: ResourceVisualizationCollection,
  annotations: [],
  fields: {
    containerDisplayName: {type: 'Edm.String'},
    containerType: {type: 'Edm.String'},
    containerWebUrl: {type: 'Edm.String'},
    mediaType: {type: 'Edm.String'},
    previewImageUrl: {type: 'Edm.String'},
    previewText: {type: 'Edm.String'},
    title: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as EntityConfig<ResourceVisualization>;