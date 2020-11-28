import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppleDeviceFeaturesConfigurationBase } from './appledevicefeaturesconfigurationbase.entity';
import { AppleDeviceFeaturesConfigurationBaseModel } from './appledevicefeaturesconfigurationbase.model';
import { AppleDeviceFeaturesConfigurationBaseCollection } from './appledevicefeaturesconfigurationbase.collection';
//#endregion

export const AppleDeviceFeaturesConfigurationBaseConfig = {
  name: "appleDeviceFeaturesConfigurationBase",
  base: "microsoft.graph.deviceConfiguration",
  model: AppleDeviceFeaturesConfigurationBaseModel,
  collection: AppleDeviceFeaturesConfigurationBaseCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<AppleDeviceFeaturesConfigurationBase>;