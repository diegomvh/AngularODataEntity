import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceGeoLocation } from './devicegeolocation.entity';
//#endregion

export const DeviceGeoLocationConfig = {
  name: "DeviceGeoLocation",
  annotations: [],
  fields: {
    lastCollectedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    longitude: {type: 'Edm.Double', nullable: false},
    latitude: {type: 'Edm.Double', nullable: false},
    altitude: {type: 'Edm.Double', nullable: false},
    horizontalAccuracy: {type: 'Edm.Double', nullable: false},
    verticalAccuracy: {type: 'Edm.Double', nullable: false},
    heading: {type: 'Edm.Double', nullable: false},
    speed: {type: 'Edm.Double', nullable: false}
  }
} as EntityConfig<DeviceGeoLocation>;