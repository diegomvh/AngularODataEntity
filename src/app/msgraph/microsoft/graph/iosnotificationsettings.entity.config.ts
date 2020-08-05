import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosNotificationSettings } from './iosnotificationsettings.entity';
//#endregion

export const IosNotificationSettingsConfig = {
  name: "iosNotificationSettings",
  annotations: [],
  fields: {
    bundleID: {type: 'Edm.String', nullable: false},
    appName: {type: 'Edm.String'},
    publisher: {type: 'Edm.String'},
    enabled: {type: 'Edm.Boolean'},
    showInNotificationCenter: {type: 'Edm.Boolean'},
    showOnLockScreen: {type: 'Edm.Boolean'},
    alertType: {type: 'graph.iosNotificationAlertType', nullable: false},
    badgesEnabled: {type: 'Edm.Boolean'},
    soundsEnabled: {type: 'Edm.Boolean'}
  }
} as EntityConfig<IosNotificationSettings>;