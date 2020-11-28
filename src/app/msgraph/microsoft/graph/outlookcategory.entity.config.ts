import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OutlookCategory } from './outlookcategory.entity';
import { OutlookCategoryModel } from './outlookcategory.model';
import { OutlookCategoryCollection } from './outlookcategory.collection';
//#endregion

export const OutlookCategoryConfig = {
  name: "outlookCategory",
  base: "microsoft.graph.entity",
  model: OutlookCategoryModel,
  collection: OutlookCategoryCollection,
  annotations: [],
  fields: {
    color: {type: 'graph.categoryColor'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<OutlookCategory>;