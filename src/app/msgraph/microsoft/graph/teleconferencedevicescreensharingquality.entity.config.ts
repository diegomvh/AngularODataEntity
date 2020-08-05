import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceScreenSharingQuality } from './teleconferencedevicescreensharingquality.entity';
//#endregion

export const TeleconferenceDeviceScreenSharingQualityConfig = {
  name: "teleconferenceDeviceScreenSharingQuality",
  base: "microsoft.graph.teleconferenceDeviceVideoQuality",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TeleconferenceDeviceScreenSharingQuality>;