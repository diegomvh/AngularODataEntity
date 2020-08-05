import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CopyNotebookModel } from './copynotebookmodel.entity';
//#endregion

export const CopyNotebookModelConfig = {
  name: "CopyNotebookModel",
  annotations: [],
  fields: {
    isDefault: {type: 'Edm.Boolean'},
    userRole: {type: 'graph.onenoteUserRole'},
    isShared: {type: 'Edm.Boolean'},
    sectionsUrl: {type: 'Edm.String'},
    sectionGroupsUrl: {type: 'Edm.String'},
    links: {type: 'graph.notebookLinks'},
    name: {type: 'Edm.String'},
    createdBy: {type: 'Edm.String'},
    createdByIdentity: {type: 'graph.identitySet'},
    lastModifiedBy: {type: 'Edm.String'},
    lastModifiedByIdentity: {type: 'graph.identitySet'},
    lastModifiedTime: {type: 'Edm.DateTimeOffset'},
    id: {type: 'Edm.String'},
    self: {type: 'Edm.String'},
    createdTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<CopyNotebookModel>;