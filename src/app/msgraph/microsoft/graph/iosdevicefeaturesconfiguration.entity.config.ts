import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosDeviceFeaturesConfiguration } from './iosdevicefeaturesconfiguration.entity';
import { IosDeviceFeaturesConfigurationModel } from './iosdevicefeaturesconfiguration.model';
import { IosDeviceFeaturesConfigurationCollection } from './iosdevicefeaturesconfiguration.collection';
//#endregion

export const IosDeviceFeaturesConfigurationConfig = {
  name: "iosDeviceFeaturesConfiguration",
  base: "microsoft.graph.appleDeviceFeaturesConfigurationBase",
  model: IosDeviceFeaturesConfigurationModel,
  collection: IosDeviceFeaturesConfigurationCollection,
  annotations: [],
  fields: {
    assetTagTemplate: {type: 'Edm.String'},
    homeScreenDockIcons: {type: 'graph.iosHomeScreenItem', collection: true},
    homeScreenPages: {type: 'graph.iosHomeScreenPage', collection: true},
    lockScreenFootnote: {type: 'Edm.String'},
    notificationSettings: {type: 'graph.iosNotificationSettings', collection: true}
  }
} as EntityConfig<IosDeviceFeaturesConfiguration>;