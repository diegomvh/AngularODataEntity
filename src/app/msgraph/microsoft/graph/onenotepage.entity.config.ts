import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePage } from './onenotepage.entity';
import { OnenotePageModel } from './onenotepage.model';
import { OnenotePageCollection } from './onenotepage.collection';
//#endregion

export const OnenotePageConfig = {
  name: "onenotePage",
  base: "microsoft.graph.onenoteEntitySchemaObjectModel",
  model: OnenotePageModel,
  collection: OnenotePageCollection,
  annotations: [],
  fields: {
    content: {type: 'Edm.Stream'},
    contentUrl: {type: 'Edm.String'},
    createdByAppId: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    level: {type: 'Edm.Int32'},
    links: {type: 'graph.pageLinks'},
    order: {type: 'Edm.Int32'},
    title: {type: 'Edm.String'},
    userTags: {type: 'Edm.String', collection: true},
    parentNotebook: {type: 'graph.notebook', navigation: true},
    parentSection: {type: 'graph.onenoteSection', navigation: true}
  }
} as StructuredTypeConfig<OnenotePage>;