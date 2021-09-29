//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryModel } from './timecategory.model';
import { TimeCategoryCollection } from './timecategory.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TimeCategoryEntityConfig = {
  name: "TimeCategory",
  model: TimeCategoryModel,
  collection: TimeCategoryCollection,
  keys: [{name: 'Key'}],
  fields: {
    Key: {type: 'Edm.String', nullable: false},
    Title: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    Status: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TimeCategory>;
//#endregion