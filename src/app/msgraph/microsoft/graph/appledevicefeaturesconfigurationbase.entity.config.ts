import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppleDeviceFeaturesConfigurationBase } from './appledevicefeaturesconfigurationbase.entity';
//#endregion

export const AppleDeviceFeaturesConfigurationBaseConfig = {
  name: "AppleDeviceFeaturesConfigurationBase",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<AppleDeviceFeaturesConfigurationBase>;