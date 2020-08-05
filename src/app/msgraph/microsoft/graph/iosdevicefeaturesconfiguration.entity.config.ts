import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosDeviceFeaturesConfiguration } from './iosdevicefeaturesconfiguration.entity';
//#endregion

export const IosDeviceFeaturesConfigurationConfig = {
  name: "IosDeviceFeaturesConfiguration",
  base: "microsoft.graph.appleDeviceFeaturesConfigurationBase",
  annotations: [],
  fields: {
    assetTagTemplate: {type: 'Edm.String'},
    lockScreenFootnote: {type: 'Edm.String'},
    homeScreenDockIcons: {type: 'graph.iosHomeScreenItem', collection: true},
    homeScreenPages: {type: 'graph.iosHomeScreenPage', collection: true},
    notificationSettings: {type: 'graph.iosNotificationSettings', collection: true}
  }
} as EntityConfig<IosDeviceFeaturesConfiguration>;