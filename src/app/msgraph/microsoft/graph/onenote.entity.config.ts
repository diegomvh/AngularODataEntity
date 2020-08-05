import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Onenote } from './onenote.entity';
//#endregion

export const OnenoteConfig = {
  name: "Onenote",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    notebooks: {type: 'graph.notebook', collection: true, navigation: true},
    sections: {type: 'graph.onenoteSection', collection: true, navigation: true},
    sectionGroups: {type: 'graph.sectionGroup', collection: true, navigation: true},
    pages: {type: 'graph.onenotePage', collection: true, navigation: true},
    resources: {type: 'graph.onenoteResource', collection: true, navigation: true},
    operations: {type: 'graph.onenoteOperation', collection: true, navigation: true}
  }
} as EntityConfig<Onenote>;