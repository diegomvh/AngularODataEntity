import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { VisualInfo } from './visualinfo.complex';
import { VisualInfoModel } from './visualinfo.model';
import { VisualInfoCollection } from './visualinfo.collection';
//#endregion

export const VisualInfoConfig = {
  name: "visualInfo",
  model: VisualInfoModel,
  collection: VisualInfoCollection,
  annotations: [],
  fields: {
    attribution: {type: 'graph.imageInfo'},
    backgroundColor: {type: 'Edm.String'},
    content: {type: 'graph.Json'},
    description: {type: 'Edm.String'},
    displayText: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<VisualInfo>;