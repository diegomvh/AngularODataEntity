import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceDetail } from './devicedetail.entity';
//#endregion

export const DeviceDetailConfig = {
  name: "DeviceDetail",
  annotations: [],
  fields: {
    deviceId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    operatingSystem: {type: 'Edm.String'},
    browser: {type: 'Edm.String'},
    isCompliant: {type: 'Edm.Boolean'},
    isManaged: {type: 'Edm.Boolean'},
    trustType: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceDetail>;