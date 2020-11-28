import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceGeoLocation } from './devicegeolocation.complex';
import { DeviceGeoLocationModel } from './devicegeolocation.model';
import { DeviceGeoLocationCollection } from './devicegeolocation.collection';
//#endregion

export const DeviceGeoLocationConfig = {
  name: "deviceGeoLocation",
  model: DeviceGeoLocationModel,
  collection: DeviceGeoLocationCollection,
  annotations: [],
  fields: {
    altitude: {type: 'Edm.Double', nullable: false},
    heading: {type: 'Edm.Double', nullable: false},
    horizontalAccuracy: {type: 'Edm.Double', nullable: false},
    lastCollectedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    latitude: {type: 'Edm.Double', nullable: false},
    longitude: {type: 'Edm.Double', nullable: false},
    speed: {type: 'Edm.Double', nullable: false},
    verticalAccuracy: {type: 'Edm.Double', nullable: false}
  }
} as StructuredTypeConfig<DeviceGeoLocation>;