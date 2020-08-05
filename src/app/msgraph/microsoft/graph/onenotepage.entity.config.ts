import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePage } from './onenotepage.entity';
//#endregion

export const OnenotePageConfig = {
  name: "OnenotePage",
  base: "microsoft.graph.onenoteEntitySchemaObjectModel",
  annotations: [],
  fields: {
    title: {type: 'Edm.String'},
    createdByAppId: {type: 'Edm.String'},
    links: {type: 'graph.pageLinks'},
    contentUrl: {type: 'Edm.String'},
    content: {type: 'Edm.Stream'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    level: {type: 'Edm.Int32'},
    order: {type: 'Edm.Int32'},
    userTags: {type: 'Edm.String', collection: true},
    parentSection: {type: 'graph.onenoteSection', navigation: true},
    parentNotebook: {type: 'graph.notebook', navigation: true}
  }
} as EntityConfig<OnenotePage>;