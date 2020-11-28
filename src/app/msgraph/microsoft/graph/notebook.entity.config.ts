import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Notebook } from './notebook.entity';
import { NotebookModel } from './notebook.model';
import { NotebookCollection } from './notebook.collection';
//#endregion

export const NotebookConfig = {
  name: "notebook",
  base: "microsoft.graph.onenoteEntityHierarchyModel",
  model: NotebookModel,
  collection: NotebookCollection,
  annotations: [],
  fields: {
    isDefault: {type: 'Edm.Boolean'},
    isShared: {type: 'Edm.Boolean'},
    links: {type: 'graph.notebookLinks'},
    sectionGroupsUrl: {type: 'Edm.String'},
    sectionsUrl: {type: 'Edm.String'},
    userRole: {type: 'graph.onenoteUserRole'},
    sectionGroups: {type: 'graph.sectionGroup', collection: true, navigation: true},
    sections: {type: 'graph.onenoteSection', collection: true, navigation: true}
  }
} as EntityConfig<Notebook>;