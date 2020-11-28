import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteSection } from './onenotesection.entity';
import { OnenoteSectionModel } from './onenotesection.model';
import { OnenoteSectionCollection } from './onenotesection.collection';
//#endregion

export const OnenoteSectionConfig = {
  name: "onenoteSection",
  base: "microsoft.graph.onenoteEntityHierarchyModel",
  model: OnenoteSectionModel,
  collection: OnenoteSectionCollection,
  annotations: [],
  fields: {
    isDefault: {type: 'Edm.Boolean'},
    links: {type: 'graph.sectionLinks'},
    pagesUrl: {type: 'Edm.String'},
    pages: {type: 'graph.onenotePage', collection: true, navigation: true},
    parentNotebook: {type: 'graph.notebook', navigation: true},
    parentSectionGroup: {type: 'graph.sectionGroup', navigation: true}
  }
} as EntityConfig<OnenoteSection>;