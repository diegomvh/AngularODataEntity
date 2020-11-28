import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryModel } from './timecategory.model';
import { TimeCategoryCollection } from './timecategory.collection';
//#endregion

export const TimeCategoryConfig = {
  name: "TimeCategory",
  model: TimeCategoryModel,
  collection: TimeCategoryCollection,
  annotations: [],
  fields: {
    Key: {type: 'Edm.String', key: true, ref: 'Key', nullable: false},
    Title: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    Status: {type: 'Edm.String'}
  }
} as EntityConfig<TimeCategory>;