import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteResource } from './onenoteresource.entity';
import { OnenoteResourceModel } from './onenoteresource.model';
import { OnenoteResourceCollection } from './onenoteresource.collection';
//#endregion

export const OnenoteResourceConfig = {
  name: "onenoteResource",
  base: "microsoft.graph.onenoteEntityBaseModel",
  model: OnenoteResourceModel,
  collection: OnenoteResourceCollection,
  annotations: [],
  fields: {
    content: {type: 'Edm.Stream'},
    contentUrl: {type: 'Edm.String'}
  }
} as EntityConfig<OnenoteResource>;