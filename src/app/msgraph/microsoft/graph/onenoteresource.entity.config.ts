import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteResource } from './onenoteresource.entity';
//#endregion

export const OnenoteResourceConfig = {
  name: "onenoteResource",
  base: "microsoft.graph.onenoteEntityBaseModel",
  annotations: [],
  fields: {
    content: {type: 'Edm.Stream'},
    contentUrl: {type: 'Edm.String'}
  }
} as EntityConfig<OnenoteResource>;