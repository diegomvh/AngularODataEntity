import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoryGroup } from './categorygroup.entity';
import { CategoryGroupModel } from './categorygroup.model';
import { CategoryGroupCollection } from './categorygroup.collection';
//#endregion

export const CategoryGroupConfig = {
  name: "CategoryGroup",
  model: CategoryGroupModel,
  collection: CategoryGroupCollection,
  annotations: [],
  fields: {
    ID: {type: 'Edm.Int32', key: true, ref: 'ID', nullable: false},
    DimensionKey: {type: 'Edm.String'},
    Title: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    ParentID: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<CategoryGroup>;