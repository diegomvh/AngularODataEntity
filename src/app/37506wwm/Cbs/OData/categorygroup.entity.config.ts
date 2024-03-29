﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CategoryGroup } from './categorygroup.entity';
import { CategoryGroupModel } from './categorygroup.model';
import { CategoryGroupCollection } from './categorygroup.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CategoryGroupEntityConfig = {
  name: "CategoryGroup",
  model: CategoryGroupModel,
  collection: CategoryGroupCollection,
  keys: [{name: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
    DimensionKey: {type: 'Edm.String'},
    Title: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    ParentID: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<CategoryGroup>;
//#endregion