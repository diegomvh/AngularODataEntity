import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SectionGroup } from './sectiongroup.entity';
import { SectionGroupModel } from './sectiongroup.model';
import { SectionGroupCollection } from './sectiongroup.collection';
//#endregion

export const SectionGroupConfig = {
  name: "sectionGroup",
  base: "microsoft.graph.onenoteEntityHierarchyModel",
  model: SectionGroupModel,
  collection: SectionGroupCollection,
  annotations: [],
  fields: {
    sectionGroupsUrl: {type: 'Edm.String'},
    sectionsUrl: {type: 'Edm.String'},
    parentNotebook: {type: 'graph.notebook', navigation: true},
    parentSectionGroup: {type: 'graph.sectionGroup', navigation: true},
    sectionGroups: {type: 'graph.sectionGroup', collection: true, navigation: true},
    sections: {type: 'graph.onenoteSection', collection: true, navigation: true}
  }
} as StructuredTypeConfig<SectionGroup>;