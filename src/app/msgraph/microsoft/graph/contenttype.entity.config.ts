import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ContentType } from './contenttype.entity';
//#endregion

export const ContentTypeConfig = {
  name: "contentType",
  base: "microsoft.graph.entity",
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
} as EntityConfig<ContentType>;