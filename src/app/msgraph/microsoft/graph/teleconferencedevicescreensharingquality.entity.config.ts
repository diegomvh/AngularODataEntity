import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceScreenSharingQuality } from './teleconferencedevicescreensharingquality.entity';
import { TeleconferenceDeviceScreenSharingQualityModel } from './teleconferencedevicescreensharingquality.model';
import { TeleconferenceDeviceScreenSharingQualityCollection } from './teleconferencedevicescreensharingquality.collection';
//#endregion

export const TeleconferenceDeviceScreenSharingQualityConfig = {
  name: "teleconferenceDeviceScreenSharingQuality",
  base: "microsoft.graph.teleconferenceDeviceVideoQuality",
  open: true,
  model: TeleconferenceDeviceScreenSharingQualityModel,
  collection: TeleconferenceDeviceScreenSharingQualityCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TeleconferenceDeviceScreenSharingQuality>;