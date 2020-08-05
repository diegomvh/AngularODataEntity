import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCategory } from './devicecategory.entity';
//#endregion

export const DeviceCategoryConfig = {
  name: "deviceCategory",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceCategory>;