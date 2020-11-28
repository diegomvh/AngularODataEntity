import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MacOSDeviceFeaturesConfiguration } from './macosdevicefeaturesconfiguration.entity';
import { MacOSDeviceFeaturesConfigurationModel } from './macosdevicefeaturesconfiguration.model';
import { MacOSDeviceFeaturesConfigurationCollection } from './macosdevicefeaturesconfiguration.collection';
//#endregion

export const MacOSDeviceFeaturesConfigurationConfig = {
  name: "macOSDeviceFeaturesConfiguration",
  base: "microsoft.graph.appleDeviceFeaturesConfigurationBase",
  model: MacOSDeviceFeaturesConfigurationModel,
  collection: MacOSDeviceFeaturesConfigurationCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<MacOSDeviceFeaturesConfiguration>;