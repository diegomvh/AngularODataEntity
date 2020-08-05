import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteSection } from './onenotesection.entity';
//#endregion

export const OnenoteSectionConfig = {
  name: "onenoteSection",
  base: "microsoft.graph.onenoteEntityHierarchyModel",
  annotations: [],
  fields: {
    isDefault: {type: 'Edm.Boolean'},
    links: {type: 'graph.sectionLinks'},
    pagesUrl: {type: 'Edm.String'},
    parentNotebook: {type: 'graph.notebook', navigation: true},
    parentSectionGroup: {type: 'graph.sectionGroup', navigation: true},
    pages: {type: 'graph.onenotePage', collection: true, navigation: true}
  }
} as EntityConfig<OnenoteSection>;