import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { VisualInfo } from './visualinfo.entity';
//#endregion

export const VisualInfoConfig = {
  name: "VisualInfo",
  annotations: [],
  fields: {
    attribution: {type: 'graph.imageInfo'},
    backgroundColor: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    displayText: {type: 'Edm.String', nullable: false},
    content: {type: 'graph.Json'}
  }
} as EntityConfig<VisualInfo>;