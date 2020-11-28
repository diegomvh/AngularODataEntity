import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Onenote } from './onenote.entity';
import { OnenoteModel } from './onenote.model';
import { OnenoteCollection } from './onenote.collection';
//#endregion

export const OnenoteConfig = {
  name: "onenote",
  base: "microsoft.graph.entity",
  model: OnenoteModel,
  collection: OnenoteCollection,
  annotations: [],
  fields: {
    notebooks: {type: 'graph.notebook', collection: true, navigation: true},
    operations: {type: 'graph.onenoteOperation', collection: true, navigation: true},
    pages: {type: 'graph.onenotePage', collection: true, navigation: true},
    resources: {type: 'graph.onenoteResource', collection: true, navigation: true},
    sectionGroups: {type: 'graph.sectionGroup', collection: true, navigation: true},
    sections: {type: 'graph.onenoteSection', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Onenote>;