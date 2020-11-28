import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppInstallTimeSettings } from './mobileappinstalltimesettings.complex';
import { MobileAppInstallTimeSettingsModel } from './mobileappinstalltimesettings.model';
import { MobileAppInstallTimeSettingsCollection } from './mobileappinstalltimesettings.collection';
//#endregion

export const MobileAppInstallTimeSettingsConfig = {
  name: "mobileAppInstallTimeSettings",
  model: MobileAppInstallTimeSettingsModel,
  collection: MobileAppInstallTimeSettingsCollection,
  annotations: [],
  fields: {
    deadlineDateTime: {type: 'Edm.DateTimeOffset'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    useLocalTime: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<MobileAppInstallTimeSettings>;