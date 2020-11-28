import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCategory } from './devicecategory.entity';
import { DeviceCategoryModel } from './devicecategory.model';
import { DeviceCategoryCollection } from './devicecategory.collection';
//#endregion

export const DeviceCategoryConfig = {
  name: "deviceCategory",
  base: "microsoft.graph.entity",
  model: DeviceCategoryModel,
  collection: DeviceCategoryCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceCategory>;