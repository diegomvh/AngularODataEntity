import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SectionGroup } from './sectiongroup.entity';
//#endregion

export const SectionGroupConfig = {
  name: "SectionGroup",
  base: "microsoft.graph.onenoteEntityHierarchyModel",
  annotations: [],
  fields: {
    sectionsUrl: {type: 'Edm.String'},
    sectionGroupsUrl: {type: 'Edm.String'},
    parentNotebook: {type: 'graph.notebook', navigation: true},
    parentSectionGroup: {type: 'graph.sectionGroup', navigation: true},
    sections: {type: 'graph.onenoteSection', collection: true, navigation: true},
    sectionGroups: {type: 'graph.sectionGroup', collection: true, navigation: true}
  }
} as EntityConfig<SectionGroup>;