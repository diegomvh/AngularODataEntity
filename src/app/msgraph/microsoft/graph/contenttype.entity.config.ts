import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ContentType } from './contenttype.entity';
import { ContentTypeModel } from './contenttype.model';
import { ContentTypeCollection } from './contenttype.collection';
//#endregion

export const ContentTypeConfig = {
  name: "contentType",
  base: "microsoft.graph.entity",
  model: ContentTypeModel,
  collection: ContentTypeCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    group: {type: 'Edm.String'},
    hidden: {type: 'Edm.Boolean'},
    inheritedFrom: {type: 'graph.itemReference'},
    name: {type: 'Edm.String'},
    order: {type: 'graph.contentTypeOrder'},
    parentId: {type: 'Edm.String'},
    readOnly: {type: 'Edm.Boolean'},
    sealed: {type: 'Edm.Boolean'},
    columnLinks: {type: 'graph.columnLink', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ContentType>;