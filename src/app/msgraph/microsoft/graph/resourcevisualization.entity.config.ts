import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceVisualization } from './resourcevisualization.entity';
//#endregion

export const ResourceVisualizationConfig = {
  name: "resourceVisualization",
  annotations: [],
  fields: {
    title: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    mediaType: {type: 'Edm.String'},
    previewImageUrl: {type: 'Edm.String'},
    previewText: {type: 'Edm.String'},
    containerWebUrl: {type: 'Edm.String'},
    containerDisplayName: {type: 'Edm.String'},
    containerType: {type: 'Edm.String'}
  }
} as EntityConfig<ResourceVisualization>;