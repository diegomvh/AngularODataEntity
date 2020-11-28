import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MacOSCustomConfiguration } from './macoscustomconfiguration.entity';
import { MacOSCustomConfigurationModel } from './macoscustomconfiguration.model';
import { MacOSCustomConfigurationCollection } from './macoscustomconfiguration.collection';
//#endregion

export const MacOSCustomConfigurationConfig = {
  name: "macOSCustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: MacOSCustomConfigurationModel,
  collection: MacOSCustomConfigurationCollection,
  annotations: [],
  fields: {
    payload: {type: 'Edm.Binary', nullable: false},
    payloadFileName: {type: 'Edm.String'},
    payloadName: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<MacOSCustomConfiguration>;