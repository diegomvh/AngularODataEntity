import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CopyNotebookModel } from './copynotebookmodel.entity';
import { CopyNotebookModelModel } from './copynotebookmodel.model';
import { CopyNotebookModelCollection } from './copynotebookmodel.collection';
//#endregion

export const CopyNotebookModelConfig = {
  name: "CopyNotebookModel",
  model: CopyNotebookModelModel,
  collection: CopyNotebookModelCollection,
  annotations: [],
  fields: {
    createdBy: {type: 'Edm.String'},
    createdByIdentity: {type: 'graph.identitySet'},
    createdTime: {type: 'Edm.DateTimeOffset'},
    id: {type: 'Edm.String'},
    isDefault: {type: 'Edm.Boolean'},
    isShared: {type: 'Edm.Boolean'},
    lastModifiedBy: {type: 'Edm.String'},
    lastModifiedByIdentity: {type: 'graph.identitySet'},
    lastModifiedTime: {type: 'Edm.DateTimeOffset'},
    links: {type: 'graph.notebookLinks'},
    name: {type: 'Edm.String'},
    sectionGroupsUrl: {type: 'Edm.String'},
    sectionsUrl: {type: 'Edm.String'},
    self: {type: 'Edm.String'},
    userRole: {type: 'graph.onenoteUserRole'}
  }
} as EntityConfig<CopyNotebookModel>;