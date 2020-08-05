import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MacOSDeviceFeaturesConfiguration } from './macosdevicefeaturesconfiguration.entity';
//#endregion

export const MacOSDeviceFeaturesConfigurationConfig = {
  name: "macOSDeviceFeaturesConfiguration",
  base: "microsoft.graph.appleDeviceFeaturesConfigurationBase",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<MacOSDeviceFeaturesConfiguration>;