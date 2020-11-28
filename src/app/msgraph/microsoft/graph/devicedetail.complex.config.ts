import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceDetail } from './devicedetail.complex';
import { DeviceDetailModel } from './devicedetail.model';
import { DeviceDetailCollection } from './devicedetail.collection';
//#endregion

export const DeviceDetailConfig = {
  name: "deviceDetail",
  model: DeviceDetailModel,
  collection: DeviceDetailCollection,
  annotations: [],
  fields: {
    browser: {type: 'Edm.String'},
    deviceId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    isCompliant: {type: 'Edm.Boolean'},
    isManaged: {type: 'Edm.Boolean'},
    operatingSystem: {type: 'Edm.String'},
    trustType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceDetail>;