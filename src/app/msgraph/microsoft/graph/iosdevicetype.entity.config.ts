import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosDeviceType } from './iosdevicetype.entity';
//#endregion

export const IosDeviceTypeConfig = {
  name: "IosDeviceType",
  annotations: [],
  fields: {
    iPad: {type: 'Edm.Boolean', nullable: false},
    iPhoneAndIPod: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<IosDeviceType>;