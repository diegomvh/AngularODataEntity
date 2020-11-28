import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { LinkedResource } from './linkedresource.entity';
import { LinkedResourceModel } from './linkedresource.model';
import { LinkedResourceCollection } from './linkedresource.collection';
//#endregion

export const LinkedResourceConfig = {
  name: "linkedResource",
  base: "microsoft.graph.entity",
  model: LinkedResourceModel,
  collection: LinkedResourceCollection,
  annotations: [],
  fields: {
    applicationName: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<LinkedResource>;