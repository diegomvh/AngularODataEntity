import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Notebook } from './notebook.entity';
//#endregion

export const NotebookConfig = {
  name: "notebook",
  base: "microsoft.graph.onenoteEntityHierarchyModel",
  annotations: [],
  fields: {
    isDefault: {type: 'Edm.Boolean'},
    userRole: {type: 'graph.onenoteUserRole'},
    isShared: {type: 'Edm.Boolean'},
    sectionsUrl: {type: 'Edm.String'},
    sectionGroupsUrl: {type: 'Edm.String'},
    links: {type: 'graph.notebookLinks'},
    sections: {type: 'graph.onenoteSection', collection: true, navigation: true},
    sectionGroups: {type: 'graph.sectionGroup', collection: true, navigation: true}
  }
} as EntityConfig<Notebook>;