import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosNotificationSettings } from './iosnotificationsettings.entity';
import { IosNotificationSettingsModel } from './iosnotificationsettings.model';
import { IosNotificationSettingsCollection } from './iosnotificationsettings.collection';
//#endregion

export const IosNotificationSettingsConfig = {
  name: "iosNotificationSettings",
  model: IosNotificationSettingsModel,
  collection: IosNotificationSettingsCollection,
  annotations: [],
  fields: {
    alertType: {type: 'graph.iosNotificationAlertType', nullable: false},
    appName: {type: 'Edm.String'},
    badgesEnabled: {type: 'Edm.Boolean'},
    bundleID: {type: 'Edm.String', nullable: false},
    enabled: {type: 'Edm.Boolean'},
    publisher: {type: 'Edm.String'},
    showInNotificationCenter: {type: 'Edm.Boolean'},
    showOnLockScreen: {type: 'Edm.Boolean'},
    soundsEnabled: {type: 'Edm.Boolean'}
  }
} as EntityConfig<IosNotificationSettings>;