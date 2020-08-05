import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MacOSCustomConfiguration } from './macoscustomconfiguration.entity';
//#endregion

export const MacOSCustomConfigurationConfig = {
  name: "MacOSCustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    payloadName: {type: 'Edm.String', nullable: false},
    payloadFileName: {type: 'Edm.String'},
    payload: {type: 'Edm.Binary', nullable: false}
  }
} as EntityConfig<MacOSCustomConfiguration>;